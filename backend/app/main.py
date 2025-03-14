from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.process_input import process_diseases
import app.model.mistral as mistral
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this to your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
model = mistral.mistral()

@app.get("/", summary="Health Check")
def health_check():
    return {"message": "LLM API is up and running!"}

@app.post("/processText", summary="Query LLM - text input")
def query_llm(input: str):
    diseases = process_diseases(model, input)
    return {"response": diseases}

@app.post("/processFile", summary="Query LLM - file input")
def query_llm_file(file: bytes):
    diseases = process_diseases(model, file.decode("utf-8"))
    return {"response": diseases}