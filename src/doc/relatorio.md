# Relatório de Auditoria e Melhoria do Projeto

## 1. Resumo Executivo
- O projeto está funcional, com boa legibilidade, arquitetura inspirada em FSD e separação inicial entre `entities`, `features`, `widgets`, `pages` e `shared`.
- O nível de maturidade atual é **júnior/intermediário**: estrutura boa para estudo/portfólio, mas ainda sem alguns pilares de produção (qualidade automatizada, acessibilidade robusta, governança de dependências e padronização de engenharia).
- Pontos fortes: uso de `React 18 + Vite`, CSS Modules, composição de seções por responsabilidade, dados desacoplados em `entities`, e UX com fluxo completo (carrossel, calendário, modal de agendamento, auth simulada).
- Build de produção funciona e está leve para landing page (bundle JS ~173 kB bruto / ~56 kB gzip).
- Principais gaps para nível de mercado: acessibilidade (A11y), ausência de lint/format/testes, vulnerabilidade conhecida na cadeia `vite/esbuild`, e alguns problemas de robustez em navegação mobile e semântica interativa.

## 2. Pontos Críticos (Prioridade Alta)
- **Arquivo/Local:** `src/widgets/header/ui/Header.module.css` (`.navMobile`) + `src/widgets/header/ui/Header.jsx`
  - **O que está errado:** o menu mobile é renderizado quando `isMenuOpen === true`, mas a classe `.navMobile` está com `display: none` sem regra de exibição quando aberto. Em telas pequenas, isso pode impedir o menu de aparecer.
  - **Como corrigir (com exemplo de código):** adotar classe de estado para abertura e controlar visibilidade por classe.

```css
/* Header.module.css */
.navMobile {
  display: none;
  position: fixed;
  inset: 0;
  /* ... */
}

.navMobileOpen {
  display: block;
}
```

```jsx
/* Header.jsx */
{isMenuOpen && (
  <nav className={`${styles.navMobile} ${styles.navMobileOpen}`} aria-label="Menu mobile">
    ...
  </nav>
)}
```

- **Arquivo/Local:** `package.json` + cadeia `vite/esbuild` (evidenciado por `npm audit`)
  - **O que está errado:** há vulnerabilidades reportadas (moderada/alta) em `esbuild` transitivo via Vite (`GHSA-67mh-4wv8-2f99`), o que impacta segurança em ambiente de desenvolvimento.
  - **Como corrigir (com exemplo de código):** planejar upgrade de major com validação de compatibilidade.

```bash
npm install -D vite@latest @vitejs/plugin-react@latest
npm audit
npm run build
```

```json
{
  "devDependencies": {
    "vite": "^8.3.8",
    "@vitejs/plugin-react": "^6.3.0"
  }
}
```

- **Arquivo/Local:** `src/shared/ui/modal/Modal.jsx`
  - **O que está errado:** modal sem gerenciamento completo de foco (sem focus trap, sem devolver foco ao elemento anterior, sem foco inicial no conteúdo). Isso quebra acessibilidade para teclado/leitores de tela e padrões WCAG.
  - **Como corrigir (com exemplo de código):** capturar elemento ativo antes de abrir, focar modal ao abrir, trap de `Tab` e restore no fechamento.

```jsx
useEffect(() => {
  if (!isOpen) return
  const lastActive = document.activeElement
  const node = contentRef.current
  node?.focus()

  const onKeyDown = (event) => {
    if (event.key === 'Escape') onClose()
    // implementar trap de Tab entre elementos focáveis
  }

  window.addEventListener('keydown', onKeyDown)
  return () => {
    window.removeEventListener('keydown', onKeyDown)
    lastActive?.focus?.()
  }
}, [isOpen, onClose])
```

- **Arquivo/Local:** `src/features/faq-accordion/ui/AccordionItem.jsx`
  - **O que está errado:** accordion sem atributos ARIA fundamentais (`aria-expanded`, `aria-controls`, `id` da região associada). Isso reduz usabilidade com tecnologias assistivas.
  - **Como corrigir (com exemplo de código):** ligar botão-região semanticamente.

```jsx
const contentId = `faq-${question.replace(/\s+/g, '-').toLowerCase()}`

<button
  type="button"
  className={styles.trigger}
  onClick={() => setIsOpen((prev) => !prev)}
  aria-expanded={isOpen}
  aria-controls={contentId}
>
  <span>{question}</span>
</button>

<p id={contentId} hidden={!isOpen} className={styles.content}>
  {answer}
</p>
```

- **Arquivo/Local:** `src/features/schedule-visit/ui/AvailabilityCalendar.jsx`
  - **O que está errado:** dias indisponíveis continuam clicáveis/focáveis (função bloqueia internamente), mas sem `disabled`/`aria-disabled`; isso gera UX confusa e acessibilidade inferior.
  - **Como corrigir (com exemplo de código):** bloquear interação no próprio botão e enriquecer semântica.

```jsx
<button
  type="button"
  disabled={!cell.isAvailable}
  aria-disabled={!cell.isAvailable}
  aria-pressed={cell.isSelected}
  onClick={() => selectDay(cell)}
>
  {cell.day}
</button>
```

## 3. Melhorias de Código e Arquitetura (Prioridade Média)
- Consolidar o FSD com **public API por camada** (`index.js` em cada slice), evitando imports profundos como `../../../...` e facilitando refactors.
- Extrair estado global de sessão (`user`) para `context/store` leve, reduzindo prop drilling entre `HomePage` e widgets/modais.
- Padronizar contratos de componentes compartilhados (`Button`, `Modal`) com props mais extensíveis (`className`, `disabled`, `aria-*`, `...rest`), melhorando reuso sem gambiarras.
- Evitar seletores potencialmente globais em CSS Modules (ex.: `h1` em `src/widgets/hero/ui/Hero.module.css`); preferir classes explícitas (`.title`, `.subtitle`) para impedir vazamento de estilo.
- Fortalecer hooks de feature com validação mais explícita (ex.: `useCarousel` tratar `total <= 0` e impedir modulo inválido/estado inconsistente).
- Isolar dados mockados em uma camada `services/mock` e preparar interface para API real (facilita troca futura de backend sem quebrar widgets/features).

## 4. Refinamentos e Boas Práticas (Prioridade Baixa)
- Incluir ESLint + plugins de React Hooks + Prettier, com scripts `lint`, `format`, `check-format` e execução em CI.
- Adicionar suíte mínima de testes (Vitest + React Testing Library) para fluxos críticos: autenticação mock, seleção de data, envio do formulário e navegação.
- Criar `.env.example` e documentação de variáveis (mesmo em app sem backend) para manter padrão profissional e previsibilidade de ambientes.
- Melhorar README com seção de arquitetura técnica executável (decisões, trade-offs, convenções de nome, estratégia de estado e checklist de release).
- Adicionar `prefers-reduced-motion` para animações contínuas (palavras orbitando no hero e transições), com fallback para acessibilidade.
- Incluir meta de qualidade de UI: contraste mínimo (WCAG AA), estados `:focus-visible`, `loading/error/empty states` explícitos em componentes interativos.

## 5. Plano de Ação Sugerido (Checklist)
- [x] Corrigir menu mobile no header (visibilidade de `.navMobile` quando aberto) e validar navegação em telas pequenas.
- [x] Corrigir acessibilidade estrutural de componentes interativos (`Modal`, `Accordion`, `AvailabilityCalendar`) com ARIA e foco por teclado.
- [ ] Atualizar Vite/plugin-react para versões sem vulnerabilidade conhecida, validar build e regressão visual.
- [ ] Implantar ESLint + Prettier + scripts de qualidade e bloquear merge com lint quebrado via CI.
- [ ] Criar testes de regressão para autenticação mock, calendário e envio de agendamento.
- [ ] Refatorar imports profundos usando public APIs por slice para reduzir acoplamento entre camadas.
- [ ] Revisar CSS Modules para evitar seletores globais acidentais e padronizar tokens/estados de foco.
- [ ] Documentar padrões de arquitetura e contribuição no README (como rodar, validar, testar e publicar).
