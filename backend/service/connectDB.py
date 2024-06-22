from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from urllib.parse import quote_plus

def connect_to_db():

    username = quote_plus('elioterioalan')
    password = quote_plus('xqedordBRbOEmeo7')

    uri = f"mongodb+srv://{username}:{password}@apolo.krke30z.mongodb.net/?retryWrites=true&w=majority&appName=APOLO"

    client = MongoClient(uri, server_api=ServerApi('1'))

    return client