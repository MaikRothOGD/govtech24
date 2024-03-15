from openai import OpenAI


class AI1:

    def __init__(self, api_key):
        self.client = OpenAI(api_key=api_key)

    def refine(self, input: str) -> list:
        completion = self.client.chat.completions.create(
            model="gpt-4-0125-preview",
            messages=[
                {
                    "role": "system",
                    "content": """Based on the Input, generate a list of relevant keywords that will be used for a search query on an open data catalogue powered by a SolR search engine. 

                1. The keywords must be written in the singular form. 
                2. Return a maximum of 10 keywords
                3. Be creative in the words you generate, think about synomyms.
                4. Correct any spelling error in the Input.
                5. Return all keywords in German.
                6. Present results as a list of keywords separated with spaces.

                Input: Give me all datasets about acute care hospital in Switzerland.
        
                Output: Geshundheit Geshundheitswesen Akutspital Spital Akutversorgung Notfallversorgung Schweiz
                """},
                {
                    "role": "user",
                    "content": input
                }
            ]
        )

        return completion.choices[0].message.content.split(" ")
