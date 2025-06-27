import Link from 'next/link';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header style={{ padding: '1rem', borderBottom: '1px solid #ddd' }}>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <Link href="/">Home</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/admin">Admin</Link>
        </nav>
      </header>
      <main style={{ padding: '1rem' }}>{children}</main>
    </div>
  );
}
