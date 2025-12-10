# 🚀 SaaSify - Premium SaaS Landing Page

A stunning, premium SaaS landing page with dark gradient aesthetics, glassmorphism UI, and smooth animations. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion, inspired by Linear, Vercel, and Raycast.

![Hero Section](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0055?style=for-the-badge&logo=framer)

## ✨ Features

- 🎨 **Premium Dark Design** - Stunning dark gradients with purple/blue color palette inspired by modern SaaS leaders
- 🔮 **Glassmorphism UI** - Beautiful frosted glass effects with backdrop blur throughout
- 🌓 **Dark/Light Mode** - Seamless theme switching with next-themes integration
- 🎭 **Smooth Animations** - Professional Framer Motion animations with staggered reveals
- 📱 **Fully Responsive** - Pixel-perfect mobile, tablet, and desktop experience
- ⚡ **Performance Optimized** - Built with Next.js 15 App Router and optimized images
- 🎯 **TypeScript** - Full type safety with strict mode enabled
- 🎨 **Tailwind CSS + Shadcn/ui** - Utility-first CSS with premium component library
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 🚀 **Production Ready** - Proper client/server component architecture

## 📦 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript 5.7
- **Styling:** Tailwind CSS 3.4
- **UI Components:** Shadcn/ui + Radix UI
- **Animations:** Framer Motion 11
- **Theme:** next-themes
- **State Management:** TanStack Query (React Query)
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)

## 🏗️ Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with metadata and Providers
│   ├── page.tsx                # Home page with all sections
│   └── globals.css             # Global styles, CSS variables, and custom animations
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Sticky header with theme toggle
│   │   ├── HeroSection.tsx     # Premium hero with glassmorphism dashboard
│   │   ├── FeaturesSection.tsx # Feature grid with glass cards
│   │   ├── PricingSection.tsx  # Interactive pricing with yearly/monthly toggle
│   │   ├── ComparisonSection.tsx # Feature comparison table
│   │   ├── TestimonialsSection.tsx # Customer testimonials carousel
│   │   ├── FAQSection.tsx      # Accordion-based FAQ
│   │   ├── Footer.tsx          # Multi-column footer with CTA
│   │   ├── ThemeToggle.tsx     # Dark/Light mode switcher
│   │   ├── Providers.tsx       # Client-side providers wrapper
│   │   └── ui/                 # Shadcn/ui components (button, accordion, etc.)
│   ├── assets/
│   │   └── dashboard-mockup.webp # Dashboard preview image
│   ├── hooks/
│   │   ├── use-toast.ts        # Toast notifications hook
│   │   └── use-mobile.tsx      # Mobile detection hook
│   └── lib/
│       └── utils.ts            # Utility functions (cn, etc.)
├── tailwind.config.ts          # Extended Tailwind with custom colors
├── tsconfig.json               # TypeScript strict mode configuration
└── package.json                # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "Saas landing page"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors

Edit the HSL color variables in `app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222 47% 11%;
  --primary: 262 83% 58%;        /* Purple */
  --secondary: 220 14% 96%;
  --accent: 262 83% 58%;
  /* ... more colors */
}

.dark {
  --background: 222 47% 11%;
  --foreground: 210 40% 98%;
  --primary: 263 70% 50%;
  /* ... dark mode colors */
}
```

### Gradients

Key gradient classes used throughout:
- `bg-gradient-to-br from-[#0F0C29] via-[#302B63] to-[#24243E]` - Hero background
- `from-violet-600 via-purple-600 to-indigo-600` - Primary buttons
- `from-violet-400 via-purple-400 to-indigo-400` - Text gradients

### Content

- **Hero Section:** Edit `src/components/HeroSection.tsx` - headline, subtitle, CTAs
- **Features:** Update the `features` array in `src/components/FeaturesSection.tsx`
- **Pricing:** Modify `plans` array in `src/components/PricingSection.tsx`
- **Testimonials:** Update `testimonials` array in `src/components/TestimonialsSection.tsx`
- **FAQ:** Edit `faqs` array in `src/components/FAQSection.tsx`
- **Comparison:** Update feature rows in `src/components/ComparisonSection.tsx`

### Branding

- Change the logo/brand name in `src/components/Header.tsx` and `src/components/Footer.tsx`
- Update metadata in `app/layout.tsx` (title, description, viewport)
- Replace dashboard mockup in `src/assets/dashboard-mockup.webp`

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Other Deployment Options

- **Netlify:** Connect your Git repository
- **Railway:** Deploy with one click
- **Docker:** Use the included Dockerfile (if needed)

## 📸 Screenshots

### Light Mode
![Light Mode Preview](./screenshots/light-mode.png)

### Dark Mode
![Dark Mode Preview](./screenshots/dark-mode.png)

### Light Mode - Mobile
![Light Mode Mobile Preview](./screenshots/light-mode-mobile.png)

### Dark Mode - Mobile
![Dark Mode Mobile Preview](./screenshots/dark-mode-mobile.png)

## 🎯 Key Sections

### Hero Section
- **Premium dark gradient background** - Purple/blue gradients (`from-[#0F0C29] via-[#302B63] to-[#24243E]`)
- **Radial spotlight glows** - Strategic light effects for depth
- **Large, bold typography** - `text-5xl → md:text-7xl` with gradient accents
- **Glassmorphism dashboard preview** - Interactive mock dashboard with charts
- **Trust indicators** - Check marks, team count, and trial info
- **Dual CTAs** - Primary gradient button + outlined demo button

### Features Section
- **Glass card design** - `backdrop-blur-xl` with gradient borders
- **6 feature cards** - Lightning fast, secure, scalable, analytics, integrations, support
- **Gradient icon circles** - Color-coded for visual hierarchy
- **Staggered animations** - Framer Motion entrance effects

### Pricing Section
- **3 pricing tiers** - Starter ($29), Professional ($79), Enterprise (Custom)
- **Interactive toggle** - Yearly vs Monthly with discount badge
- **"Most Popular" highlight** - Gradient border and badge on Pro plan
- **Feature lists** - Checkmarks for included features
- **Gradient background** - Subtle purple/blue radial gradient

### Comparison Section
- **Feature comparison table** - Side-by-side with competitors
- **Check/X indicators** - Clear visual differentiation
- **10+ feature rows** - Comprehensive feature breakdown
- **Responsive layout** - Scrollable on mobile

### Testimonials Section
- **Customer reviews** - Real testimonials with 5-star ratings
- **Avatar images** - Unsplash profile pictures
- **Role and name** - Professional context for each testimonial
- **Grid layout** - 3-column desktop, responsive on mobile

### FAQ Section
- **Accordion UI** - Shadcn/ui collapsible components
- **8 common questions** - Trial, payment, security, support, etc.
- **Clean typography** - Easy to read Q&A format

### Header
- **Fixed navigation** - Sticky with backdrop blur effect
- **Logo + brand** - Box icon with "Saasify" name
- **Theme toggle** - Dropdown menu for system/light/dark modes
- **CTA button** - Prominent "Get Started" in header

### Footer
- **Multi-column layout** - Product, Company, Resources, Legal
- **Newsletter CTA** - Email input with subscribe button
- **Social links** - Twitter, LinkedIn icons
- **Copyright** - Year and brand name

## 🔧 Configuration Files

### Tailwind Config (`tailwind.config.ts`)
- **HSL color system** - All colors defined as HSL variables
- **Dark mode** - Class-based dark mode enabled
- **Container config** - Centered with padding, max-width 1400px
- **Extended theme** - Custom colors, animations, gradients
- **Custom animations** - `fade-in-up`, `pulse-glow`, `float`, `gradient-glow`
- **Content paths** - Includes `app/`, `src/`, `components/`

### TypeScript Config (`tsconfig.json`)
- **Strict mode** enabled for maximum type safety
- **Path aliases** - `@/*` maps to root directory
- **Module resolution** - Bundler mode for Next.js 15
- **JSX** - Preserve for React Server Components
- **Target** - ES2017 for modern browsers

### Next.js Config
- **App Router** architecture (Next.js 15)
- **Image optimization** - Using Next.js `<Image />` component
- **Viewport metadata** - Proper mobile viewport configuration
- **Server/Client boundaries** - Proper `'use client'` directives

## 📝 Component Documentation

### Button Component (Shadcn/ui)
```tsx
<Button variant="hero" size="lg">
  Get Started
</Button>
```
- **Variants:** `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`, `hero`, `heroOutline`
- **Sizes:** `default`, `sm`, `lg`, `icon`
- **Custom hero variants** with gradient backgrounds and shadows

### Accordion Component
```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Question?</AccordionTrigger>
    <AccordionContent>Answer content</AccordionContent>
  </AccordionItem>
</Accordion>
```

### ThemeToggle
```tsx
<ThemeToggle />
```
- Dropdown menu with 3 options: Light, Dark, System
- Automatically syncs with system preference
- Uses `next-themes` for persistence
- Icons from Lucide React

### Providers Wrapper
All client-side providers are wrapped in a single component:
- `QueryClientProvider` - TanStack Query
- `ThemeProvider` - next-themes
- `TooltipProvider` - Radix UI
- Toast notifications (Toaster + Sonner)

## 🎨 Design System

### Color Palette
- **Primary Purple:** `#8B5CF6` (Violet 500)
- **Secondary Blue:** `#6366F1` (Indigo 500)
- **Accent Pink:** `#EC4899` (Pink 500)
- **Background Dark:** `#0F0C29` → `#302B63` → `#24243E`

### Typography Scale
- **Hero Headline:** `text-5xl md:text-7xl` (48px → 72px)
- **Section Titles:** `text-3xl md:text-4xl` (30px → 36px)
- **Body Text:** `text-base md:text-lg` (16px → 18px)
- **Small Text:** `text-sm` (14px)

### Spacing System
- **Section Padding:** `py-20 md:py-28` (80px → 112px)
- **Container Max Width:** `max-w-6xl` or `max-w-7xl` (1200px or 1280px)
- **Content Gaps:** `gap-8 md:gap-12` or `gap-12 md:gap-16`

### Effects
- **Glassmorphism:** `backdrop-blur-xl bg-white/10 border border-white/20`
- **Radial Glow:** `bg-[radial-gradient(circle_at_center,rgba(140,100,255,0.45),transparent_70%)]`
- **Shadows:** `shadow-[0_20px_50px_-15px_rgba(139,92,246,0.7)]`

## 🐛 Known Issues & Fixes

### Mobile Responsiveness
- ✅ **Fixed:** Added `overflow-x-hidden` to html, body, and main wrapper
- ✅ **Fixed:** Proper viewport metadata configuration
- ✅ **Fixed:** Removed duplicate `globals.css` import

### Client Component Errors
- ✅ **Fixed:** Added `'use client'` to all interactive components
- ✅ **Fixed:** Created `Providers.tsx` wrapper for client-side providers
- ✅ **Fixed:** Separated server/client component boundaries

### Hydration Mismatches
- ✅ **Fixed:** Added `suppressHydrationWarning` to html and body
- ✅ **Fixed:** Removed `Math.random()` from client components
- ✅ **Fixed:** Proper `<Image />` component usage

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Design Inspiration:** Linear, Vercel, Raycast, Notion
- **UI Components:** [Shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** [Google Fonts (Inter)](https://fonts.google.com/specimen/Inter)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Built with ❤️ using Next.js 15, TypeScript, Tailwind CSS, and Shadcn/ui**
