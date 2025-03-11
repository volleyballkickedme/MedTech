from fastapi import FastAPI
from app.process_input import process_diseases
import app.model.mistral as mistral

app = FastAPI()

model = mistral.mistral()

@app.get("/", summary="Health Check")
def health_check():
    return {"message": "LLM API is up and running!"}

@app.post("/query", summary="Query LLM")
def query_llm(input: str):
    diseases = process_diseases(model, input)
    return {"response": diseases}