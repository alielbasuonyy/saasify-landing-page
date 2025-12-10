# 🚀 SaaS Landing Page

A modern, clean, and professional SaaS landing page built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

![Hero Section](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0055?style=for-the-badge&logo=framer)

## ✨ Features

- 🎨 **Apple-like Minimal Design** - Clean and modern UI inspired by Apple's design language
- 🌓 **Dark/Light Mode** - Seamless theme switching with smooth transitions
- 🎭 **Smooth Animations** - Beautiful Framer Motion animations throughout
- 📱 **Fully Responsive** - Perfect experience on mobile, tablet, and desktop
- ⚡ **Performance Optimized** - Built with Next.js 15 App Router for optimal performance
- 🎯 **TypeScript** - Full type safety and better developer experience
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid development
- ♿ **Accessible** - Built with accessibility best practices

## 📦 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Theme:** next-themes
- **Font:** Inter (Google Fonts)

## 🏗️ Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles and CSS variables
├── components/
│   ├── Button.tsx           # Reusable button component
│   ├── Card.tsx             # Card component with hover effects
│   ├── Container.tsx        # Container for consistent page width
│   ├── Footer.tsx           # Footer with links and social media
│   ├── Navbar.tsx           # Sticky navigation with blur effect
│   ├── ThemeToggle.tsx      # Dark/Light mode toggle
│   └── theme-provider.tsx   # Theme context provider
├── sections/
│   ├── Hero.tsx             # Hero section with CTA
│   ├── Features.tsx         # Features grid
│   ├── Pricing.tsx          # Pricing tiers
│   └── Testimonials.tsx     # Customer testimonials
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
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

Edit the color variables in `app/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  /* ... more colors */
}
```

### Content

- **Hero Section:** Edit `sections/Hero.tsx`
- **Features:** Update the `features` array in `sections/Features.tsx`
- **Pricing:** Modify the `pricingPlans` array in `sections/Pricing.tsx`
- **Testimonials:** Update the `testimonials` array in `sections/Testimonials.tsx`

### Branding

- Change the logo/brand name in `components/Navbar.tsx`
- Update metadata in `app/layout.tsx`

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

## 🎯 Key Sections

### Hero Section
- Compelling headline with gradient text
- Clear value proposition
- Dual CTAs (Get Started + View Demo)
- Trust indicators

### Features Section
- 6 feature cards in responsive grid
- Icon-based visual hierarchy
- Staggered entrance animations

### Pricing Section
- 3 pricing tiers (Starter, Pro, Enterprise)
- "Most Popular" badge highlight
- Feature comparison lists
- Clear CTAs for each plan

### Testimonials Section
- Customer reviews with ratings
- Avatar + name + role layout
- Social proof for credibility

### Navigation
- Sticky navbar with backdrop blur
- Smooth scroll to sections
- Dark/Light mode toggle
- Responsive mobile menu-ready

### Footer
- Multi-column link organization
- Social media integration
- Copyright and legal links

## 🔧 Configuration Files

### Tailwind Config (`tailwind.config.ts`)
- Custom color system using HSL
- Dark mode enabled (class-based)
- Extended theme for consistency

### TypeScript Config (`tsconfig.json`)
- Strict mode enabled
- Path aliases configured (@/*)
- Optimized for Next.js

## 📝 Component Documentation

### Button Component
```tsx
<Button variant="primary" size="lg">
  Get Started
</Button>
```
- Variants: `primary`, `secondary`, `outline`
- Sizes: `sm`, `md`, `lg`

### Card Component
```tsx
<Card>
  <h3>Title</h3>
  <p>Description</p>
</Card>
```

### ThemeToggle
```tsx
<ThemeToggle />
```
- Automatically syncs with system preference
- Smooth icon transitions

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspired by modern SaaS platforms
- Built with amazing tools from the React ecosystem
- Icons and fonts from Google and open source projects

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
