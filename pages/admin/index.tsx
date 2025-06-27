import Link from 'next/link';

export default function AdminHome() {
  return (
    <div>
      <h1>Admin Panel</h1>
      <ul>
        <li>
          <Link href="/admin/products">Manage Products</Link>
        </li>
      </ul>
    </div>
  );
}
