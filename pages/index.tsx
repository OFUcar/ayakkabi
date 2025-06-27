import { GetServerSideProps } from 'next';
import { supabase } from '../lib/supabaseClient';
import ProductItem from '../components/ProductItem';
import { Product } from '../types';

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await supabase.from('products').select('*');
  return { props: { products: data ?? [] } };
};

export default function Home({ products }: { products: Product[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
      {products.map((p) => (
        <ProductItem key={p.id} product={p} />
      ))}
    </div>
  );
}
