# React 19 + TypeScript 7 + Vite 7 + Tailwind CSS 4 + ShadCN + API + Routing Structure

This is a **modern React project structure** designed for scalability, API consumption, router management, and UI consistency using **ShadCN**, **Radix**, and **Tailwind CSS 4**.

---

## 📁 Folder Structure

```
react-app/
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── postcss.config.cjs
├── tailwind.config.cjs
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
│
├── public/
│   ├── favicon.ico
│   ├── logo.svg
│   └── manifest.json
│
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   │
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   ├── fonts/
│   │   └── illustrations/
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── typography.css
│   │   ├── variables.css
│   │   └── animations.css
│   │
│   ├── layouts/
│   │   ├── MainLayout.tsx         ← Navbar + Sidebar + Content + Footer
│   │   ├── AuthLayout.tsx         ← For login/register pages
│   │   └── MinimalLayout.tsx      ← For lightweight public pages
│   │
│   ├── components/
│   │   ├── ui/                    ← ShadCN auto-generated components
│   │   ├── layout/                ← Reusable layout components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── RightSidebar.tsx
│   │   │   └── Footer.tsx
│   │   ├── shared/                ← Common elements (modals, loaders, toasts)
│   │   │   ├── Loader.tsx
│   │   │   ├── Modal.tsx
│   │   │   └── EmptyState.tsx
│   │   └── forms/                 ← Generic form components
│   │       ├── InputField.tsx
│   │       ├── SelectBox.tsx
│   │       └── PasswordField.tsx
│   │
│   ├── pages/                     ← Static or simple pages
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   │
│   ├── features/                  ← Grouped domain-specific modules
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   │   ├── Login.tsx
│   │   │   │   ├── Register.tsx
│   │   │   │   └── ForgotPassword.tsx
│   │   │   ├── hooks/
│   │   │   │   └── useAuth.ts
│   │   │   ├── api/
│   │   │   │   └── auth.api.ts
│   │   │   └── store.ts
│   │   │
│   │   ├── dashboard/
│   │   │   ├── pages/
│   │   │   │   └── Dashboard.tsx
│   │   │   ├── components/
│   │   │   └── api/
│   │   │       └── dashboard.api.ts
│   │   │
│   │   ├── profile/
│   │   │   ├── pages/
│   │   │   │   └── Profile.tsx
│   │   │   ├── components/
│   │   │   └── api/
│   │   │       └── profile.api.ts
│   │   │
│   │   └── settings/
│   │       ├── pages/
│   │       │   └── Settings.tsx
│   │       └── api/
│   │           └── settings.api.ts
│   │
│   ├── routes/
│   │   ├── index.tsx              ← Centralized route config
│   │   ├── ProtectedRoute.tsx
│   │   └── GuestRoute.tsx
│   │
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   ├── useFetch.ts
│   │   ├── useDebounce.ts
│   │   ├── useLocalStorage.ts
│   │   └── useModal.ts
│   │
│   ├── lib/
│   │   ├── axios.ts               ← Axios instance setup
│   │   ├── api.ts                 ← Helpers for API (error handler, token)
│   │   ├── constants.ts           ← Global constants
│   │   ├── env.ts                 ← Environment variable loader
│   │   ├── utils.ts               ← Utility re-exports (cn, merge)
│   │   └── shadcn-theme.ts        ← Custom ShadCN theme config
│   │
│   ├── store/
│   │   ├── useAuthStore.ts
│   │   ├── useUIStore.ts
│   │   ├── useThemeStore.ts
│   │   └── index.ts
│   │
│   ├── utils/
│   │   ├── helpers.ts
│   │   ├── validators.ts
│   │   ├── formatters.ts
│   │   ├── date.ts
│   │   ├── storage.ts
│   │   └── logger.ts
│   │
│   ├── types/
│   │   ├── user.ts
│   │   ├── api.ts
│   │   ├── auth.ts
│   │   ├── env.d.ts
│   │   └── index.ts
│   │
│   └── config/
│       ├── app.config.ts          ← App-level settings
│       ├── theme.config.ts        ← Light/Dark/Custom theme configs
│       └── navigation.config.ts   ← Menu and route metadata
│
└── README.md
```

---

## ⚙️ Core Configuration Files

### **vite.config.ts**

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    open: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
```

### **tailwind.config.cjs**

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-animate')],
};
```

### **tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": false,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

---

## 🔗 Routing Example (src/routes/index.tsx)

```tsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from '@/App';
import Login from '@/features/auth/pages/Login';
import Dashboard from '@/features/dashboard/pages/Dashboard';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <App>
                <Dashboard />
              </App>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
```

### **ProtectedRoute.tsx**

```tsx
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '@/store/useAuthStore';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { token } = useAuthStore();
  return token ? <>{children}</> : <Navigate to="/login" replace />;
}
```

---

## 🔐 Axios API Setup (src/lib/axios.ts)

```ts
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api',
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
```

---

## 🧱 Example Component (src/components/ui/Button.tsx)

```tsx
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-primary/90',
        outline: 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 px-3',
        lg: 'h-10 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
```

---

## 🧩 Example Store (Zustand)

```ts
import { create } from 'zustand';

interface AuthState {
  token: string | null;
  user: any;
  setToken: (token: string | null) => void;
  setUser: (user: any) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem('token'),
  user: null,
  setToken: (token) => {
    if (token) localStorage.setItem('token', token);
    else localStorage.removeItem('token');
    set({ token });
  },
  setUser: (user) => set({ user }),
}));
```

---

## 🌐 API Consumption Example

```ts
import api from '@/lib/axios';

export const getUserProfile = async () => {
  const { data } = await api.get('/user/profile');
  return data;
};
```

---

## 🧭 Main Entry (src/main.tsx)

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './routes';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
```

---

## ✅ Next Steps

1. Run `npm install`.
2. Generate ShadCN components:

   ```bash
   npx shadcn@latest init
   npx shadcn@latest add button card input dialog
   ```
3. Create `.env` file with:

   ```env
   VITE_API_BASE_URL=http://localhost:8000/api
   ```
4. Run the dev server:

   ```bash
   npm run dev
   ```

