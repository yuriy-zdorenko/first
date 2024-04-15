from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calculate')
def calculate_square():
    number = int(request.args.get('number'))
    square = number * number
    return jsonify({'square': square})

if __name__ == '__main__':
    app.run(debug=True)