from fastapi import FastAPI

app = FastAPI()

@app.get("/api/python")
def hello_world():
    return {"message": "Hello World"}

@app.post("/api/recipes")
def fetch_recipe():
    return {"message": "Recipe fetched"}