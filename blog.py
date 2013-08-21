import os
from flask import Flask, redirect, request, url_for, send_from_directory

import json

from mod.nocache import nocache

import mod.github as github

import base64

app = Flask(__name__)
app.config['DEBUG'] = True
app.config['static_folder'] = 'static'
app.config['static_url_path'] = ''

@app.route('/')
@nocache
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/page/<path:pageResource>', methods=['GET'])
def getPost(pageResource):
	req = github.getFile('/'+pageResource)

	obj = {}
	obj['github'] = req
	obj['html'] = base64.decodestring(req['content'])
	return json.dumps(obj)

@app.route('/page/<path:pageResource>', methods=['POST'])
def updatePost(pageResource):
	data = json.loads(request.data)
	req = github.updateFile('/'+pageResource,data['content'], 'generated')
	return json.dumps(req)

    

@app.route('/proxy')
def hello():
    return 'Hello World!'

if __name__ == '__main__':
    app.run()
