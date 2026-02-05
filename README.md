# PhySim - AP Physics & Calculus Calculator

PhySim is a client‑side Next.js web app that combines an advanced symbolic calculator and interactive visualizations to help students master AP Physics and AP Calculus through step‑by‑step, human‑readable solutions.

## Features

- ✨ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** for styling
- �� **Math.js** for symbolic computation
- 💾 **localStorage** for session persistence
- ⚡ **Client-side only** math logic
- 🔒 **Strict TypeScript** configuration
- 🧪 **ESLint** and **Prettier** for code quality
- 🚀 **GitHub Actions** CI/CD pipeline
- 📦 **Vercel** deployment ready

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **Math Engine:** Math.js
- **State Management:** React Hooks + localStorage
- **Code Quality:** ESLint, Prettier
- **CI/CD:** GitHub Actions
- **Deployment:** Vercel

## Project Structure

```
├── app/
│   ├── (calculator)/          # Calculator route group
│   │   └── calculator/        # Calculator page
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Home page (redirects to calculator)
│   └── globals.css            # Global styles
├── components/
│   ├── calculator/            # Calculator-specific components
│   │   ├── CalculatorButtons.tsx
│   │   ├── CalculatorDisplay.tsx
│   │   └── MathInput.tsx
│   └── ui/                    # Reusable UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Input.tsx
├── lib/
│   └── math/                  # Math utilities
│       ├── mathEngine.ts      # Math.js wrapper
│       └── sessionStorage.ts  # localStorage utilities
├── .github/
│   └── workflows/
│       └── ci.yml             # CI/CD pipeline
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
├── .eslintrc.json             # ESLint configuration
├── .prettierrc                # Prettier configuration
└── vercel.json                # Vercel deployment config
```

## Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/JeriahNeal1/miniature-waddle.git
cd miniature-waddle
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript type checking
- `npm test` - Run tests

## Features in Detail

### Calculator

The calculator supports:
- Basic arithmetic: `+`, `-`, `*`, `/`, `^`
- Functions: `sqrt()`, `sin()`, `cos()`, `tan()`, `log()`, `ln()`, `abs()`
- Constants: `pi`, `e`
- Complex expressions with parentheses
- History tracking with localStorage persistence

### Session Storage

Calculations are automatically saved to localStorage and persist across browser sessions. The history can be cleared using the "Clear History" button.

### Code Quality

- **Strict TypeScript:** All code uses strict type checking
- **ESLint:** Configured with Next.js, TypeScript, and Prettier rules
- **Prettier:** Consistent code formatting across the project
- **Pre-commit hooks:** Can be added for automatic linting and formatting

### CI/CD

GitHub Actions workflow runs on every push and pull request:
1. **Lint:** ESLint checks
2. **Type Check:** TypeScript validation
3. **Test:** Jest tests (placeholder)
4. **Build:** Production build verification

### Deployment

The app is configured for Vercel deployment:
- Zero-config deployment
- Automatic HTTPS
- Edge network distribution
- Preview deployments for PRs

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

MIT
