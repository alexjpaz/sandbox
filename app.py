import os
import json

from collections import OrderedDict

from flask import Flask, url_for,render_template, send_from_directory, request, jsonify, Response
from flask.ext.sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL']

db = SQLAlchemy(app)

def response_json(fn):
	def tojson():
		return Response(json.dumps(fn()),  mimetype='application/json')
	return tojson

@app.route('/')
def root():
    return send_from_directory('static', 'index.html')

@app.route('/hangout')
def hangout():
    code = file('static/index.html').read();
    templ = render_template('hangout.xml', code=code)
    return templ

@app.route('/assets/<path:filename>')
def assets(filename):
    return	send_from_directory('static/assets', filename)

@app.route('/game', methods=['POST','GET'])
def game():
	if request.method == 'POST':
		g = Game(request.data)
		db.session.add(g)
		db.session.commit()
		return request.json
	else:
		return Game.query.all()
		
@app.route('/game/<int:gameId>', methods=['POST','GET'])
def game(gameId):
	return jsonify(Game.query.get(gameId)._asdict())
		
class DictSerializable(object):
    def _asdict(self):
        result = OrderedDict()
        for key in self.__mapper__.c.keys():
            result[key] = getattr(self, key)
        return result
		
		
class Game(db.Model, DictSerializable):
    id = db.Column(db.Integer, primary_key=True)
    game = db.Column(db.Text())

    def __init__(self, game):
        self.game = game

    def __repr__(self):
        return self._asdict()

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.debug = os.environ.get('DEBUG', False)
    app.run(host='0.0.0.0', port=port)
