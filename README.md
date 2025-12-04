# trabalhoWeb
Sistema de cadastro com Node.js, SQLite e frontend simples.

1. ir em codes e entrar em "trabalhoWeb_DaviBorges_e_ClaraAnzuategui

2. Iniciar backend local:

  cd trabalhoWeb/backend
  npm install    # se ainda não instalou
  node server.js
  Deve mostrar: Servidor rodando na porta 3000.
  deixar a porta 3000 em publico

3. Configurar frontend:

  Em trabalhoWeb/frontend/script.js definir:
  const API = "link da porta 3000";
  observação: n pode ter barra no final do link

4. entrar no site com live server

  No Codespaces, vá até a pasta:
  trabalhoWeb/frontend
  Clique no arquivo index.html.
  Clique com botão direito nele.
  Se aparecer a opção: “Open with Live Server”, clique.
  vai abrir a lista de diretorios, e so entrar na pasta "trabalhoWeb" e depois no arquivo "frontend"

5. entrar no site com o terminal

  No Codespaces, abra o terminal.
  Entre na pasta no terminal:
  cd trabalhoWeb/frontend
  Inicie o servidor:
  python3 -m http.server 5500
  Agora abra o painel PORTS do Codespace (barra inferior → Ports).
  Procure a porta 5500 → clique no link gerado. ou entre na telinha no canto inferior esquerdo que aparecer
