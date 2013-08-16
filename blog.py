import os
from flask import Flask, redirect, url_for, send_from_directory

from mod.nocache import nocache

app = Flask(__name__)
app.config['DEBUG'] = True
app.config['static_folder'] = 'static'
app.config['static_url_path'] = ''

@app.route('/')
@nocache
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/proxy')
def hello():
    return 'Hello World!'

if __name__ == '__main__':
    app.run()
