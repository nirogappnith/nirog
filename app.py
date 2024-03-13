from flask import Flask, render_template, request, jsonify
from flask_cors import CORS 
import random
import os
import google.generativeai as genai
import speech_recognition as sr
import pyttsx3
import smtplib
import json
from vertexai.generative_models import ChatSession



#api has been provided here only




model = genai.GenerativeModel('gemini-pro')

os.environ['GOOGLE_API_KEY'] = "AIzaSyBXj7g61Uv2RAC4_V6O0zuM-x-7wS5kbhY"
genai.configure(api_key = os.environ['GOOGLE_API_KEY'])

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return render_template('chat.html')

@app.route("/chatget", methods=["POST"])
def chat():
    chat = model.start_chat() 
    data = request.json
    msg = data["msg"]
    response = get_chat_response(chat, msg)  
    return jsonify(response=response)

def get_chat_response(chat: ChatSession, prompt: str) -> str:
    text_response = []
    responses = chat.send_message(prompt, stream=True)
    for chunk in responses:
        try:
            text_response.append(chunk.text)
        except AttributeError:
            text_response.append(chunk._result.text)  
    return "".join(text_response)

#this is the flask route to generate the severity of the issue faced by the patient . Use your 


# @app.route("/chatsevere", methods=["POST"])
# def chat1():
#     chat = model.start_chat() 
#     data = request.json
#     msg = data["msg"]
#     response = get_chat_response1(chat, msg)  
#     return jsonify(response=response)

# def get_chat_response1(chat: ChatSession, prompt: str) -> str:
#     text_response = []
#     responses = chat.send_message(prompt, stream=True)
#     for chunk in responses:
#         try:
#             text_response.append(chunk.text)
#         except AttributeError:
#             text_response.append(chunk._result.text) 
#     return "".join(text_response)

@app.route("/callget", methods=["GET"])
def callchat():
    chat = model.start_chat()
    def get_chat_response(chat: ChatSession, prompt: str) -> str:
        text_response = []
        responses = chat.send_message(prompt, stream=True)
        for chunk in responses:
            text_response.append(chunk.text)
        return "".join(text_response)
    r = sr.Recognizer()

    my_dictionary = {}

    engine = pyttsx3.init('sapi5')
    voices = engine.getProperty('voices')
    engine.setProperty('voice', voices[0].id)
    engine.setProperty('rate', 150)


    def speak(text):
        """Speaks the provided text using the configured voice and rate."""
        engine.say(text)
        engine.runAndWait()


    def take_command():
        """Takes microphone input from the user and returns the recognized text."""
        try:
            with sr.Microphone() as source:
                print("Listening...")
                r.pause_threshold = 1
                audio = r.listen(source)

                print("Recognizing...")
                query = r.recognize_google(audio, language='en-in')
                print(f"User said: {query}\n")
                return query.lower()  # Ensure case-insensitivity

        except Exception as e:
            print(f"Error: {e}")
            print("Say that again please...")
            return None


    def register_appointment():
        """Guides the user through the appointment registration process."""
        speak("Could you please tell us your name?")
        name = take_command()
        if not name:
            return

        speak("What is your age?")
        age = take_command()
        if not age:
            return

        speak("Are you male or female?")
        gender = take_command()
        if not gender:
            return

        speak("Could you please describe your problem?")
        symptoms = take_command()
        if not symptoms:
            return

        speak("You would be notified about your appointment through SMS and email. Thank you for contacting us.")

        # Assuming symptoms is a valid description of the issue
        prompt = symptoms
        prompt1 = " on the basis of this how much would the severity be? 5 for very severe and 1 for very less severe"
        prompt2 = prompt + prompt1
        newword = get_chat_response(chat, prompt2)


        my_dictionary["name"] = name
        my_dictionary["age"] = age
        my_dictionary["gender"] = gender
        my_dictionary["symptoms"] = symptoms
        my_dictionary["severity"] = newword

        return jsonify({"severity": newword})
        
        # print(my_dictionary)


    if __name__ == "__main__":
        speak("welcome to the appointment portal")
        register_appointment()

if __name__ == '__main__':
    app.run()