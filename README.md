# Gestão de Resíduos Sólidos

 ## Resíduos Sólidos - Back-End
 Backend para o gerenciamento de usuários e ocorrências. O sistema permite cadastrar, listar, atualizar e excluir usuários e ocorrências.
 
 ---

## MER & DER conceitual e lógico
---
![MER e DER](./docs/der_residuos.png)

---
## UML - DC (Diagrama de Classe)
---
![UMLDC](./docs/UML-residuos.drawio.png)

---

## Tecnologias Utilizadas
---
 - Node.js
 - Java Script
 - Insomnia
 - XAMPP
 - MariaDB / MySQL
 - VS Code
 ---

 ## Instruções para testar
 ---
 1 - Use os códigos no repositório acima, inicie o servidor no terminal (CMD) com as dependências:

 - npm init -y
 - npm i express cors
 - npm install mysql
 - npm run dev

2 - Inicie uma nova página no Insomnia, usando o link do servidor, e teste os códigos.

---

## Insomnia
---
 - Listar Usuários

![listar_usu](./docs/Usuarios_listarGET.png)

 - Login Usuários

 ![login_usu](./docs/Usuario_loginPOST.png)

  - Cadastrar Usuários

![Cadastro_usu](./docs/Usuarios_CadastrarPOST.png)

![Cadastro_usu](./docs/Usuarios_CadastrarGET.png)

 - Alterar Usuários 

 ![Alterar_usu](./docs/Usuarios_alterarPUT.png)

 ![Alterar_usu](./docs/Usuarios_alterarGET.png)

  - Excluir Usuários 

![Excluir_usu](./docs/Usuarios_excluirDELETE.png)

![Excluir_usu](./docs/Usuarios_ExcluirGET.png)

 - Listar Ocorrências

 ![Listar_Oco](./docs/Oco_listarGET.png)

  - Cadastrar Ocorrencias 

![Cadastro_Oco](./docs/Oco_CadastrarPOST.png)

   - Alterar Ocorrencias

![Alterar_Oco](./docs/Oco_AlterarPUT.png)

![Alterar_Oco](./docs/Oco_AlterarGET.png)

 - Excluir Ocorrencias 

 ![Excluir_Oco](./docs/Oco_ExcluirDELETE.png)

 ![Excluir_Oco](./docs/Oco_ExcluirPUT.png)

 ---
