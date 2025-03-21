# Categorização de Produtos com Firebase e Node.js

Este projeto busca dados de produtos armazenados no Firebase Realtime Database, os categoriza e disponibiliza esses dados através de uma API usando Node.js e Express. O sistema realiza a categorização dos produtos com base no título e retorna os dados estruturados de maneira categorizada em formato JSON.

## Funcionalidade

A aplicação realiza os seguintes passos:

1. **Busca de Dados**: Os dados dos produtos são recuperados de um banco de dados Firebase Realtime Database via API REST do Firebase.
2. **Categorização**: Após recuperar os dados, eles são categorizados com base no título de cada produto.
3. **API**: A aplicação disponibiliza uma API REST que retorna os dados categorizados. A rota principal (`/`) é responsável por fornecer os dados.

## Estrutura do Projeto

- **`src/`**: Diretório principal do código-fonte.
  - **`server/`**:
    - **`route.js`**: Define as rotas do servidor, incluindo a principal que retorna os dados categorizados.
    - **`server.js`**: Configura o servidor Express, incluindo o middleware para CORS, parsing de JSON e as rotas.
  - **`services/`**:
    - **`fetchData.js`**: Função responsável por fazer a requisição para o Firebase e retornar os dados.
  - **`utils/`**:
    - **`categorizer.js`**: Contém funções para normalizar os títulos dos produtos e gerar as chaves para categorização.
- **`package.json`**: Gerencia dependências e scripts do projeto.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript.
- **Express**: Framework web para Node.js.
- **node-fetch**: Biblioteca para realizar requisições HTTP.
- **Firebase Realtime Database**: Banco de dados utilizado para armazenar os dados dos produtos.

## Como Rodar o Projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git

2. Navegue até o diretório do projeto:
 
   ```bash
   cd seu-repositorio

3. Instale as dependências:

   ```bash
   npm install

4. Após a instalação, inicie o servidor:

   ```bash
   npm start

 Ou, para reiniciar automaticamente o servidor durante o desenvolvimento:

    ```bash
   npm run dev

   O servidor estará rodando na porta 3000 por padrão. Você pode acessar os dados categorizados em http://localhost:3000.


Estrutura de Dados
A API retorna os dados dos produtos no seguinte formato JSON:

[
  {
    "category": "Categoria do Produto",
    "count": 3,
    "products": [
      {
        "title": "Produto 1",
        "supermarket": "Supermercado A"
      },
      {
        "title": "Produto 2",
        "supermarket": "Supermercado B"
      },
      {
        "title": "Produto 3",
        "supermarket": "Supermercado C"
      }
    ]
  },
  {
    "category": "Outra Categoria",
    "count": 2,
    "products": [
      {
        "title": "Produto 4",
        "supermarket": "Supermercado D"
      },
      {
        "title": "Produto 5",
        "supermarket": "Supermercado E"
      }
    ]
  }
]
"# Code-Challenge-Categorizacao" 
