from flask import Flask

from backend import Backend

app = Flask(__name__)

backend = Backend()

@app.route('/<path_param>')
def get_object(path_param):
    return backend.get_for_input(path_param)


if __name__ == '__main__':
    app.run()
