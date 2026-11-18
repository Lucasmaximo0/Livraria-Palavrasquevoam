# Palavras que Voam

Landing page da Palavras que Voam, livraria itinerante que realiza feiras de livros e atividades de leitura em escolas, feiras livres, pracas e shoppings.

## Visao geral

- Projeto front-end em React para divulgar os servicos da marca e captar pedidos de agendamento.
- Interface responsiva com secoes institucionais, calendario de disponibilidade, formulario em modal e autenticacao simulada.
- Dados mockados no proprio front-end (sem backend neste momento).

## Tecnologias utilizadas

- React 18
- Vite 5
- JavaScript (ES Modules)
- CSS Modules

## Como rodar o projeto

### Pre-requisitos

- Node.js 18+
- npm 9+

### Passo a passo

```bash
npm install
npm run dev
```

Aplicacao em desenvolvimento: `http://localhost:5173`.

### Scripts disponiveis

- `npm run dev`: inicia o servidor de desenvolvimento.
- `npm run build`: gera o bundle de producao na pasta `dist/`.
- `npm run preview`: sobe uma versao local da build de producao.

### Conta de demonstracao

- E-mail: `demo@palavrasquevoam.com`
- Senha: `123456`

## Arquitetura de pastas

O projeto segue o padrao Feature-Sliced Design (FSD), com public APIs por camada (`index.js`) para reduzir imports profundos e facilitar manutencao.

```text
src/
|- app/       -> bootstrap da aplicacao (main, App e estilos globais)
|- pages/     -> composicao das paginas
|- widgets/   -> blocos visuais de alto nivel da pagina
|- features/  -> funcionalidades orientadas a acao do usuario
|- entities/  -> dados e regras de dominio (mockados)
|- shared/    -> componentes reutilizaveis, utilitarios e assets
`- doc/       -> documentacao tecnica e relatorios
```

### Fluxo entre camadas

- `pages` orquestra `widgets`.
- `widgets` consome `features`, `entities` e `shared`.
- `features` pode consumir `entities` e `shared`.
- `entities` e `shared` concentram dados base e reutilizacao.

## Integrantes

- Lucas Santos Maximo
- Ketellyn Santos
