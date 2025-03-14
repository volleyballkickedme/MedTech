from langchain_community.vectorstores import Chroma
from langchain_community.chat_models import ChatOllama
from langchain.prompts import StringPromptTemplate
from langchain_ollama import ChatOllama
from langchain_core.output_parsers import StrOutputParser
from langchain.schema.runnable import RunnablePassthrough
from langchain_community.embeddings import FastEmbedEmbeddings
from langchain.schema import Document
import app.process_orpha_labels.process_orpha_labels as orpha_labels
import app.model.prompt.prompt as prompt

class mistral:
    def __init__(self):
        pe_prompt = prompt.prompt.get_prompt()
        self.model = ChatOllama(model="mistral")
        self.prompt: StringPromptTemplate = pe_prompt
        self.chain = pe_prompt | self.model | StrOutputParser()

    def ask(self, text_data: str):
        return self.chain.invoke({
            "report": text_data,
        })
    
    def addContext(self, labels: dict):
        chunks = []

        for key, value in labels.items():
            label_context = f"{value.get('label', 'No label')} ({key})"
            chunks.append(Document(page_content=label_context, metadata={}))

        # Recreate the vector store with the updated chunks
        vector_store = Chroma.from_documents(documents=chunks, embedding=FastEmbedEmbeddings())
        self.retriever = vector_store.as_retriever(
            search_type="similarity_score_threshold",
            search_kwargs={
                "k": 5,
                "score_threshold": 0.3,
            },
        )

        self.chain = ({"report": RunnablePassthrough()}
                      | self.prompt
                      | self.model
                      | StrOutputParser())

    def addOrphaContext(self):
        labels = orpha_labels.orpha_labels.load_orpha_ids()
        self.addContext(labels)

    def clear(self):
        self.vector_store = None
        self.retriever = None
        self.chain = self.prompt | self.model | StrOutputParser()
