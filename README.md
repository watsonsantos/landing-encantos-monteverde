# Encantos Monte Verde 🌿

Landing page (one-page) da **Encantos Monte Verde**, um pequeno negócio de buquês,
arranjos florais e presentes feitos à mão em São Tomé e Príncipe. O site apresenta
o catálogo, as ocasiões especiais e encaminha as encomendas diretamente para o
WhatsApp.

> **Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui

---

## ✨ Funcionalidades

- **Hero com vídeo scrubado por scroll** — o vídeo de fundo avança/recua conforme o
  utilizador percorre a página (técnica _scroll-scrubbing_ suavizada com
  `requestAnimationFrame`).
- **Catálogo de produtos** — cartões com imagem, categoria e CTA que abre o WhatsApp
  já com uma mensagem pré-preenchida por produto.
- **Secção de ocasiões** — aniversários, Dia dos Namorados, casamentos e
  agradecimentos, com animações subtis.
- **Quem está por trás** — apresentação da responsável (Nelma Tavares).
- **Contacto** — chamada para ação direta para o WhatsApp, com número e links de
  redes sociais (Instagram e Facebook).
- **Design responsivo** — navegação com menu móvel, tipografia serifada/sans e
  paleta verde-orgânica.
- **Acessibilidade e performance** — uso de `next/font`, `next/image`, animações que
  respeitam `prefers-reduced-motion` e atributos `aria`/`data-testid` consistentes.

---

## 🧰 Stack tecnológica

| Área          | Tecnologia                                                                 |
| ------------- | -------------------------------------------------------------------------- |
| Framework     | [Next.js 16](https://nextjs.org/) (App Router, React Server Components)     |
| UI            | [React 19](https://react.dev/)                                              |
| Linguagem     | [TypeScript](https://www.typescriptlang.org/)                               |
| Estilos       | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/postcss`)         |
| Componentes   | [shadcn/ui](https://ui.shadcn.com/) (estilo _new-york_) sobre [Radix UI](https://www.radix-ui.com/) |
| Animações     | [Motion](https://motion.dev/) (`motion/react`)                               |
| Ícones        | [lucide-react](https://lucide.dev/) + [react-icons](https://react-icons.github.io/react-icons/) |
| Fontes        | `next/font/google` — Cormorant Garamond + Manrope                           |
| Utilidades    | `clsx` + `tailwind-merge` (`cn`), `class-variance-authority`                 |

> **Nota:** o repositório inclui também dependências vindas do _setup_ do shadcn/ui
> (`@tanstack/react-query`, `react-hook-form`, `zod`, `recharts`, `sonner`, `vaul`,
> `cmdk`, `embla-carousel-react`, entre outras) que, neste momento, não são usadas na
> landing page. Mantêm-se disponíveis para futuras funcionalidades (formulários,
> dashboards, etc.).

---

## 📋 Pré-requisitos

- **Node.js** `>= 20` (testado com `20.17.0`)
- **npm** `>= 10` (testado com `10.8.3`)

> O script `dev` usa `next dev --webpack`; certifica-te de que a versão do Node é
> compatível com o Next.js 16 antes de instalar as dependências.

---

## 🚀 Como começar

```bash
# 1. Clonar o repositório
git clone https://github.com/watsonsantos/landing-encantos-monteverde.git
cd encantos-monteverde

# 2. Instalar as dependências
npm install

# 3. Iniciar o servidor de desenvolvimento
npm run dev
```

A aplicação fica disponível em **<http://localhost:3000>**.

### Scripts disponíveis

| Comando            | Descrição                                                       |
| ------------------ | --------------------------------------------------------------- |
| `npm run dev`      | Inicia o servidor de desenvolvimento (`next dev --webpack`).     |
| `npm run build`    | Gera o _build_ de produção (`next build`).                       |
| `npm run start`    | Sobe o servidor de produção (requer `build` prévio).             |
| `npm run typecheck`| Verifica os tipos TypeScript sem emitir ficheiros (`tsc --noEmit`). |

Não são necessárias variáveis de ambiente para correr o projeto localmente — todos os
links (WhatsApp, Instagram, Facebook) e dados do catálogo estão versionados no código.

---

## 📁 Estrutura do projeto

```
encantos-monteverde/
├── public/                     # Assets públicos servidos diretamente
│   ├── bouquet-hero-scroll.mp4 # Vídeo de fundo do hero
│   └── robots.txt
├── src/
│   ├── app/                    # App Router (Next.js)
│   │   ├── layout.tsx          # Layout raiz + metadata + script de sanitização
│   │   ├── page.tsx            # Página inicial (composição das secções)
│   │   ├── error.tsx           # Boundary de erro
│   │   ├── not-found.tsx       # Página 404
│   │   ├── globals.css         # Tokens de design e estilos globais (Tailwind v4)
│   │   └── icon.svg            # Favicon
│   ├── components/
│   │   ├── brand/              # Marca/logo
│   │   ├── home-page/          # Secções da landing (hero, produtos, ocasiões, …)
│   │   ├── layout/             # Header e footer
│   │   └── ui/                 # Componentes shadcn/ui
│   ├── config/
│   │   └── site.ts             # Links (WhatsApp, Instagram, Facebook) e vídeo do hero
│   ├── data/
│   │   └── products.ts         # Dados do catálogo de produtos
│   ├── hooks/                  # Hooks (use-mobile, use-toast)
│   ├── lib/                    # Utilitários (cn), fontes e animações
│   └── assets/                 # Imagens dos produtos e referências
├── components.json             # Configuração do shadcn/ui
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── package.json
```

---

## ⚙️ Configuração

### Links e dados do site

Os links de contacto e o vídeo do hero estão centralizados em
[`src/config/site.ts`](src/config/site.ts):

```ts
export const siteLinks = {
  instagram: "https://www.instagram.com/encan_tosmonteverde/",
  facebook:  "https://www.facebook.com/profile.php?id=61578135116547",
  whatsapp:  "https://wa.me/2399845033",
};
```

O catálogo exibido na secção de produtos vive em
[`src/data/products.ts`](src/data/products.ts). Para adicionar/alterar um produto,
edita aí o `label`, a `category`, a `image` e o `tone` (cor de fundo do cartão).

### Caminhos (path aliases)

O alias `@/*` aponta para `./src/*`:

```jsonc
// tsconfig.json
"paths": {
  "@/*": ["./src/*"]
}
```

### Design tokens

Os tokens de cor, tipografia e raio estão definidos em `src/app/globals.css`
(Tailwind CSS v4, via `@theme`). A paleta principal gira em torno de:

- `#173f32` / `#193b31` — verde-escuro (texto e botões primários)
- `#2a8c60` / `#7ccf9d` — verdes de destaque
- `#a9dfba` / `#f5f7ef` — verdes-claros e fundo neutro

---

## 🧪 Testes e qualidade

- **Typecheck:** `npm run typecheck` valida todo o código TypeScript sem emitir
  artefactos.
- O código usa `data-testid` em elementos-chave (links, botões, cartões), facilitando
  a escrita de testes _end-to-end_ no futuro.
- Ainda não existem suítes de testes automatizados (unit/e2e) configuradas no projeto.

---

## 🚢 Deploy

O projeto está pronto para ser implantado em plataformas compatíveis com Next.js
(ex.: **Vercel**). Existe também um ficheiro de configuração
[`whaness.yml`](whaness.yml) (Wharnex) com metadados do projeto.

Fluxo típico de produção:

```bash
npm run build
npm run start
```

---

## 📬 Contacto

- **WhatsApp:** [+239 984 5033](https://wa.me/2399845033)
- **Instagram:** [@encan_tosmonteverde](https://www.instagram.com/encan_tosmonteverde/)
- **Facebook:** [Encantos Monte Verde](https://www.facebook.com/profile.php?id=61578135116547)

---

## 📄 Licença

Projeto privado (`"private": true`). Todos os direitos reservados à Encantos Monte
Verde.
