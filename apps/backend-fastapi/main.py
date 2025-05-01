from fastapi import FastAPI
import os

app = FastAPI()
port = os.getenv("FASTAPI_PORT", 3002)

@app.get("/")
def read_root():
    return {"message": "This is backend-fastapi.", "port": port}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}