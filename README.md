
Here’s how you can structure a TypeScript React project with file names for a context implementation. This structure helps keep things modular and organized.

File Structure
css
Copy code
src/
├── contexts/
│   ├── ThemeContext.tsx
├── hooks/
│   ├── useTheme.ts
├── components/
│   ├── ThemeSwitcher.tsx
├── App.tsx
├── main.tsx
Implementation in Files
1. ThemeContext.tsx (in src/contexts/)
   This file defines the context and the provider.

typescript
Copy code
import React, { createContext, useState, ReactNode } from 'react';

interface ThemeContextType {
theme: string;
setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
const [theme, setTheme] = useState<string>('light');

return (
<ThemeContext.Provider value={{ theme, setTheme }}>
{children}
</ThemeContext.Provider>
);
};

export default ThemeContext;
2. useTheme.ts (in src/hooks/)
   This custom hook simplifies accessing the context.

typescript
Copy code
import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

export function useTheme() {
const context = useContext(ThemeContext);
if (!context) {
throw new Error('useTheme must be used within a ThemeProvider');
}
return context;
}
3. ThemeSwitcher.tsx (in src/components/)
   A component that uses the custom hook to toggle the theme.

typescript
Copy code
import React from 'react';
import { useTheme } from '../hooks/useTheme';

const ThemeSwitcher: React.FC = () => {
const { theme, setTheme } = useTheme();

return (
<div>
<p>Current Theme: {theme}</p>
<button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
Toggle Theme
</button>
</div>
);
};

export default ThemeSwitcher;
4. App.tsx (in src/)
   Wrap the application in the ThemeProvider.

typescript
Copy code
import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';

const App: React.FC = () => {
return (
<ThemeProvider>
<ThemeSwitcher />
</ThemeProvider>
);
};

export default App;
5. main.tsx (in src/)
   Render the application.

typescript
Copy code
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
<React.StrictMode>
<App />
</React.StrictMode>
);
Benefits of This File Structure
Separation of Concerns:

ThemeContext.tsx focuses on context creation and the provider.
useTheme.ts encapsulates the logic for using the context.
Components like ThemeSwitcher remain focused on UI and behavior.
Reusability:

The custom hook (useTheme) and context can be easily reused in other components.
Scalability:

Adding more contexts (e.g., UserContext, AuthContext) becomes straightforward by following a similar pattern.