from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/') 
def index():
    catalogElements = ['Одежда', 'Обувь', 'Куртки']
    data = {'mainCatalog': catalogElements}
    return render_template('index.html', **data)

@app.route('/clothes') 
def clothes():
    clothesElements = ["Одежда"+str(i+1) for i in range(9)]
    data = {'fullCatalog': clothesElements}
    return render_template('clothes.html', **data)

@app.route('/shoes') 
def shoes():
    shoesElements = ["Обувь"+str(i+1) for i in range(7)]
    data = {'fullCatalog': shoesElements}
    return render_template('shoes.html', **data)

@app.route('/raincoats') 
def raincoats():
    raincoatElements = ["Куртка"+str(i+1) for i in range(4)]
    data = {'fullCatalog': raincoatElements}
    return render_template('raincoats.html', **data)

if __name__ == '__main__': 
    app.run(debug=True)