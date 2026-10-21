# Palavras que Voam

Landing page da **Palavras que Voam**, uma livraria itinerante que leva feiras de livros, contação de histórias e brincadeiras com a leitura para escolas, feiras livres, praças e shoppings.

## Integrantes

- Lucas Santos Maximo
- Ketellyn Santos — Auxílio no desenvolvimento da ideia, colaboração no planejamento e apoio nas atividades necessárias para a construção do projeto.

## Sobre o produto

A Palavras que Voam é uma livraria que vai até onde o público está. Ela monta feiras de livros:

- **Nas escolas**, para alunos, professores e famílias;
- **Nas feiras livres e praças**, para todo tipo de público;
- **Nos shoppings**, para famílias e visitantes.

A escola **não paga nada** pela visita. Ela só cede o espaço, e quem quiser pode comprar os livros na hora. O objetivo é levar educação, cultura e a brincadeira com o livro para crianças e famílias.

A landing page tem duas funções: **divulgar** onde a livraria está, com um carrossel dos locais e a agenda das próximas feiras, e permitir que uma **escola agende uma visita**, escolhendo um dia disponível no calendário e informando seus dados de contato.

### Funcionalidades

- Carrossel com os locais de atuação (escolas, feiras livres e shoppings), com reprodução automática e pausa ao passar o mouse;
- Calendário com os dias disponíveis para visita e formulário de agendamento;
- Seção "Quanto custa": gratuito para a escola, com livros a partir de R$ 15 para o leitor;
- Agenda das próximas feiras abertas ao público;
- Login e cadastro simulados, com preenchimento automático do formulário para usuários logados;
- Depoimentos fictícios, FAQ em accordion e layout responsivo.

> Todos os dados (datas, contatos, depoimentos e contas) são fictícios e ficam mockados no front-end. Não há backend.

## Arquitetura

O projeto usa **FSD (Feature-Sliced Design)**. Uma camada só importa das camadas abaixo dela.

```text
src/
├── app/        → ponto de entrada (main.jsx, App.jsx) e CSS global
├── pages/      → home: monta a página e guarda o estado
├── widgets/    → seções da página: header, hero, locations, benefits,
│                 how-it-works, booking, offer, where-to-find,
│                 testimonials, faq e footer
├── features/   → ações do usuário: location-carousel, schedule-visit,
│                 auth e faq-accordion
├── entities/   → dados mockados: locais, datas, agenda, oferta,
│                 usuários e FAQ
└── shared/     → componentes reutilizáveis, utilitários e assets
```

Escolhemos o FSD porque a landing page se divide naturalmente em seções independentes (widgets), enquanto as partes com lógica, como o carrossel, o agendamento e o login, ficam isoladas em features. A logo fica em `shared` porque é usada por vários widgets.

A estilização usa **CSS Modules** (um `.module.css` por componente) e um `globals.css` com as variáveis globais.

## Como executar

```bash
npm install
npm run dev
```

Para testar o login, use a conta de demonstração: **demo@palavrasquevoam.com**, senha **123456**.

---

## Jornada de construção

### Ideia inicial

A ideia inicial surgiu a partir de sugestões de produtos fictícios geradas com auxílio de IA, incluindo um clube de assinatura de livros. Posteriormente, a proposta foi direcionada para algo com mais propósito: divulgar a **Palavras que Voam**, uma livraria itinerante que já possui identidade visual própria, com logo e Instagram (@palavrasquevoam__).

Em vez de vender um produto de prateleira, a página passou a divulgar a livraria e permitir que escolas agendem visitas.

### Pesquisa e referências

- A **logo real da marca** foi a principal referência visual. A paleta de cores (laranja, roxo e creme) e o estilo arredondado e infantil foram inspirados nela.
- As fontes **Fredoka** (títulos) e **Nunito** (textos) foram escolhidas no Google Fonts por combinarem com a identidade visual da marca.
- Foram consideradas referências de landing pages de serviços e a necessidade de apresentar as informações de maneira clara e acessível.

### Ferramentas utilizadas

- React + Vite
- CSS Modules
- VS Code
- OpenCode, conectado ao **Microsoft Foundry (Azure for Students)**
- Claude (chat), para planejamento, simulação da página e revisão
- GPT-5.3 Codex, utilizado pelo OpenCode + Azure Foundry
- Git e GitHub

### Uso de IA

**Claude (chat)**

- Auxiliou na compreensão das opções de arquitetura (MVVM e FSD) e na escolha do FSD.
- Ajudou na elaboração do prompt inicial para o OpenCode, considerando as regras da atividade, as seções obrigatórias e a identidade visual da marca.
- Auxiliou na configuração do OpenCode com o Azure.
- Apoiou a revisão da ideia e o planejamento das mudanças visuais e funcionais, como o carrossel, o agendamento por calendário e o login.

**GPT-5.3 Codex (pelo OpenCode + Azure Foundry)**

- Gerou a primeira versão completa do projeto com a arquitetura FSD, a partir do prompt.
- Recebeu novas instruções para aplicar as alterações e melhorias planejadas.

### Por que trocamos de modelo no OpenCode

A intenção inicial era utilizar o Claude Sonnet 5.5 no OpenCode, mas surgiram três problemas:

1. **"Cannot connect to API"**: o endereço completo havia sido informado em vez de apenas o nome do recurso (`lucassantosmaximo`).
2. **"DeploymentNotFound: claude-sonnet-5-5"**: o modelo aparecia na lista do OpenCode, mas não estava implantado no Foundry.
3. O único modelo implantado na conta era o **gpt-5.3-codex**, que passou a ser utilizado.

Com isso, foi possível compreender que a lista de modelos do OpenCode apresenta o catálogo disponível, mas a utilização depende de um deployment configurado no Azure.

### Sugestões da IA que mantivemos

- A arquitetura FSD, com cada seção organizada como um widget;
- O CTA de agendamento abrindo um formulário em modal;
- O FAQ em accordion e a agenda das próximas feiras.

### Sugestões que alteramos

- A primeira versão apresentava **três pacotes pagos**, com valores de R$ 890 a R$ 3.490. A proposta foi alterada porque a Palavras que Voam não cobra das escolas: os visitantes compram os livros. Assim, foi criada a seção "Quanto custa", com visita gratuita para a escola e livros a partir de R$ 15.
- Os locais, inicialmente apresentados em cards fixos, passaram a ser exibidos em um **carrossel de imagens**.
- O agendamento, inicialmente realizado por um campo de data comum, passou a utilizar um **calendário que mostra apenas os dias disponíveis**.

### Sugestões que descartamos

- A ideia inicial do clube de assinatura de livros;
- A venda de pacotes pagos para escolas, por não corresponder ao modelo de funcionamento da livraria.

### Problemas gerados pela IA e corrigidos

- O OpenCode utilizava a logo com o caminho `/src/shared/assets/logo.png`, que funcionava no `npm run dev`, mas apresentava problemas no build. O caminho foi substituído por um `import`.
- O arquivo `logo.webp` gerado pelo OpenCode estava vazio (16 × 16 pixels, 47 bytes) e foi substituído pela logo real.
- Os textos gerados sem acentuação foram corrigidos.

### Evolução da solução

1. **Primeira ideia:** clube de assinatura de livros.
2. **Mudança de produto:** livraria itinerante para divulgar a marca e agendar visitas em escolas.
3. **Primeira versão:** fundo claro, pacotes com preços e locais apresentados em cards.
4. **Reorganização:** remoção dos pacotes, inclusão do carrossel, calendário de dias disponíveis e seção "A escola não paga nada".
5. **Mudança visual:** adoção de um visual mais profissional e tecnológico, com fundo escuro, grade fina, cards com efeito de vidro e títulos com degradê, mantendo as cores laranja e roxo da logo.
6. **Ajuste de cores:** clareamento do fundo para um roxo-azulado médio.
7. **Login e cadastro:** inclusão de uma área de autenticação simulada, pensando em um possível cadastro real de clientes no futuro.
8. **Ajuste de layout:** remoção do item "Agendar" do menu superior para evitar que os elementos quebrassem linha, já que a página possui um botão específico para essa ação.

### Resultado final

O resultado é uma landing page que busca representar a identidade da Palavras que Voam, apresentando seus serviços, os locais de atuação e as próximas feiras. A solução também facilita o contato com escolas por meio de um calendário de disponibilidade e um formulário de agendamento.

A construção do projeto permitiu explorar conceitos de arquitetura front-end, organização de componentes, estilização com CSS Modules e utilização de ferramentas de inteligência artificial como apoio ao desenvolvimento.

**Participação de Ketellyn Santos:** contribuição no auxílio à construção da ideia, no planejamento e no apoio às necessidades do projeto, colaborando para o desenvolvimento da proposta.

### O que faríamos diferente com mais tempo

- Substituir as ilustrações do carrossel por **fotos reais** das feiras;
- Criar um **backend** para armazenar cadastros e agendamentos;
- Integrar a disponibilidade do calendário a uma agenda real;
- Implementar autenticação real para os usuários.
