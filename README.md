# FlowBeam - AI Automation Agency

A modern, responsive website for FlowBeam, an AI automation agency that helps businesses transform through intelligent automation solutions.

## Features

- **Modern Design**: Clean, professional design inspired by leading AI companies
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Animations**: Lottie animations for engaging user experience
- **ShadCN UI Components**: Beautiful, accessible UI components
- **Contact Form**: Comprehensive lead capture form
- **SEO Optimized**: Meta tags and structured data for search engines

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom gradients
- **UI Components**: ShadCN UI (Radix UI primitives)
- **Animations**: Lottie React for motion graphics
- **Typography**: Inter font family
- **Icons**: Lucide React

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── LottieAnimation.tsx
│   └── Services.tsx
└── lib/
    └── utils.ts
```

## Customization

### Colors and Branding
- Update gradient colors in `globals.css`
- Modify the color scheme in `tailwind.config.ts`
- Replace logo and branding in components

### Content
- Update company information in components
- Modify service offerings in `Services.tsx`
- Customize contact form fields in `ContactForm.tsx`

### Animations
- Replace Lottie animation URLs in `LottieAnimation.tsx`
- Add new animations from LottieFiles

## Deployment

The project is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any platform supporting Node.js

## License

This project is licensed under the MIT License.
