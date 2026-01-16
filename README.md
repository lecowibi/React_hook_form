# React Hook Form Project

A modern React application built with TypeScript, Vite, Redux Toolkit, and React Hook Form for form management. This project demonstrates best practices for building scalable React applications with state management and form handling.

## Project Overview

This is a full-stack learning project that showcases:
- **Form Management** with React Hook Form
- **State Management** using Redux Toolkit
- **Routing** with React Router DOM
- **Styling** with Tailwind CSS
- **Type Safety** with TypeScript
- **API Communication** with Axios
- **Development Tools** including ESLint and Vite

## Features

- User authentication and login functionality
- Shopping cart management
- Product catalog
- Form validation with React Hook Form
- State persistence with Redux
- Responsive UI with Tailwind CSS
- TypeScript support for type safety

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- **Node.js** (v16.0.0 or higher)
- **npm** or **yarn** package manager
- **Git** (optional, for cloning the repository)

## Installation

### Step 1: Clone or Download the Project

```bash
# Clone the repository (if available)
git clone <repository-url>
cd React_hook_form

# Or navigate to the project directory if already downloaded
cd React_hook_form
```

### Step 2: Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### Step 3: Start the Development Server

```bash
npm run dev
```

Or with yarn:
```bash
yarn dev
```

The application will start on `http://localhost:5173` (or the next available port). Open your browser and navigate to this URL to see the application.

## Available Scripts

In the project directory, you can run:

### Development Server
```bash
npm run dev
```
Starts the Vite development server with Hot Module Replacement (HMR) for instant updates.

### Build for Production
```bash
npm run build
```
Compiles TypeScript and creates an optimized production build in the `dist` folder.

### Preview Production Build
```bash
npm run preview
```
Previews the production build locally before deployment.

### Lint Code
```bash
npm run lint
```
Runs ESLint to check code quality and identify issues.

## Project Structure

```
src/
├── app/
│   ├── hook.ts          # Custom Redux hooks
│   └── store.ts         # Redux store configuration
├── feature/
│   ├── auth/            # Authentication feature (slices)
│   │   ├── authSlice.ts
│   │   └── logSlice.ts
│   └── cart/            # Cart feature (slices)
│       ├── cartSlice.ts
│       └── productSlice.ts
├── Pages/               # Page components
│   ├── Home.tsx
│   ├── form.tsx
│   ├── logForm.tsx
│   ├── cart.tsx
│   └── AddCart.tsx
├── lib/
│   └── utils.ts         # Utility functions
├── App.tsx              # Root component
├── main.tsx             # Entry point
├── index.css            # Global styles
└── App.css              # App component styles
```

## Technologies Used

| Technology | Version | Purpose |
|---|---|---|
| **React** | ^19.2.0 | UI library |
| **TypeScript** | ~5.9.3 | Type safety |
| **Vite** | ^7.2.4 | Build tool & dev server |
| **Redux Toolkit** | ^2.11.2 | State management |
| **React Hook Form** | ^7.69.0 | Form management |
| **React Router DOM** | ^7.11.0 | Client-side routing |
| **Tailwind CSS** | ^4.1.18 | Utility-first CSS |
| **Axios** | ^1.13.2 | HTTP client |

## Configuration Files

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.js` - ESLint configuration
- `tailwind.config.js` - Tailwind CSS configuration (if present)
- `db.json` - Local database for mock API

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Port Already in Use
If port 5173 is already in use, Vite will automatically use the next available port.

### Dependencies Installation Issues
Clear the npm cache and reinstall:
```bash
npm cache clean --force
npm install
```

### TypeScript Errors
Ensure your TypeScript version is compatible:
```bash
npm install --save-dev typescript@~5.9.3
```

## Learning Resources

- [React Documentation](https://react.dev)
- [React Hook Form](https://react-hook-form.com)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [Vite Documentation](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com)

## License

This project is for educational purposes.

## Support

For issues or questions, please check the documentation of the respective libraries or consult the project repository.
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
