# Desafio QA

Um desafio que busca compreender minha capacidade analítica e intuitiva na análise de testes para uma plataforma web.


## 📋 Pré-requisitos

* IDE (Indico o VS Code), para baixar [clique aqui.](https://code.visualstudio.com)

* Node.js, para baixar [clique aqui.](https://nodejs.org/en/)

* Cypress, para instalar [clique aqui.](https://docs.cypress.io/guides/getting-started/installing-cypress)


## 🔧 Instalação

No diretório do projeto, execute o seguinte comando para instalar as dependencias:
```
npm install
```


## ⚙️ Executando os testes

### Com interface gráfica

A aplicação gráfica do Cypress pode ser iniciada executando o comando abaixo no terminal:
```
npx cypress open
```
Atalho:
```
cy:open
```

### Sem interface gráfica

Para executar os testes sem interface gráfica, execute o seguinte comando:
```
npx cypress run --config video=true --env allure=true
```
Atalho:
```
allure:run
```

## 📦 Evidencias

### Teste automatizado:

As evidencias estão na pasta docs/seuBarriga/videos.


### Teste manual:

As capturas de tela estão no arquivo docs/bolt/TESTE EXPLORATÓRIO - BOLT.

Possui um vídeo (Report - Bolt.mp4) como evidência na pasta docs/bolt


## 🛠️ Tecnologias utilizadas

* [GIT](https://git-scm.com/) - Sistema de controle de versões.
* [Node.js](https://nodejs.org/en/) - Software que permite a execução de códigos JavaScript fora de um navegador web.
* [NPM](https://www.npmjs.com/) - Gerenciador de pacotes para o Node.JS
* [Cypress](https://www.cypress.io/) - Framework de automação de testes de ponta a ponta, focado em front-end para aplicativos da web
* [@faker-js/faker](https://www.npmjs.com/package/@faker-js/faker) - Biblioteca que possibilita a geração de uma grande quantidade de dados falsos nos browsers ou no back-end.
* [Allure](https://www.npmjs.com/package/allure-commandline)  -  Ferramenta que cria relatórios de execução de testes web.


## ✒️ Autores

[Matheus Santiago Nogueira](https://github.com/matheusnogueiraQA)
