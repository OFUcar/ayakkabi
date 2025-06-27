import Image from 'next/image';
import { Product } from '../types';
import Link from 'next/link';

export default function ProductItem({ product }: { product: Product }) {
  return (
    <div style={{ border: '1px solid #eee', padding: '1rem' }}>
      <Link href={`/products/${product.id}`}>{product.name}</Link>
      <div>
        <Image src={product.image_url} alt={product.name} width={200} height={200} />
      </div>
      <p>{product.price.toFixed(2)} TL</p>
    </div>
  );
}
