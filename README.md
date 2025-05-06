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

## Core Packages (Plasmic + Next.js)
- `@plasmicapp/loader-nextjs`
- `@plasmicapp/loader-react`
- `next`
- `react`, `react-dom`
- `tailwindcss`, `postcss`, `autoprefixer`
- `next-seo`, `next-sitemap`
- `typescript`, `eslint`, `@types/*`

## Optional: shadcn/ui Integration
If you want to use [shadcn/ui](https://ui.shadcn.com/) components, you should also install:
- `@radix-ui/react-slot`
- `class-variance-authority`
- `clsx`
- `lucide-react` (for icons)
- `tailwind-merge`

To add shadcn/ui components, run:
```bash
npx shadcn-ui@latest add [component]
```

If you are starting from this boilerplate and want to use shadcn/ui, install the required packages:
```bash
npm install @radix-ui/react-slot class-variance-authority clsx lucide-react tailwind-merge
```

## Plasmic Integration
1. Create your project in Plasmic Studio.
2. Add your project ID and token to `.env.local`.
3. Register any custom code components in `plasmic-init.ts`.
4. Use `<PlasmicComponent component="PageName" />` in your Next.js pages.

## Setting Up Plasmic Code Components (Plasmic Host)

To enable Plasmic Studio to use your custom code components, you must set up a special host route in your Next.js app:

### Step 1: Create the `/plasmic-host` Route
Create a file at `src/app/plasmic-host/page.tsx` with the following content:

```tsx
import * as React from "react";
import { PlasmicCanvasHost } from "@plasmicapp/loader-nextjs";
import { PLASMIC } from "@/plasmic-init";

export default function PlasmicHost() {
  return PLASMIC && <PlasmicCanvasHost />;
}
```

### Step 2: Start Your App
```bash
npm run dev
```

### Step 3: Configure Plasmic Studio to Use Your Host
1. Open your project in [Plasmic Studio](https://studio.plasmic.app/).
2. Click the ellipsis menu by your project name (top-left), and select **Configure project**.
3. Set the app host URL to:
   ```
   http://localhost:3000/plasmic-host
   ```
4. Press **Confirm**.

Now, any code components you register in your codebase will show up in the Plasmic Studio Components panel and can be used visually in your pages.

For more details, see the [Plasmic app-hosting guide](https://docs.plasmic.app/learn/app-hosting/).

## Handling Images: Developer & Client Guide

### For Developers
- Code components (like Hero) should accept an `imageUrl` and `imageAlt` prop.
- Use Next.js's `Image` component for optimized, responsive images.
- Example usage in a component:
  ```tsx
  import Image from "next/image";
  // ...
  <Image src={imageUrl} alt={imageAlt} fill className="rounded-lg" />
  ```
- Register these props in `plasmic-init.ts` so they are editable in Plasmic Studio.
- In `next.config.js`, add `studio.plasmic.app` to the `images.domains` array to allow Plasmic-hosted images.

### For Clients (Content Editors)
1. **Uploading Images:**
   - In Plasmic Studio, open the Asset Manager (image icon in the left sidebar).
   - Upload your image or use an existing one.
2. **Setting the Image in a Component:**
   - Select the component (e.g., Hero) on your page.
   - In the right sidebar, find the `Image url` field.
   - Paste the image URL from the Asset Manager or use a public image URL.
   - Optionally, fill in the `Image alt` field for accessibility and SEO.
3. **Preview:**
   - You will see the image update live in Plasmic Studio and on your website after publishing.

### Best Practices
- Always provide descriptive alt text for images.
- Use Plasmic's Asset Manager for easy uploads and management.
- For advanced users: you can use local images by placing them in the `public` folder and referencing them as `/your-image.png`.
- If you need to restrict image choices, developers can predefine allowed images and document their paths.

## Deployment

1. Push to GitHub
2. Connect to Vercel
3. Configure environment variables
4. Deploy

## Contributing

1. Create feature branch
2. Make changes
3. Submit pull request

## License

MIT
