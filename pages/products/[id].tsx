import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { supabase } from '../../lib/supabaseClient';
import { Product } from '../../types';

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await supabase.from('products').select('*').eq('id', id).single();
  return { props: { product: data } };
};

export default function ProductDetail({ product }: { product: Product }) {
  if (!product) return <div>Product not found</div>;
  return (
    <div>
      <h1>{product.name}</h1>
      <Image src={product.image_url} alt={product.name} width={300} height={300} />
      <p>{product.description}</p>
      <p>{product.price.toFixed(2)} TL</p>
      <form action="/api/stripe/session" method="POST">
        <input type="hidden" name="productId" value={product.id} />
        <button type="submit">Buy</button>
      </form>
    </div>
  );
}
