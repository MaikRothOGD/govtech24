import streamlit as st

from backend import Backend

backend = Backend()

# Create a text input field
user_input = st.text_input("Enter your text here", "")

if user_input is not None and len(user_input) > 0:
    keywords, result, improvement = backend.act(user_input)

    st.write(f"You data: {user_input}, {keywords}, {result['result']['count']}, {improvement}")
