from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from googleapiclient.discovery import build
from credentials import *
from youtuber_id import *


app = FastAPI()

origins = [
	"http://localhost:3000",
]

app.add_middleware(
	CORSMiddleware,
	allow_origins=origins,
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"]
)

youtube = build(API_SERVICE_NAME, API_VERSION, developerKey=API_KEY)

channel_id = list(youtuber_id.values())

request = youtube.channels().list(part="snippet,contentDetails,statistics", id=",".join(channel_id))

response = request.execute()

@app.get('/')
def index():
  return "Welcome to Web Server."

@app.get('/api/v1/youtubers')
def get_youtubers():
  items = response["items"]
  return items 

@app.get('/api/v1/trends')
def get_youtube_trends():
  return "Youtube Thailand Trend." 
