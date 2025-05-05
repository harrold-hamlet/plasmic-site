# Next.js + Plasmic + shadcn/ui Boilerplate

A modern, type-safe boilerplate for building websites with Next.js, Plasmic, and shadcn/ui. This template includes a 3-page site structure (Home, Services, Contact) with global Header and Footer components.

## Features

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Plasmic integration for visual editing
- SEO optimization
- Responsive design
- Global layout components

## Prerequisites

- Node.js 18.18.0 or later
- npm or yarn
- Plasmic account
- Vercel account (for deployment)

## Quick Start

1. Clone the repository:
```bash
git clone [your-repo-url]
cd [your-project-name]
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```
Edit `.env.local` with your Plasmic credentials.

4. Start the development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── app/                    # App router pages
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── sections/          # Page sections
│   └── layout/           # Global components
├── lib/                  # Utilities
└── styles/              # Global styles
```

## Development Workflow

### 1. Initial Setup

1. Create Plasmic project and get credentials
2. Install shadcn/ui components as needed
3. Set up global layout components

### 2. Building Pages

1. Create page components in Plasmic
2. Register components in plasmic-init.ts
3. Implement pages in app directory

### 3. Adding New Features

1. Create new section components
2. Register with Plasmic
3. Add to pages

## Plasmic Integration

1. Create project in Plasmic Studio
2. Get project ID and token
3. Add to .env.local
4. Register components in plasmic-init.ts

## shadcn/ui Components

To add new shadcn/ui components:
```bash
npx shadcn-ui@latest add [component-name]
```

## Deployment

1. Push to GitHub
2. Connect to Vercel
3. Configure environment variables
4. Deploy

## Cursor Composer Instructions

When using Cursor Composer:

1. For new sections:
   - Create in components/sections/
   - Include index.tsx, styles.ts, and types.ts
   - Register in plasmic-init.ts

2. For page implementation:
   - Use PlasmicComponent in page.tsx
   - Pass props for editable content

3. For global components:
   - Create in components/layout/
   - Implement directly in layout.tsx

## Contributing

1. Create feature branch
2. Make changes
3. Submit pull request

## License

MIT

## Support

For support, contact [your-email]
