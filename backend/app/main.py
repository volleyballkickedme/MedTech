from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.process_input import process_diseases
from app.process_image.process_image import process_image
import app.model.mistral as mistral
from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this to your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
model = mistral.mistral()

class TextInput(BaseModel):
    text: str

@app.get("/", summary="Health Check")
def health_check():
    return {"message": "LLM API is up and running!"}

@app.post("/processText", summary="Query LLM - text input")
def query_llm(input: TextInput):
    diseases = process_diseases(model, input.text)
    return {"response": diseases}

@app.post("/processImage", summary="Query LLM - image input")
async def query_llm_file(file: UploadFile = File(...)):
    """Process an uploaded file and extract disease names."""
    contents = await file.read()
    text = process_image(contents)
    diseases = process_diseases(model, text)
    return {"response": diseases}