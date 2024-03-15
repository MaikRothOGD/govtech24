from flask import Flask
from flask_cors import CORS

from backend import Backend

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

backend = Backend()

@app.route('/<path_param>')
def get_object(path_param):
    return backend.get_for_input(path_param)


if __name__ == '__main__':
    app.run()
