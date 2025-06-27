import { GetServerSideProps } from 'next';
import { supabase } from '../../lib/supabaseClient';
import { Product } from '../../types';

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await supabase.from('products').select('*');
  return { props: { products: data ?? [] } };
};

export default function AdminProducts({ products }: { products: Product[] }) {
  return (
    <div>
      <h1>Manage Products</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
