from openai import OpenAI

client = OpenAI()

class AI1:

    def __init__(self):
        pass

    def refine(self, input: str) -> list:
        completion = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {
                    "role": "system",
                    "content": "You are an assistant to reformulate and improve search query for solr search platform. You must give the most relevant search keywords. You must give only 5 keywords separated by white space."
                    },
                {
                    "role": "user", 
                    "content": input
                    }
            ]
        )

        return completion.choices[0].message.content.split(" ")
