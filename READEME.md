# Portfolio - Henrique Serra

Um portfolio elegante e minimalista construído com Node.js, Express e EJS, seguindo as melhores práticas de design visual.

## 🎨 Design Principles

Este projeto foi desenvolvido seguindo rigorosamente as **Visual Design Rules** para criar uma experiência visual coesa e profissional:

### Cores e Contraste
- **Near-black (#222222)** e **near-white (#f8f8f8)** em vez de preto e branco puros
- Neutrals saturados com cores quentes para coerência da paleta
- Alto contraste para elementos importantes (botões, conteúdo)
- Diferenças de brilho distintas entre cores da paleta

### Tipografia
- Texto do corpo sempre **16px ou maior** para melhor legibilidade
- Line-height menor para texto maior (headlines)
- Line-height maior para texto menor (corpo)
- Comprimento de linha de aproximadamente **70 caracteres**
- Máximo de **2 typefaces** (Georgia serif para headlines, sans-serif para UI)

### Espaçamento e Layout
- Measurements baseados em escala matemática (múltiplos de 8px)
- Padding horizontal **2x o padding vertical** em botões
- Padding externo ≥ padding interno em containers
- Spacing entre pontos de alto contraste
- Grid de 12 colunas quando aplicável

### Sombras e Profundidade
- Valores de blur **2x os valores de distância** (ex: Y:4px, Blur:8px)
- Elementos mais próximos são mais claros
- Consistência na técnica de profundidade (soft shadows)
- Sem sombras em interfaces escuras

### Alinhamento
- Alinhamento óptico quando necessário (não apenas matemático)
- Tudo alinhado com algum outro elemento
- Elementos organizados por peso visual (mais pesado primeiro)

## 🚀 Tecnologias

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web minimalista
- **EJS** - Template engine
- **CSS puro** - Estilização sem frameworks
- **Morgan** - Logging HTTP

## 📁 Estrutura do Projeto

```
portfolio/
├── controllers/
│   └── controller.js          # Controladores das rotas
├── public/
│   ├── styles.css             # Estilos CSS principais
│   └── hero.svg               # Ilustração principal
├── views/
│   ├── partials/
│   │   ├── head.ejs           # Meta tags e links
│   │   ├── nav.ejs            # Navegação principal
│   │   └── footer.ejs         # Rodapé
│   ├── index.ejs              # Página inicial
│   ├── about.ejs              # Página sobre
│   ├── contact.ejs            # Página de contato
│   └── 404.ejs                # Página de erro
├── app.js                     # Servidor principal
├── package.json               # Dependências
└── README.md                  # Documentação
```

## 🛠️ Instalação e Uso

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/henrique-serra/portfolio.git
cd portfolio
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:3000
```

### Scripts Disponíveis

- `npm start` - Inicia o servidor em produção
- `npm run dev` - Inicia com nodemon para desenvolvimento

## 📱 Responsividade

O design é totalmente responsivo, adaptando-se elegantemente a diferentes tamanhos de tela:

- **Desktop**: Layout completo com grid de 3 colunas para projetos
- **Tablet**: Ajustes de espaçamento e navegação empilhada
- **Mobile**: Layout de coluna única com navegação otimizada

## 🎯 Características Principais

### Design Minimalista
- Interface limpa focada no conteúdo
- Hierarquia visual clara
- Cores e tipografia consistentes

### Performance
- CSS puro sem dependencies
- Imagens otimizadas
- Carregamento rápido

### Acessibilidade
- Contraste adequado (WCAG guidelines)
- Navegação por teclado
- HTML semântico
- Labels apropriados em formulários

### SEO
- Meta tags otimizadas
- Estrutura semântica
- URLs amigáveis

## 🎨 Paleta de Cores

```css
--near-black: #222222     /* Texto principal */
--near-white: #f8f8f8     /* Backgrounds claros */
--bg-light: #fdfbf7       /* Background principal */
--accent-primary: #795a69  /* Cor de destaque */
--accent-secondary: #9ed0c9 /* Cor secundária */
--text-muted: #666666     /* Texto secundário */
```

## 📋 Funcionalidades

- **Portfolio de projetos** com grid responsivo
- **Página sobre** com timeline profissional
- **Formulário de contato** funcional
- **Navegação suave** entre páginas
- **Tratamento de erro 404**
- **Design system** consistente

## 🔄 Próximos Passos

- [ ] Implementar backend para formulário de contato
- [ ] Adicionar animações CSS mais elaboradas
- [ ] Integrar com CMS para gerenciar projetos
- [ ] Adicionar blog pessoal
- [ ] Implementar modo escuro
- [ ] Adicionar PWA capabilities

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo `package.json` para mais detalhes.

---

**Desenvolvido com ❤️ seguindo as melhores práticas de design visual e desenvolvimento web.**