import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { supabase } from '../../../lib/supabaseClient';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2022-11-15',
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { productId } = req.body;
  const { data: product } = await supabase.from('products').select('*').eq('id', productId).single();

  if (!product) return res.status(404).json({ error: 'Product not found' });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'try',
          product_data: {
            name: product.name,
          },
          unit_amount: Math.round(product.price * 100),
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${req.headers.origin}/`,
    cancel_url: `${req.headers.origin}/products/${product.id}`,
  });

  res.status(200).json({ id: session.id });
}
