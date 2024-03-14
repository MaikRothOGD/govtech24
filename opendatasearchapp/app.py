import streamlit as st

from ai1 import ai1
from ai1.ai1 import AI1
from ai2.ai2 import AI2

ai1 = AI1()
ai2 = AI2()
# Create a text input field
user_input = st.text_input("Enter your text here", "")

user_input = user_input.split(" ")

# Display the input below when the user hits enter
keywords = ai1.refine(user_input)
result = {}
improvement = ai2.refine(user_input, keywords, result)
st.write(f"You data: {user_input}, {keywords}, {result}, {improvement}")
