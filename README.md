# trabalhoWeb
Sistema de cadastro com Node.js, SQLite e frontend simples.

1. Iniciar backend local:

cd trabalhoWeb/backend
npm install    # se ainda não instalou
node server.js

Deve mostrar: Servidor rodando na porta 3000.
deixar a porta 3000 em publico

2. Configurar frontend:

Em trabalhoWeb/frontend/script.js definir:

const API = "link da porta 3000";
observação: n pode ter barra no final do link

3. entrar no site com live server

No Codespaces, vá até a pasta:
trabalhoWeb/frontend
Clique no arquivo index.html.
Clique com botão direito nele.
Se aparecer a opção: “Open with Live Server”, clique.

4. entrar no site com o terminal

No Codespaces, abra o terminal.
Entre na pasta do frontend:
cd trabalhoWeb/frontend

Inicie o servidor:
python3 -m http.server 5500


Agora abra o painel PORTS do Codespace (barra inferior → Ports).
Procure a porta 5500 → clique no link gerado.

💡 Vai abrir uma URL assim:
https://humble-bassoon-6974qg6qv7q7cw7j-5500.app.github.dev/trabalhoWeb/frontend/
