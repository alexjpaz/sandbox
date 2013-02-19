from flask import Flask, request
app = Flask(__name__, static_url_path='')

@app.route('/')
def root():
return tandem.send_static_file('index.html')
