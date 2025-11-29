from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import httpx

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, replace "*" with your Netlify/GitHub Pages URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

POKEAPI_URL = "https://pokeapi.co/api/v2/"

@app.get("/")
def read_root():
    return {"message": "BE is running"}

@app.get("/api/pokemon/{id}")
async def get_pokemon(id: str):
    async with httpx.AsyncClient() as client:
        try:
            response = await client.get(f"{POKEAPI_URL}pokemon/{id}")
            response.raise_for_status()
            return response.json()
        except httpx.HTTPStatusError as e:
            raise HTTPException(status_code=e.response.status_code, detail="Pokemon not found")
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))
