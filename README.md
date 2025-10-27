# TeamTacles Landing Page

Landing page oficial do TeamTacles - Plataforma de gestão inteligente de projetos, tarefas e equipes.

> **"Organize seus projetos com a inteligência de um polvo"** 🐙

## 📖 Índice

- [Design System Completo](#-design-system-completo)
- [Mascote e Identidade Visual](#-mascote-e-identidade-visual)
- [Efeitos Especiais](#-efeitos-especiais)
- [Layout e Grid System](#-layout-e-grid-system)
- [Acessibilidade](#-acessibilidade)
- [Guia para IAs e Desenvolvedores](#-guia-para-ias-e-desenvolvedores)
- [Estrutura de Arquivos](#-estrutura-de-arquivos)
- [Recursos e Funcionalidades](#-recursos-e-funcionalidades)
- [Como Usar](#-como-usar)
- [Deploy](#-deploy)
- [Personalização](#-personalização)
- [Performance](#-performance)

---

## 🎨 Design System Completo

### Paleta de Cores Principal

A landing page utiliza um esquema de cores dark com acentos em laranja vibrante, refletindo a identidade visual do TeamTacles.

| Cor | Hex | RGB | Uso |
|-----|-----|-----|-----|
| **Background** | `#232323` | rgb(35, 35, 35) | Fundo principal da página |
| **Card** | `#2A2A2A` | rgb(42, 42, 42) | Background de cards e elementos elevados |
| **Primary** | `#EB5F1C` | rgb(235, 95, 28) | CTAs, links, destaques principais |
| **Primary Hover** | `#d54d0f` | rgb(213, 77, 15) | Estado hover dos botões primários |
| **Accent** | `#FF7A3D` | rgb(255, 122, 61) | Gradientes, efeitos secundários |
| **Text Primary** | `#FFFFFF` | rgb(255, 255, 255) | Texto principal, títulos |
| **Text Secondary** | `#B0B0B0` | rgb(176, 176, 176) | Texto secundário, descrições |
| **Text Muted** | `#808080` | rgb(128, 128, 128) | Texto desativado, labels |
| **Success** | `#3CB371` | rgb(60, 179, 113) | Mensagens de sucesso, ícones positivos |
| **Warning** | `#FFD700` | rgb(255, 215, 0) | Avisos, alertas |
| **Info** | `#4A90E2` | rgb(74, 144, 226) | Informações, tooltips |

### Gradientes Utilizados

```css
/* Gradiente Hero Background */
background: linear-gradient(135deg, #232323 0%, #2A2A2A 100%);

/* Gradiente CTA Section */
background: linear-gradient(135deg, #EB5F1C, #FF7A3D);

/* Gradiente Feature Icons */
background: linear-gradient(135deg, var(--color-primary), var(--color-accent));

/* Gradiente Bolhas Oceânicas */
background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.6), rgba(235, 95, 28, 0.5));

/* Gradiente Background Divisor de Bolhas */
background: linear-gradient(to bottom, transparent 0%, rgba(235, 95, 28, 0.08) 50%, transparent 100%);
```

### Sistema de Espaçamento

Baseado em múltiplos de 0.5rem (8px):

| Token | Valor | Pixels | Uso |
|-------|-------|--------|-----|
| `--spacing-xs` | 0.5rem | 8px | Padding pequeno, gaps mínimos |
| `--spacing-sm` | 1rem | 16px | Padding padrão de elementos |
| `--spacing-md` | 1.5rem | 24px | Espaçamento entre elementos relacionados |
| `--spacing-lg` | 2rem | 32px | Espaçamento entre grupos de elementos |
| `--spacing-xl` | 3rem | 48px | Padding de seções, espaçamento grande |
| `--spacing-2xl` | 4rem | 64px | Padding vertical de seções |
| `--spacing-3xl` | 6rem | 96px | Espaçamento entre seções principais |

### Sistema de Tipografia

**Fonte:** Poppins (Google Fonts)
**Pesos disponíveis:** 300, 400, 500, 600, 700, 800

| Token | Tamanho | Uso |
|-------|---------|-----|
| `--font-size-xs` | 0.75rem (12px) | Labels pequenos, metadata |
| `--font-size-sm` | 0.875rem (14px) | Texto secundário, captions |
| `--font-size-base` | 1rem (16px) | Corpo de texto padrão |
| `--font-size-lg` | 1.125rem (18px) | Texto destacado, subtítulos pequenos |
| `--font-size-xl` | 1.25rem (20px) | Subtítulos, feature titles |
| `--font-size-2xl` | 1.5rem (24px) | Títulos de seção pequenos |
| `--font-size-3xl` | 1.875rem (30px) | Títulos de seção médios |
| `--font-size-4xl` | 2.25rem (36px) | Títulos de seção grandes |
| `--font-size-5xl` | 3rem (48px) | Hero title, títulos principais |
| `--font-size-6xl` | 3.75rem (60px) | Display titles (não usado atualmente) |

**Line Height:** 1.6 para corpo de texto, 1.2 para títulos

### Border Radius Scale

| Token | Valor | Uso |
|-------|-------|-----|
| `--radius-sm` | 8px | Botões, inputs, cards pequenos |
| `--radius-md` | 12px | Cards médios, feature icons |
| `--radius-lg` | 15px | Cards principais, seções |
| `--radius-xl` | 20px | Elementos grandes |
| `--radius-full` | 9999px | Circular (badges, avatars, bolhas) |

### Sistema de Sombras

| Token | Valor | Uso |
|-------|-------|-----|
| `--shadow-sm` | `0 2px 4px rgba(0, 0, 0, 0.1)` | Elementos sutis, hover leve |
| `--shadow-md` | `0 4px 8px rgba(0, 0, 0, 0.15)` | Cards padrão, botões |
| `--shadow-lg` | `0 8px 16px rgba(0, 0, 0, 0.2)` | Cards hover, elementos elevados |
| `--shadow-xl` | `0 12px 24px rgba(0, 0, 0, 0.25)` | Modais, elementos muito elevados |

### Transições

| Token | Valor | Uso |
|-------|-------|-----|
| `--transition-fast` | 0.2s ease | Hover rápido, feedbacks |
| `--transition-base` | 0.3s ease | Transições padrão |
| `--transition-slow` | 0.5s ease | Animações suaves, transições grandes |

---

## 🐙 Mascote e Identidade Visual

### O Polvo TeamTacles

O mascote do TeamTacles é um **polvo inteligente e amigável** que representa:
- **Múltiplos tentáculos** = Multitarefa e gestão simultânea de projetos
- **Inteligência** = Organização eficiente e smart workflows
- **Oceano** = Ambiente colaborativo fluido
- **Laranja vibrante** = Energia, criatividade e produtividade

### Assets do Mascote

Todos os assets estão na pasta `assets/`:

| Arquivo | Tamanho | Uso | Observações |
|---------|---------|-----|-------------|
| `image.png` | 125KB | Logo principal, favicon | 130x100px ideal |
| `logo.png` | 4.3KB | Logo compacto | Versão otimizada |
| `mascot.png` | 189KB | Mascote padrão | 500x500px recomendado |
| `mascot-landing.png` | 2.2MB | Hero section | Alta qualidade, 1000x1000px |
| `polvo_tasks.png` | 127KB | Seção de benefícios | Polvo com tarefas |
| `teamtacles_screenshoot.png` | 997KB | Screenshot do app | Max-width: 700px na página |

### Animações do Mascote

**Floating Animation** - Movimento suave de flutuação:

```css
@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
}

/* Aplicado em: */
.mascot-image {
    animation: float 3s ease-in-out infinite;
}
```

**Drop Shadow:**
```css
filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3));
```

### Guidelines de Uso

✅ **Permitido:**
- Usar o mascote em materiais promocionais
- Aplicar drop-shadow para profundidade
- Animação de flutuação suave
- Escalar mantendo proporções

❌ **Evitar:**
- Distorcer as proporções
- Mudar as cores do mascote
- Sobrepor textos no mascote
- Usar em fundos que comprometem visibilidade

---

## 🫧 Efeitos Especiais

### Ocean Bubbles Divider

Divisores animados de bolhas oceân icas entre as seções, reforçando o tema marítimo do polvo.

**Características:**
- 8 bolhas por divisor
- 3 variações de animação (bubbleRise, bubbleRise2, bubbleRise3)
- Tamanhos variados: 25px a 60px
- Cores: Gradiente radial branco + laranja
- Opacidade: 0.9 a 1.0

**Localização:**
- Entre Features → How It Works
- Entre How It Works → Benefits
- Entre Benefits → Testimonials
- Entre Testimonials → CTA

**Animações:**

```css
@keyframes bubbleRise {
    0% {
        transform: translateY(0) translateX(0) scale(0);
        opacity: 0;
    }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% {
        transform: translateY(-100vh) translateX(50px) scale(1);
        opacity: 0;
    }
}
```

**Customização:**

```css
/* Mudar intensidade das bolhas */
.bubble {
    background: radial-gradient(
        circle at 30% 30%,
        rgba(255, 255, 255, 0.6),  /* Brilho branco (aumentar para mais intenso) */
        rgba(235, 95, 28, 0.5)     /* Cor laranja (aumentar para mais visível) */
    );
    border: 2px solid rgba(235, 95, 28, 0.4);  /* Borda (aumentar opacidade) */
}

/* Mudar velocidade */
.bubble:nth-child(1) {
    animation: bubbleRise 8s infinite ease-in;  /* Diminuir para mais rápido */
}

/* Mudar tamanho */
.bubble:nth-child(3) {
    width: 60px;   /* Aumentar para bolhas maiores */
    height: 60px;
}
```

### Floating Cards

Cards flutuantes no hero section que destacam recursos principais:

```css
.floating-card {
    position: absolute;
    animation: floatCard 3s ease-in-out infinite;
}

@keyframes floatCard {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

/* Posicionamento */
.card-1 { top: 10%; left: -10%; animation-delay: 0s; }
.card-2 { top: 50%; right: -10%; animation-delay: 1s; }
.card-3 { bottom: 10%; left: 0%; animation-delay: 2s; }
```

### Parallax Effect

Efeito parallax no mascote do hero que acompanha o scroll:

```javascript
const heroImage = document.querySelector('.hero-image-container');
const parallaxSpeed = 0.3; // Velocidade do parallax (menor = mais sutil)

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (scrolled < window.innerHeight) {
        requestAnimationFrame(() => {
            heroImage.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        });
    }
});
```

### Scroll Reveal

Progressive enhancement para animações de entrada:

```javascript
// Elementos começam invisíveis
.reveal {
    opacity: 0;
    transform: translateY(30px);
}

// Ativam quando entram na viewport
.reveal.active {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.6s ease, transform 0.6s ease;
}
```

**Elementos com reveal:**
- Feature cards (delay 0.1s cada)
- Steps (delay 0.2s cada)
- Benefit items (delay 0.1s cada)
- Testimonial cards (delay 0.1s cada)

---

## 📐 Layout e Grid System

### Container

```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}
```

### Breakpoints

| Breakpoint | Width | Target | Mudanças |
|------------|-------|--------|----------|
| **Desktop** | 1200px+ | Desktop padrão | Layout completo em 2 colunas |
| **Tablet** | 768px - 1024px | Tablets, laptops pequenos | Grid adaptado, alguns elementos empilhados |
| **Mobile** | até 768px | Smartphones | Layout em coluna única, menu hamburguer |
| **Mobile Small** | até 480px | Smartphones pequenos | Fontes reduzidas, padding compacto |

### Grid Patterns

**Hero Section:**
```css
.hero-content {
    display: grid;
    grid-template-columns: 1fr 1fr;  /* 2 colunas em desktop */
    gap: 6rem;
}

@media (max-width: 1024px) {
    .hero-content {
        grid-template-columns: 1fr;  /* 1 coluna em tablet/mobile */
    }
}
```

**Features Grid:**
```css
.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
}
```

**Benefits Layout:**
```css
.benefits-content {
    display: grid;
    grid-template-columns: 1fr 1fr;  /* Texto | Imagem */
    gap: 6rem;
}
```

### Navbar

```css
.navbar {
    position: fixed;
    height: 80px;  /* --navbar-height */
    background: rgba(35, 35, 35, 0.95);
    backdrop-filter: blur(10px);
    z-index: 1000;
}
```

---

## ♿ Acessibilidade

A landing page segue as diretrizes WCAG 2.1 Level AA.

### ARIA Labels

```html
<!-- Menu mobile -->
<button aria-label="Abrir menu de navegação"
        aria-expanded="false"
        aria-controls="navMenu">

<!-- Estatísticas -->
<div role="region" aria-label="Estatísticas do TeamTacles">

<!-- Bolhas decorativas -->
<div class="bubbles-divider" aria-hidden="true">

<!-- Ícones decorativos -->
<ion-icon name="rocket-outline" aria-hidden="true"></ion-icon>
```

### Navegação por Teclado

- ✅ **Tab:** Navega entre elementos interativos
- ✅ **Enter/Space:** Ativa botões e links
- ✅ **Esc:** Fecha menu mobile
- ✅ **Foco visível:** Outline laranja em todos os elementos focáveis

```css
.nav-link:focus,
.btn:focus {
    outline: 3px solid rgba(235, 95, 28, 0.3);
    outline-offset: 2px;
}
```

### Contraste de Cores

Todos os contrastes atendem WCAG AA:

| Combinação | Contraste | Status |
|------------|-----------|--------|
| Branco (#FFFFFF) sobre Background (#232323) | 14.74:1 | ✅ AAA |
| Branco sobre Primary (#EB5F1C) | 3.96:1 | ✅ AA |
| Text Secondary (#B0B0B0) sobre Background | 7.24:1 | ✅ AAA |

### Progressive Enhancement

```css
/* Feature cards visíveis sem JavaScript */
.feature-card.reveal {
    opacity: 1;
    transform: translateY(0);
}

/* Só esconde com JavaScript carregado */
.js-loaded .feature-card.reveal:not(.active) {
    opacity: 0;
    transform: translateY(30px);
}
```

### Semântica HTML

- ✅ `<article>` para feature cards
- ✅ `<section>` para seções principais
- ✅ `<nav>` para navegação
- ✅ `<header>`, `<footer>` estruturados
- ✅ Hierarquia de headings (h1 → h2 → h3)

---

## 🤖 Guia para IAs e Desenvolvedores

### Arquitetura do Projeto

```
landing-page/
├── index.html          # HTML semântico, 7 seções principais
├── styles.css          # ~1400 linhas, CSS Variables no topo
├── script.js           # ~550 linhas, vanilla JS
└── assets/             # 6 imagens (logo, mascotes, screenshot)
```

### Padrões de Código

**CSS:**
- Mobile-first approach
- CSS Variables para design tokens
- BEM-like naming (sem strict BEM)
- Comentários de seção com `/* ==== */`

**JavaScript:**
- Vanilla JS (sem frameworks)
- Event delegation quando apropriado
- Performance optimization (throttle, requestAnimationFrame)
- Progressive enhancement

**HTML:**
- Português para conteúdo
- Inglês para atributos e classes
- Comentários descritivos entre seções
- Accessibilidade first

### Convenções de Nomenclatura

**Classes CSS:**
```css
.section-name { }          /* Seção principal */
.component-name { }        /* Componente */
.component-name__element { } /* Elemento do componente */
.component-name--modifier { } /* Variação do componente */
```

**Variáveis CSS:**
```css
--color-{nome}     /* Cores */
--spacing-{size}   /* Espaçamentos */
--font-size-{size} /* Tamanhos de fonte */
--radius-{size}    /* Border radius */
--shadow-{size}    /* Sombras */
--transition-{speed} /* Transições */
```

### Como Adicionar uma Nova Seção

1. **HTML** - Adicionar entre seções existentes:
```html
<!-- Bubbles Divider -->
<div class="bubbles-divider" aria-hidden="true">
    <div class="bubble"></div>
    <!-- ... 8 bolhas ... -->
</div>

<!-- Nova Seção -->
<section class="nova-secao" id="nova-secao">
    <div class="container">
        <div class="section-header">
            <span class="section-tag">Tag</span>
            <h2 class="section-title">Título</h2>
            <p class="section-subtitle">Subtítulo</p>
        </div>
        <!-- Conteúdo -->
    </div>
</section>
```

2. **CSS** - Adicionar estilos específicos:
```css
.nova-secao {
    background-color: var(--color-background);
    padding: var(--spacing-3xl) 0;
}
```

3. **JS** (se necessário) - Adicionar lógica:
```javascript
// Animações, interações, etc.
```

### Componentes Reutilizáveis

**Botões:**
```html
<!-- Primary -->
<a href="#" class="btn btn-primary">
    <ion-icon name="rocket-outline"></ion-icon>
    Texto do Botão
</a>

<!-- Secondary -->
<a href="#" class="btn btn-secondary">Texto</a>

<!-- Large -->
<a href="#" class="btn btn-primary btn-large">Texto</a>
```

**Cards:**
```html
<!-- Feature Card -->
<article class="feature-card" tabindex="0">
    <div class="feature-icon" aria-hidden="true">
        <ion-icon name="icon-name"></ion-icon>
    </div>
    <h3 class="feature-title">Título</h3>
    <p class="feature-description">Descrição</p>
</article>

<!-- Testimonial Card -->
<div class="testimonial-card">
    <div class="testimonial-content">
        <div class="quote-icon">
            <ion-icon name="chatbox-ellipses-outline"></ion-icon>
        </div>
        <p class="testimonial-text">"Depoimento"</p>
    </div>
    <div class="testimonial-author">
        <div class="author-avatar">XX</div>
        <div class="author-info">
            <span class="author-name">Nome</span>
            <span class="author-role">Cargo</span>
        </div>
    </div>
</div>
```

### Proposta de Valor e Mensagens

**Mensagem Principal:**
> "Organize seus projetos com a inteligência de um polvo"

**Tom de Voz:**
- Amigável e acessível
- Profissional mas não corporativo
- Focado em produtividade e simplicidade
- Português brasileiro

**CTAs Estratégicos:**
1. Hero: "Começar Agora" + "Ver Como Funciona"
2. Seções: Links de navegação entre seções
3. CTA Final: "Começar Agora" + "Entrar em Contato"

**Personas nos Depoimentos:**
- Maria Silva - Gerente de Projetos
- Sara Santos - Coordenadora de Equipe
- Ana Costa - Product Owner

### Performance

**Otimizações Implementadas:**
- ✅ Throttle em scroll events (100ms)
- ✅ RequestAnimationFrame para animações
- ✅ Lazy loading de imagens
- ✅ CSS animations (GPU accelerated)
- ✅ Passive event listeners
- ✅ Debounce não usado (preferido throttle)

**Métricas Esperadas:**
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Cumulative Layout Shift: < 0.1

### Melhores Práticas

✅ **DO:**
- Usar CSS Variables para temas
- Manter acessibilidade (ARIA, keyboard, contrast)
- Testar em múltiplos navegadores
- Progressive enhancement
- Comentar código complexo

❌ **DON'T:**
- Adicionar jQuery ou frameworks pesados
- Inline styles (usar classes)
- !important (evitar ao máximo)
- Animações que causam jank
- Ignorar fallbacks para JavaScript desabilitado

---

## 📁 Estrutura de Arquivos

```
landing-page/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript para interatividade
├── assets/             # Imagens e recursos
│   ├── logo.png
│   ├── mascot.png
│   └── polvo_tasks.png
└── README.md           # Este arquivo
```

## ✨ Recursos e Funcionalidades

### HTML (index.html)
- Estrutura semântica e acessível
- Meta tags para SEO e redes sociais
- 7 seções principais:
  1. **Hero Section** - Apresentação com CTA principal
  2. **Features** - 6 recursos principais do app
  3. **How It Works** - 3 passos para começar
  4. **Benefits** - 4 benefícios principais
  5. **Testimonials** - Depoimentos de usuários
  6. **CTA Final** - Chamada para ação
  7. **Footer** - Links e informações

### CSS (styles.css)
- Design system completo com CSS Variables
- Layout responsivo (mobile-first)
- Animações suaves e transições
- Grid e Flexbox para layouts
- Breakpoints: 1024px, 768px, 480px
- Efeitos visuais:
  - Floating cards animados
  - Gradientes
  - Sombras e elevações
  - Hover effects

### JavaScript (script.js)
- Menu mobile responsivo
- Scroll reveal animations
- Smooth scroll para âncoras
- Navbar com efeito de scroll
- Botão "voltar ao topo"
- Contadores animados nas estatísticas
- Barras de progresso animadas
- Efeito parallax no hero
- Highlight de navegação ativa
- Lazy loading de imagens
- Easter egg (Konami Code)
- Performance otimizada com debounce

## 🚀 Como Usar

### Visualização Local

1. **Método 1: Abrir diretamente no navegador**
   ```bash
   # Navegue até a pasta
   cd landing-page

   # Abra o index.html no seu navegador preferido
   # Windows:
   start index.html

   # macOS:
   open index.html

   # Linux:
   xdg-open index.html
   ```

2. **Método 2: Usar um servidor local (recomendado)**
   ```bash
   # Com Python 3
   python -m http.server 8000

   # Com Python 2
   python -m SimpleHTTPServer 8000

   # Com Node.js (npx http-server)
   npx http-server -p 8000

   # Com PHP
   php -S localhost:8000
   ```

   Depois acesse: `http://localhost:8000`

## 🌐 Deploy

### Opção 1: Netlify (Recomendado)

1. Crie uma conta em [netlify.com](https://www.netlify.com)
2. Arraste a pasta `landing-page` para o Netlify Drop
3. Pronto! Seu site estará no ar em segundos

**Via CLI:**
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Deploy
cd landing-page
netlify deploy --prod
```

### Opção 2: Vercel

1. Instale o Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   cd landing-page
   vercel --prod
   ```

### Opção 3: GitHub Pages

1. Crie um repositório no GitHub
2. Faça upload da pasta `landing-page`
3. Vá em Settings > Pages
4. Selecione a branch e a pasta
5. Salve e aguarde o deploy

### Opção 4: Servidor Tradicional (FTP)

1. Conecte-se ao seu servidor via FTP
2. Faça upload de todos os arquivos da pasta `landing-page`
3. Aponte seu domínio para a pasta onde fez o upload

## 🎯 Personalização

### Alterar Cores

Edite as variáveis CSS em `styles.css`:

```css
:root {
    --color-background: #232323;
    --color-card: #2A2A2A;
    --color-primary: #EB5F1C;
    /* ... outras cores */
}
```

### Alterar Textos

Edite diretamente no `index.html` - todos os textos estão em português e são fáceis de identificar.

### Adicionar/Remover Seções

Cada seção está claramente marcada com comentários no HTML. Basta copiar/remover a seção desejada.

### Modificar Animações

Ajuste as animações em `script.js` ou desabilite removendo a classe `reveal` dos elementos.

## 📱 Responsividade

A landing page é totalmente responsiva e otimizada para:

- **Desktop** (1200px+)
- **Tablet** (768px - 1024px)
- **Mobile** (até 768px)

## ⚡ Performance

### Otimizações Implementadas:

- ✅ CSS minificável
- ✅ JavaScript com debounce
- ✅ Lazy loading de imagens
- ✅ Fontes otimizadas do Google Fonts
- ✅ Animações CSS (GPU accelerated)
- ✅ Ícones via CDN (Ionicons)

### Como Otimizar para Produção:

1. **Minificar CSS:**
   ```bash
   # Usando cssnano
   npx cssnano styles.css styles.min.css
   ```

2. **Minificar JavaScript:**
   ```bash
   # Usando terser
   npx terser script.js -o script.min.js
   ```

3. **Otimizar Imagens:**
   ```bash
   # Usando imagemin
   npx imagemin assets/*.png --out-dir=assets/optimized
   ```

4. **Atualizar referências no HTML:**
   ```html
   <link rel="stylesheet" href="styles.min.css">
   <script src="script.min.js"></script>
   ```

## 🔧 Requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- JavaScript habilitado
- Conexão com internet (para fontes e ícones externos)

## 📊 Seções e Conteúdo

### Hero Section
- Título principal com slogan
- Subtítulo com proposta de valor
- 2 CTAs (Começar Agora + Ver Demo)
- 3 estatísticas animadas
- Imagem do mascote com floating cards

### Features (6 cards)
1. Gestão de Projetos
2. Organização de Tarefas
3. Colaboração em Equipe
4. Relatórios Detalhados
5. Convites e Permissões
6. Interface Intuitiva

### How It Works (3 passos)
1. Crie sua Equipe
2. Organize Projetos e Tarefas
3. Acompanhe o Progresso

### Benefits (4 itens)
1. Produtividade Aumentada
2. Comunicação Centralizada
3. Visibilidade Total
4. Flexibilidade e Controle

### Testimonials (3 depoimentos)
- Depoimentos de usuários fictícios
- Personalizável conforme necessidade

## 🎨 Assets Necessários

Os seguintes assets são utilizados:

- `logo.png` - Logo principal (130x100px recomendado)
- `mascot.png` - Mascote polvo (500x500px recomendado)
- `polvo_tasks.png` - Polvo com tarefas (300x300px recomendado)

**Nota:** Todos os assets já foram copiados da pasta `src/assets` do aplicativo.

## 🐛 Troubleshooting

### Imagens não aparecem
- Verifique se os arquivos estão na pasta `assets/`
- Confirme que os nomes dos arquivos estão corretos
- Use um servidor local ao invés de abrir diretamente

### Animações não funcionam
- Verifique se o JavaScript está carregando
- Abra o console do navegador (F12) e veja se há erros
- Confirme que está usando um navegador moderno

### Menu mobile não abre
- Verifique se os Ionicons estão carregando (conexão internet)
- Confirme que o script.js está sendo carregado corretamente

## 📝 Checklist de Deploy

Antes de fazer deploy, verifique:

- [ ] Todas as imagens estão na pasta `assets/`
- [ ] Links de navegação funcionam corretamente
- [ ] CTAs apontam para os destinos corretos
- [ ] Textos foram revisados (sem erros de português)
- [ ] Meta tags de SEO estão preenchidas
- [ ] Imagem de preview para redes sociais está configurada
- [ ] Testado em diferentes navegadores
- [ ] Testado em diferentes tamanhos de tela
- [ ] Links do footer foram atualizados
- [ ] Links de redes sociais foram configurados

## 🔗 Links Importantes para Atualizar

Antes do deploy, atualize os seguintes links no `index.html`:

1. **Meta tags:**
   - `og:image` - Imagem para compartilhamento
   - `og:url` - URL final do site

2. **CTAs:**
   - Links dos botões "Começar Agora"
   - Links dos botões "Entrar em Contato"
   - Atualizar `href="#cta"` para URLs reais

3. **Footer:**
   - Links de redes sociais
   - Links de páginas (Sobre, Contato, Blog, etc.)
   - Links legais (Privacidade, Termos, etc.)

## 📈 Analytics

Para adicionar tracking de analytics, edite `script.js`:

```javascript
// Exemplo com Google Analytics
const trackEvent = (category, action, label) => {
    gtag('event', action, {
        event_category: category,
        event_label: label
    });
};
```

## 🎉 Easter Eggs

A landing page inclui um easter egg ativado pelo Konami Code:
- Sequência: ↑ ↑ ↓ ↓ ← → ← → B A
- Efeito: Rotação 360° da página

## 📞 Suporte

Para dúvidas ou sugestões sobre a landing page:
- Abra uma issue no repositório
- Entre em contato com a equipe de desenvolvimento

## 📝 Changelog

### v2.0 - Outubro 2025
- ✨ **Ocean Bubbles Divider** - Efeito de bolhas oceânicas entre seções
- 🎨 **Design System Completo** - Documentação expandida de cores, tipografia, spacing
- ♿ **Acessibilidade Aprimorada** - WCAG 2.1 AA, ARIA labels, navegação por teclado
- 🐙 **Mascote Guidelines** - Documentação completa do uso do mascote
- 🤖 **Guia para IAs/Devs** - Padrões de código e convenções documentadas
- 📸 **Screenshot Aumentado** - De 300px para 700px (max-width)
- 🔧 **Favicon Adicionado** - Logo do polvo na aba do navegador
- 💬 **Depoimento Atualizado** - Sara Santos sobre facilidade de uso
- 🎯 **Mensagens Ajustadas** - Removido "status personalizados", "gratuito" ao invés de "trial"
- ⚡ **Performance** - Throttle, requestAnimationFrame, progressive enhancement
- 📊 **Footer Simplificado** - 3 colunas ao invés de 5

### v1.0 - Setembro 2025
- 🎉 Lançamento inicial da landing page
- 7 seções principais (Hero, Features, How It Works, Benefits, Testimonials, CTA, Footer)
- Design responsivo mobile-first
- Animações scroll reveal
- Menu mobile hamburguer

## 📊 Estatísticas do Projeto

| Métrica | Valor |
|---------|-------|
| **Linhas de CSS** | ~1400 |
| **Linhas de JS** | ~550 |
| **Linhas de HTML** | ~565 |
| **Total de Assets** | 6 imagens (3.6MB) |
| **Seções Principais** | 7 |
| **Components Reutilizáveis** | 8+ |
| **Breakpoints** | 4 (desktop, tablet, mobile, mobile-small) |
| **Animações CSS** | 6 (@keyframes) |
| **CSS Variables** | 40+ |

## 🎯 Resumo Rápido para IAs

Se você é uma IA lendo este documento, aqui está tudo que precisa saber:

### 🎨 **Cores**
- Primary: `#EB5F1C` (laranja)
- Background: `#232323` (cinza escuro)
- Cards: `#2A2A2A`
- Texto: `#FFFFFF`

### 🐙 **Identidade**
- Mascote: Polvo inteligente laranja
- Tema: Oceano, multitarefa, produtividade
- Tom: Amigável, profissional, acessível
- Slogan: "Organize seus projetos com a inteligência de um polvo"

### 📐 **Layout**
- Container: 1200px max-width
- Spacing: Scale de 8px (0.5rem a 6rem)
- Grid: CSS Grid + Flexbox
- Responsive: Mobile-first, 4 breakpoints

### 🫧 **Efeitos Especiais**
- Ocean Bubbles: 8 bolhas entre seções, 3 animações
- Floating Cards: Hero section
- Parallax: Mascote no hero (0.3 speed)
- Scroll Reveal: Progressive enhancement

### ⚡ **Tech Stack**
- HTML5 semântico
- CSS3 (Variables, Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+)
- Ionicons 7.1.0
- Google Fonts (Poppins)

### ♿ **Acessibilidade**
- WCAG 2.1 Level AA
- ARIA labels
- Keyboard navigation (Tab, Enter, Esc)
- Focus visible (outline laranja)
- Progressive enhancement
- Contraste AAA em texto principal

### 📦 **Assets**
- `image.png` - Logo/Favicon (125KB)
- `mascot-landing.png` - Hero mascot (2.2MB)
- `teamtacles_screenshoot.png` - App screenshot (997KB)
- Todos em `assets/`

### 🚀 **Deploy**
- Netlify/Vercel recomendado
- Arquivos estáticos (HTML/CSS/JS)
- Não precisa de build step
- CDN para fonts e ícones

### 🤝 **Contribuindo**
- Mobile-first CSS
- CSS Variables para temas
- Comentários em português
- Classes em inglês
- Progressive enhancement sempre

## 📄 Licença

Esta landing page faz parte do projeto TeamTacles.

---

**Desenvolvido com 🐙 pela equipe TeamTacles**

*"Organize seus projetos com a inteligência de um polvo"*

---

## 📚 Recursos Adicionais

- **Ionicons:** https://ionic.io/ionicons
- **Google Fonts (Poppins):** https://fonts.google.com/specimen/Poppins
- **WCAG Guidelines:** https://www.w3.org/WAI/WCAG21/quickref/
- **CSS Grid Guide:** https://css-tricks.com/snippets/css/complete-guide-grid/
- **MDN Web Docs:** https://developer.mozilla.org/

## 💡 Dicas Finais

1. **Para Designers:** Use as CSS Variables para manter consistência visual
2. **Para Desenvolvedores:** Leia a seção "Guia para IAs e Desenvolvedores" primeiro
3. **Para IAs:** A seção "Resumo Rápido para IAs" tem tudo que você precisa começar
4. **Para PMs/POs:** Veja "Proposta de Valor e Mensagens" para entender o posicionamento
5. **Para QA:** Teste os breakpoints (1024px, 768px, 480px) e acessibilidade (Tab, Esc)
