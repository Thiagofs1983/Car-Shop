# Projeto Car Shop

# Contexto
 API com CRUD para gerenciar uma concessionária de veículos usando MongoDB e a ODM Mongoose. A API foi construída usando os princípios da Programação Orientada a Objetos (POO). Todas as camadas estão 100% testada com testes unitários.

## Técnologias usadas

Back-end:
> Desenvolvido usando: Node, MongoDB, Express, Typescrypt, Mongoose, Zod


## Instalando Dependências

> Backend
```bash
git clone git@github.com:Thiagofs1983/Car-Shop.git
cd Car-Shop 
npm install
``` 

## Executando aplicação

Para rodar a aplicação você vai precisar ter o [Docker](https://docs.docker.com/engine/install/ubuntu/) instalado usando os comandos no terminal:
```bash
docker-compose up -d
docker exec -it car_shop bash
npm install
```

### Para rodar o back-end:

```
npm run dev
```

### Realizando Requisições:

Para realizar as requisições, você pode usar a extensão [Thunder Client](https://www.thunderclient.com/) do VSCode ou pode usar os clientes HTTP [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/).

#### ENDPOINTS

<details>
  <summary><strong> Cars </strong></summary></br>
  
  - Para realizar fazer o CRUD na coleção Cars, utilize os métodos e URLs abaixo:

| Método | Funcionalidade | URL |
|---|---|---|
| `POST` | Cadastra um novo carro | http://localhost:3001/cars |
| `PUT` | Atualiza o carro indentificado pelo id informado na URL | http://localhost:3001/cars/4edd40c86762e0fb12000003 |

  Utilize também um json na aba `Body` da requisição no seguinte formato:
  ```
  {
  "model": "Ferrari Maranello",
  "year": 1963,
  "color": "red",
  "buyValue": 3500000,
  "seatsQty": 1,
  "doorsQty": 2
}
```
*OBS.: Para fazer a atualização o `ID` informado na URL deve ser válido. Abaixo a orientação de como buscar os carros cadastrados no banco de dados. Caso não haja nenhum, você pode cadastrar um novo carro usando o método `POST` acima usando o JSON no `body` da requisição*

| Método | Funcionalidade | URL |
|---|---|---|
| `GET` | Retorna todos os carros cadastrados no BD | http://localhost:3001/cars |
| `GET` | Retorna o carro indentificado pelo id informado na URL | http://localhost:3001/cars/4edd40c86762e0fb12000003 |
| `DELETE` | Apaga o carro indentificado pelo id informado na URL | http://localhost:3001/cars/4edd40c86762e0fb12000003 |

</details>

<details>
  <summary><strong> Motorcycles </strong></summary></br>
  
  - Para realizar fazer o CRUD na coleção Cars, utilize os métodos e URLs abaixo:

| Método | Funcionalidade | URL |
|---|---|---|
| `POST` | Cadastra uma nova moto | http://localhost:3001/motorcycles |
| `PUT` | Atualiza a moto indentificada pelo id informado na URL | http://localhost:3001/motorcycles/4edd40c86762e0fb12000003 |

  Utilize também um json na aba `Body` da requisição no seguinte formato:
  ```
  {
  "model": "Honda CG Titan 125",
  "year": 1963,
  "color": "red",
  "buyValue": 3500,
  "category": "Street",
  "engineCapacity": 125
}
```
*OBS.: Para fazer a atualização o `ID` informado na URL deve ser válido. Abaixo a orientação de como buscar as motos cadastradas no banco de dados. Caso não haja nenhuma, você pode cadastrar uma nova moto usando o método `POST` acima usando o JSON no `body` da requisição*

| Método | Funcionalidade | URL |
|---|---|---|
| `GET` | Retorna todas as motos cadastradas no BD | http://localhost:3001/motorcycles |
| `GET` | Retorna a moto indentificada pelo id informado na URL | http://localhost:3001/motorcycles/4edd40c86762e0fb12000003 |
| `DELETE` | Apaga a moto indentificado pelo id informado na URL | http://localhost:3001/motorcycles/4edd40c86762e0fb12000003 |

</details>

## Executando Testes

* Para rodar todos os testes:

Para executar os testes de cobertura do back-end, entre na pasta `backend` rode o seguinte comando no terminal a partir da raiz do projeto:

```
  npm run test:coverage
```

Todas as camadas foram 100% testadas com testes unitários.

[<img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedin" height='30'>](https://www.linkedin.com/in/fsthiago/)
