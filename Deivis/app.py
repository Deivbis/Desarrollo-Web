from flask import Flask, render_template
 
app = Flask(__name__)

@app.route('/')
def principal():
    return render_template('index.html') 

@app.route('/registro')
def registro():
    return 'hola'

@app.route('/iniciarSesion')
def inicio_sesion():
    return "holaaa"

if __name__ == '__main__':
    app.run(debug=True)
