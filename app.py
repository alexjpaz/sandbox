from flask import Flask, url_for,render_template, send_from_directory
app = Flask(__name__)

@app.route('/')
def root():
	return send_from_directory('static', 'index.html')

@app.route('/hangout')
def hangout():
    templ = render_template('hangout.xml')
    return templ

@app.route('/assets/<path:filename>')
def assets(filename):
    return	send_from_directory('static/assets', filename)

@app.route('/hello')
def hello():
   return "Okay, you aren't crazy"

if __name__ == '__main__':
    app.debug = True
    app.run()
