
import requests
from dataclasses import dataclass
from openai import OpenAI



@dataclass(frozen=True)
class Output:
    message: str
    widening_prompts: list[str]
    narrowing_prompts: list[str]
    alternative_prompts: list[str]


class AI2:
    def __init__(self, api_key):
        self.client = OpenAI(api_key=api_key)

    def refine(
        self, user_input: list[str], keywords: list[str], result: dict
    ) -> list[Output]:
        keyword = keywords[0]

        resp = requests.get("https://ckan.opendata.swiss/api/3/action/tag_list")
        resp_json = resp.json()
        tags = resp_json["result"]
        tags_deduped = list(dict.fromkeys(tags))

        chat_completion = self.client.chat.completions.create(
            model="gpt-4-turbo-preview",
            temperature=0,
            messages=[
                {
                    "role": "user",
                    "content": f"The most relevant related terms to {keyword} in the same language. Output only the terms, one per line as raw lowercase strings.",
                }
            ],
        )
        alternatives = chat_completion.choices[0].message.content.splitlines()

        alternative_tags = []
        for a in alternatives:
            for t in tags_deduped:
                if a in t:
                    alternative_tags += [t]

        chat_completion_2 = self.client.chat.completions.create(
            model="gpt-4-turbo-preview",
            temperature=1,
            messages=[
                {
                    "role": "user",
                    "content": f"Which of the following terms is related to {keyword}: {','.join(alternative_tags)}? Output only the terms, one per line as raw lowercase strings. Add a line with a sentence in the language of the terms stating how you feel about these results.",
                }
            ],
        )

        final_answer = chat_completion_2.choices[0].message.content.splitlines()
        relevant_tags = final_answer[0:-1]
        relevant_tags = list(filter(lambda t: t != "", relevant_tags))
        message = final_answer[-1]
        return [
            Output(
                message=message,
                widening_prompts=list(
                    map(lambda t: f"{keyword} OR {t}", relevant_tags)
                ),
                narrowing_prompts=list(
                    map(lambda t: f"{keyword} AND {t}", relevant_tags)
                ),
                alternative_prompts=relevant_tags,
            )
        ]


