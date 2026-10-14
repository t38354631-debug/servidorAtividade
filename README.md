# API Produtos Eletronicos
Projeto exemplo para aula de desenvolvimento de sistemas backend utilizando dados em `mockup` JSON

- produtos.json
```json
[
  {
    "id": 1,
    "item": "Notebook Dell",
    "local": "Laboratório 01",
    "dataRegistro": "2026-09-01",
    "valor": 3500.00,
    "patrimonio": "PAT-00125"
  },
  {
    "id": 2,
    "item": "Projetor Epson",
    "local": "Sala 03",
    "dataRegistro": "2026-09-03",
    "valor": 2800.00,
    "patrimonio": "PAT-00126"
  },
  {
    "id": 3,
    "item": "Projetor ",
    "local": "Sala 03",
    "dataRegistro": "2026-09-03",
    "valor": 2800.00,
    "patrimonio": "PAT-00126"
  }
```

## [Tutorial de como iniciar novo Backend](./tutorial_novo.md)

## Tecnologias
- VsCode
- Node.js
- JavaScript
- JSON

## Passos para executar
- 1 Clone o repositório
- 2 Abra com VsCode e em um teminal CMD ou BASH didige:
```
npm install
npm run dev
```
- 3 Teste as rotas com a extensão **Thunder Client** do *VsCode*

### Para testar o Front-End
- Abra o arquivo client/index.html com a extensão **Live Server** do *VsCode*

## Rotas
```
Post time: http://localhost:3000/times
Get times: http://localhost:3000/times
Put time: http://localhost:3000/times/:id
Delete time: http://localhost:3000/times/:id
```

## Exemplos de requisições
- Create POST: http://localhost:3000/times
- Corpo
```json
{
  "nome": "Santos",
  "vitorias": 3,
  "empates": 5,
  "derrotas": 2
}
```
- Resposta
```json
{
  "nome": "Santos",
  "vitorias": 3,
  "empates": 5,
  "derrotas": 2,
  "id": 4
}
```
- Update PUT: http://localhost:3000/times/4
```json
{
  "nome": "Cruzeiro",
  "vitorias": 3,
  "empates": 3,
  "derrotas": 4
}
```
- Resposta
```json
{
  "nome": "Cruzeiro",
  "vitorias": 1,
  "empates": 1,
  "derrotas": 1,
  "id": 4
}
```

## Testes com extensão Thunder Client do VsCode






