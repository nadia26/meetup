from flask import Flask,request,url_for,redirect,render_template

app=Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")


if __name__=="__main__":
   app.debug=True
   app.run()
