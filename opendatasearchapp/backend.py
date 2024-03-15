import os
from ai1.ai1 import AI1
from ai2.ai2 import AI2
from dotenv import load_dotenv
import requests


class Backend:

    def __init__(self) -> None:
        super().__init__()
        load_dotenv()
        key = os.environ.get("OPENAI_API_KEY")
        self.ai1 = AI1(key)
        self.ai2 = AI2(key)

    def get_for_input(self, user_input):
        user_input = " ".join(user_input.split("+"))

        # Display the input below when the user hits enter
        keywords = self.ai1.refine(user_input)
        result = self.callCKAN(keywords)
        improvement = self.ai2.refine(user_input.split(" "), keywords, result["result"])

        result["message"] = improvement[0].message
        result["widening_prompts"] = improvement[0].widening_prompts
        result["narrowing_prompts"] = improvement[0].narrowing_prompts
        result["alternative_prompts"] = improvement[0].alternative_prompts
        return result

    def callCKAN(self, values):
        titles = [f"title:{v}" for v in values]
        descriptions = [f"description:{v}" for v in values]
        tags = [f"tags:{v}" for v in values]
        title_string = "%20OR%20".join(titles)
        description_string = "%20OR%20".join(descriptions)
        tags_string = "%20OR%20".join(tags)
        url = f"https://ckan.opendata.swiss/api/3/action/package_search?q={title_string}%20OR%20{description_string}%20OR%20{tags_string}"

        # Make a GET request
        response = requests.get(url)

        # Check if the request was successful (status code 200)
        if response.status_code == 200:
            # Parse the response content (assuming it's in JSON format)
            data = response.json()
        else:
            print(f"Error: {response.status_code} - {response.reason}")
            data = {}
        return data
