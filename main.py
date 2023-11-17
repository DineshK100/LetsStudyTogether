from flask import Flask, render_template
import time
import datetime

app = Flask(__name__)

@app.route("/")
def hello_world():
    total_seconds = 25 * 60  # 25 minutes
    return render_template("index.html", num=total_seconds)


@app.route("/index")
def index():
    number = 10
    return render_template("index.html", num = number)

if __name__ == '__main__':
    app.run(debug=True)
