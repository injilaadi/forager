from flask import Flask, request, jsonify, make_response
from flask_cors import CORS

from google_api import generate
app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"])

@app.route("/")
def root():
    return "Hello World!"


#add own api and create fetch request from React
# React will fetch the data from the image
# Flask will recieve the data 
# Flask will call on a function to use api on the data 
# Flask will then return the data to react and react will then update the img links
@app.route('/api/data', methods=['POST'])
def receive_data():
    data = request.files['outfit']
    print(data)  # Process the received data
    response = make_response(jsonify(generate()))
    response.headers['Access-Control-Allow-Origin'] = "*"
    return response

@app.route("/api/data", methods=['GET'])
def test():
    return "Hello World!"

if __name__== "__main__":
    app.run(debug=True)
    