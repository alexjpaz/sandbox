from eve import Eve

app = Eve()

from flask import Flask
static = Flask(__name__)

@static.route("/")
def hello():
    return "Hello World!"

from werkzeug.wsgi import DispatcherMiddleware

application  = DispatcherMiddleware(static, {
	    '/api':     app
	    })
