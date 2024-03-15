from ai1.ai1 import AI1
from ai2.ai2 import AI2
import requests


class Backend:

    def __init__(self) -> None:
        super().__init__()
        self.ai1 = AI1()
        self.ai2 = AI2()

    def get_for_input(self, user_input):
        user_input = user_input.split("+")

        # Display the input below when the user hits enter
        keywords = self.ai1.refine(user_input)
        result = self.callCKAN(keywords)
        improvement = self.ai2.refine(user_input, keywords, result["result"])

        result["message"] = improvement.message
        result["widening_prompts"] = improvement.widening_prompts
        result["narrowing_prompts"] = improvement.narrowing_prompts
        result["alternative_prompts"] = improvement.alternative_prompts
        return keywords, result, improvement

    def callCKAN(self, values):
        titles = [f"title:{v}" for v in values]
        descriptions = [f"description:{v}" for v in values]
        tags = [f"tags:{v}" for v in values]
        title_string = "%20OR%20".join(titles)
        description_string = "%20OR%20".join(descriptions)
        tags_string = "%20OR%20".join(tags)
        url = f"https://ckan.opendata.swiss/api/3/action/package_search?q={title_string}%20OR%20{description_string}%20OR%20{tags_string}"

        print(f"url: {url}")

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
