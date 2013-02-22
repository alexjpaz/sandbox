import os

from flask import Flask, url_for,render_template, send_from_directory
app = Flask(__name__)

@app.route('/')
def root():
    return render_template('index.html')

@app.route('/assets/<path:filename>')
def assets(filename):
    return	send_from_directory('static/assets', filename)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.debug = os.environ.get('DEBUG', False)
    app.run(host='0.0.0.0', port=port)
