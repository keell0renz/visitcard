# Visitcard Project

This project is a personal portfolio/visitcard website for Bohdan Agarkov (@keell0renz), displaying personal data, professional experience, and links to reach out on social media and book a call at cal.com.

## Technology Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 4.1.17
- **UI Components**: React 19.2.0
- **Icons**: Lucide React, React Icons
- **Analytics**: Vercel Analytics & Speed Insights
- **PDF Generation**: @react-pdf/renderer (for resume generation)
- **Font**: Inter (from next/font/google)

## Project Structure

```
visitcard/
├── public/                    # Static assets
│   ├── images/               # Image assets (YC logo, etc.)
│   ├── favicon.ico           # Site favicon
│   └── sitemap.xml           # SEO sitemap
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── layout.tsx        # Root layout with metadata and global styles
│   │   ├── page.tsx          # Homepage (main entry point)
│   │   ├── global.css        # Global styles and Tailwind imports
│   │   └── og/               # Open Graph image generation
│   │       └── route.tsx     # Dynamic OG image endpoint
│   ├── components/           # React components
│   │   ├── hero.tsx          # Hero section with name, bio, and social links
│   │   ├── experience.tsx    # Professional experience timeline
│   │   ├── book-call.tsx     # Cal.com booking widget
│   │   ├── footer.tsx        # Footer with contact info
│   │   ├── social-link.tsx   # Reusable social link component
│   │   ├── projects.tsx      # Projects showcase (currently unused)
│   │   ├── stack.tsx         # Tech stack display (currently unused)
│   │   └── back-link.tsx     # Navigation back link component
│   ├── config/               # Configuration and data files
│   │   ├── experience.ts     # Professional experience data
│   │   └── resume.ts         # Resume data for PDF generation
│   ├── scripts/              # Utility scripts
│   │   └── generate-resume.ts # Script to generate ATS-friendly PDF resume
│   └── utils/                # Shared utility functions
│       └── format.ts         # Formatting utilities (YC batch formatting)
├── .claude/                  # Claude configuration
│   └── CLAUDE.md            # Project instructions for Claude
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── postcss.config.js         # PostCSS configuration
├── .prettierrc               # Prettier code formatting config
└── AGENTS.md                 # This file - project documentation

```

## Key Components

### App Router Pages

- **layout.tsx**: Root layout component with:
  - SEO metadata configuration
  - Font loading (Inter)
  - Analytics integration
  - Dark theme background

- **page.tsx**: Main homepage assembling all sections:
  - Hero section
  - Book a call widget
  - Professional experience
  - Footer

### Components

- **hero.tsx**: Header section featuring:
  - Profile image
  - Name and handle
  - Bio description
  - Social media links (Email, GitHub, Telegram, LinkedIn)
  - Accessible with aria-labels and proper link attributes

- **experience.tsx**: Interactive experience timeline with:
  - Expandable/collapsible experience items
  - Y Combinator batch badges
  - Company links and descriptions
  - Visual timeline with hover effects
  - Client-side state for expand/collapse

- **book-call.tsx**: Call-to-action for scheduling meetings via Cal.com

- **footer.tsx**: Site footer with availability status and contact button

### Configuration Files

- **experience.ts**: Array of professional experience objects with:
  - Company name, website, and YC info (if applicable)
  - Position and employment type
  - Dates and location
  - Description

- **resume.ts**: Structured resume data for PDF generation including:
  - Contact information
  - Professional summary
  - Skills
  - Experience
  - Education
  - Test scores

### Utilities

- **format.ts**: Shared utility functions:
  - `formatYCBatch()`: Converts YC batch format (e.g., "Summer 2025" → "S25")

### Scripts

- **generate-resume.ts**: Script to generate ATS-friendly PDF resume:
  - Uses React PDF renderer
  - Outputs to Desktop by default
  - Formats YC badges consistently
  - Creates clean, scannable layout

## Development Guidelines

- **Code Comments**: Comment only complex parts of the code, avoid excessive commenting
- **TypeScript**: Strict null checks enabled, full strict mode disabled for flexibility
- **Styling**: Dark theme with neutral color palette, purple accents
- **Accessibility**: Proper aria-labels, semantic HTML, keyboard navigation support
- **Code Quality**: Shared utilities for reusable logic, proper TypeScript types

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting
- `pnpm generate-resume` - Generate PDF resume to Desktop

## Design Philosophy

The site follows a minimalist, terminal-inspired aesthetic with:
- Dark background (#050505)
- Neutral gray text with white highlights
- Purple accent colors for interactive elements
- Clean typography with Inter font
- Smooth transitions and hover effects
- Mobile-responsive design

