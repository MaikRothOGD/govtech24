import streamlit as st
import pandas as pd
import numpy as np

from sentence_transformers import SentenceTransformer
from sentence_transformers.util import semantic_search

TOP_K = 200

DATA_PATH = "metadata_240314_cleaned.parq"
EMBEDDING_PATH = "embeddings_240314_multi.npy"
# EMBEDDING_PATH = "embeddings_240314.npy"

st.set_page_config(page_title="Opendata.swiss Semantic Search", layout="centered", initial_sidebar_state="auto")

# ---------------------------------------------------------------


@st.cache_resource
def load_documents():
    """Load and cache documents and embeddings."""
    df = pd.read_parquet(DATA_PATH)
    embeddings = np.load(EMBEDDING_PATH)
    return df, embeddings


@st.cache_resource
def load_models():
    """Load and cache sentence transformer and crossencoder model."""
    model_path = "sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2"
    model = SentenceTransformer(model_path)
    return model 


# ---------------------------------------------------------------


def do_semantic_search(search_terms, embeddings, top_k=TOP_K):
    """Embed query and perform semantic search. Return document ids."""
    search_term_embeddings = st_model.encode(search_terms, normalize_embeddings=True)
    hits = semantic_search(search_term_embeddings, embeddings, top_k=top_k)[0]
    return [x["corpus_id"] for x in hits]


def list_results(res, result_counts):
    """Display list of results in main window."""
    st.markdown(
        f"<sub>**{res.shape[0]:,.0f} Datensätze gefunden**</sub>",
        unsafe_allow_html=True,
    )
    if len(res) > 0:
        for idx in range(0, len(res)):
            row = res.iloc[idx]
            st.markdown(f"[{row['title.de']}]({row.link})", unsafe_allow_html=True)
            if show_descriptions:
                st.caption(f"{row['description.de']}")


def search_by_terms():
    """Search by terms and display results."""

    if search_terms == "":
        return None

    result_ids = do_semantic_search(search_terms, embeddings, top_k=TOP_K)
    result_counts = (0, len(result_ids))


    if len(result_ids) != 0:
        df_results = df.iloc[result_ids]

        list_results(df_results, result_counts)


# ---------------------------------------------------------------

st_model = load_models()
df, embeddings = load_documents()

with st.sidebar:
    st.markdown(f"***{len(df)}** datasets found*")
    st.markdown("---")
    show_descriptions = st.checkbox("Show descriptions", value=False)
    TOP_K = st.slider(
        "Limit results", min_value=0, max_value=200, value=50
    )

st.header("🔍 Semantic Search | opendata.swiss")

search_terms = st.text_input("", value="Bevölkerung", max_chars=2000)
search_by_terms()
