from flask import Flask

from service.connectDB import connect_to_db

clientDB = connect_to_db()
db = clientDB['apolo-db']

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<h1>Hello, World!</h1>"

@app.get("/users")
def get_users():
    usuarios = db.usuarios

    user = {
        "username": "ALINHA",
        "name": "Alan George",
        "idade": "19",
    }

    return f"{usuarios.insert_one(user).inserted_id}"

# @app.post("/login")
# def hello_world():
#     return "<h1>Hello, World!</h1>"