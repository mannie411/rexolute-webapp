import { ReactNode } from 'react';
import Header from '../ui/Header';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      {/* <Footer /> Uncomment when you implement footer */}
    </div>
  );
}