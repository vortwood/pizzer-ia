# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**PizzerIA** - Landing page para franquicia de máquinas expendedoras de pizza 24/7 con inteligencia artificial. Ubicada en Maldonado y Punta del Este, Uruguay. Built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4.

## Development Commands

```bash
# Development
npm run dev              # Start development server (http://localhost:3000)

# Production
npm run build            # Build for production
npm start                # Start production server

# Code Quality
npm run lint             # Run ESLint
```

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **React**: 19.2.0
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4 with PostCSS
- **Fonts**: Geist Sans & Geist Mono (Next.js optimized fonts)
- **Language**: Spanish (es)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with comprehensive SEO metadata, structured data
│   ├── page.tsx            # Home page (composition of all sections)
│   └── globals.css         # Global Tailwind styles
└── components/             # All UI components
    ├── Header.tsx          # Fixed header with navigation (Inicio, Variedades, Beneficios, Ubicaciones, Franquicias)
    ├── Hero.tsx            # Hero section - Pizza 24/7 con IA
    ├── ItalianTastes.tsx   # Benefits section - 24/7, 3min, calidad, sin gluten
    ├── CustomerFavorite.tsx # Pizza varieties - 8 tipos, todas $490
    ├── LocationsMap.tsx    # Maldonado/Punta del Este locations
    ├── FranchiseSection.tsx # B2B section with contact form
    ├── Footer.tsx          # Footer with business info
    └── StructuredData.tsx  # JSON-LD schemas for SEO

public/
├── robots.txt              # Search engine crawling rules
└── sitemap.xml            # Sitemap for search engines
```

## Architecture Patterns

### Component Structure
- **Client Components**: Use `"use client"` directive (e.g., Header with useState/useEffect for interactivity)
- **Server Components**: Default for static content (e.g., page.tsx, most sections)
- **Composition**: Main page composes smaller focused components

### Styling Approach
- Tailwind utility classes for all styling
- Responsive design: mobile-first with sm/md/lg breakpoints
- Dark theme with gradient backgrounds, glass morphism effects
- Custom utility patterns: backdrop-blur, gradients, hover states

### State Management
- Component-level useState for UI state (menu toggle, scroll position)
- useEffect for side effects (scroll listeners, event handlers)

## Path Aliases

- `@/*` → `./src/*` (configured in tsconfig.json)

## Business Context

- **Brand**: PizzerIA (Pizza + IA = Inteligencia Artificial)
- **Business Model**: Pizza vending machines 24/7 with AI + Franchise model (B2B)
- **Target**: B2C (end customers) + B2B (business partners/franchisees)
- **Location**: Maldonado and Punta del Este, Uruguay
- **Price**: All pizzas $490 UYU
- **Key Features**: 24/7 availability, 3-minute preparation, gluten-free options, AI-powered

## SEO Strategy

### Primary Keywords (Uruguayan Spanish)
- máquinas expendedoras de pizza
- pizza 24 horas Punta del Este
- pizza 24/7 Maldonado
- pizza sin gluten Maldonado/Punta del Este
- franquicia máquinas expendedoras
- pizza con inteligencia artificial
- pizza al paso Maldonado/Punta del Este

### SEO Implementation
- Comprehensive metadata in layout.tsx (title, description, keywords, Open Graph, Twitter Cards)
- Structured data (JSON-LD): Organization, Product, LocalBusiness, Breadcrumbs, FAQ
- Alt texts optimized with location and service keywords
- robots.txt and sitemap.xml configured
- Mobile-first responsive design
- Fast loading with Next.js Image optimization

## Content Sections

1. **Hero**: Main value proposition - pizza 24/7 con IA, $490
2. **Benefits**: 24/7 availability, 3min ready, quality, gluten-free
3. **Varieties**: 8 pizza types (clásicas, especiales, sin gluten) - all $490
4. **Locations**: Maldonado (active) + Punta del Este (coming soon)
5. **Franchise**: B2B section with benefits and contact form

## Development Notes

- All components use TypeScript with strict mode enabled
- All text content in Uruguayan Spanish
- Images use Next.js `<Image>` with SEO-optimized alt texts
- Navigation uses Next.js `<Link>` for SPA behavior
- No database/backend (static landing page with client-side form)
- No authentication required
- Form submission needs backend integration
