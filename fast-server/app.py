from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from googleapiclient.discovery import build

from IPython.display import JSON 


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

API_KEY = "AIzaSyAJR--0y2_4EAB7aNTnKW7LTkqfUA0_lY8"
API_SERVICE_NAME = "youtube"
API_VERSION = "v3"

youtube = build(API_SERVICE_NAME, API_VERSION, developerKey=API_KEY)

youtuber_id = {
  "9arm": "UCoiEtD4v1qMAqHV5MDI5Qpg",
  "HRK": "UC4plRabXFGdAE6HP-tBQKdQ",
  "aimmuno": "UC53thxes5KEtBIPLbiHCdZw",
  "pasulol": "UCnMIRw-uLz_si97_Q5RSXug",
  "gssspotted": "UC8uxFKMADMhYn80nkfpPa-w",
  "redremastered": "UCFgCiiEAE0DoGxqVsuF3lRg", 
  "my_mate_nate": "UC7rtE7hSTaC8xDf5v_7O1qQ" 
} 

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
