from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
app.config["JSON_AS_ASCII"]=False
CORS(app)

@app.route('/')
def index():
    return

@app.route('#Par')
def index():
    return
    
app.run(host='0.0.0.0',port=81)