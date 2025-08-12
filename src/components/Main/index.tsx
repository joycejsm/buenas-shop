 import type { ReactNode } from 'react';
import './main.css';

interface MainProps {
    children: ReactNode;
}

export function Main({ children }: MainProps) {
  return (
    <main>
        {children}
    </main>
  );
}