import { ReactNode } from 'react';
import Header from '../ui/Header';
import Footer from '../ui/Footer';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer /> 
    </div>
  );
}