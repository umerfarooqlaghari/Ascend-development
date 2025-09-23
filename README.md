# Ascend Consulting Website

This is a Next.js website for Ascend Consulting built with TypeScript, app-based routing, ESLint, and Turbopack.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about-us/
│   ├── careers/
│   ├── contact-us/
│   ├── our-services/
│   ├── our-tools/
│   ├── resource-center/
│   ├── layout.tsx          # Root layout with Header and Footer
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── shared/             # Shared components
│   │   ├── Header/         # Navigation header
│   │   └── Footer/         # Site footer
│   ├── Home/               # Home page component
│   ├── AboutUs/            # About Us page component
│   ├── OurServices/        # Our Services page component
│   ├── OurTools/           # Our Tools page component
│   ├── Careers/            # Careers page component
│   ├── ResourceCenter/     # Resource Center page component
│   ├── ContactUs/          # Contact Us page component
│   └── index.ts            # Component exports
```

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Turbopack** for fast development builds
- **ESLint** for code linting
- **CSS Modules** for component-scoped styling
- **Responsive Design** with mobile-first approach

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Header Design

The header includes:
- Ascend Consulting logo
- Navigation menu with hover effects
- Responsive design
- Color scheme: Normal text (#000000), Hover text (#fa177e)

## Pages

All pages are currently set up with basic structure and can be expanded with content:

1. **Home** - Main landing page
2. **About Us** - Company information
3. **Our Services** - Service offerings
4. **Our Tools** - Tools and resources
5. **Careers** - Job opportunities
6. **Resource Center** - Knowledge base
7. **Contact Us** - Contact information

Each page has its own component with corresponding CSS module for styling.
