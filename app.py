from flask import Flask, render_template,request
import json

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/upcase")
def upcase():
    data = request.args.get("data")
    print data
    result = {'original' : data,
            'result':data.upper()}
    return json.dumps(result)
    
if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)