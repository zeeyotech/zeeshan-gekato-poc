import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {ThemeProvider} from "next-themes";
import {TooltipProvider} from "@radix-ui/react-tooltip";
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ThemeProvider defaultTheme="light" enableSystem={false} attribute="class">
          <TooltipProvider>
              <App/>
          </TooltipProvider>
      </ThemeProvider>
  </StrictMode>
);
