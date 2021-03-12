from flask import Flask

import urllib.request
import xml.etree.ElementTree as ET
app = Flask(__name__)


# @app.route('/')
# def index_page():
#     return 'Welcome to my first Flask app!'

# @app.route('/hello')
# def hello_world():
#     return 'Oh, hello again!'

@app.route('/')
def index_page():
    return render_template('index.html')

@app.route('/hello')
def hello_world():
    return render_template('hello.html')

@app.route('/input')
def input():
    return render_template('inpute.html')

@app.route('/music')
def music():
    return render_template('music.html')

@app.route('/wiki')
def wiki():
    return render_template('wiki.html')

@app.route('/map')
def map():
    return render_template('map.html')

@app.route('/table')
def table():
    ochre_xml = ET.ElementTree(
        file-urllib.request.urlopen(
            'http://ochre.lib.uchicago.edu/ochre?uuid=accd571b-bae3-4d42-93d9-58b65ec79300'
        )
    )
