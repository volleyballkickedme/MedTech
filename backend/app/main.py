from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.process_input import process_diseases
import app.model.mistral as mistral

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

model = mistral.mistral()

@app.get("/", summary="Health Check")
def health_check():
    return {"message": "LLM API is up and running!"}

@app.post("/query", summary="Query LLM")
def query_llm(input: str):
    diseases = process_diseases(model, input)
    return {"response": diseases}