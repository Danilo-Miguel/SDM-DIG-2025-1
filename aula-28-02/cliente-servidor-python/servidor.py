# Importa a classe Flask do módulo flask
from flask import Flask

# Cria uma instância do aplicativo Flask
app = Flask(__name__)

# Define a rota para a raiz ("/") do servidor
@app.route("/")
def home():
    # Retorna a mensagem 'Hello, Flask!' quando a rota principal é acessada
    return "Hello, Flask!"

# Verifica se o script está sendo executado diretamente (não importado)
if __name__ == "__main__":
    # Inicia o servidor Flask com a opção de debug ativada
    app.run(debug=True)
