# Ayakkabi E-commerce

Bu proje, Supabase ve Stripe entegreli basit bir ayakkabı/terlik satış sitesidir. Next.js kullanılarak hazırlanmıştır.

## Başlangıç

Gerekli bağımlılıkları kurmak için:

```bash
npm install
```

Geliştirme sunucusunu çalıştırmak için:

```bash
npm run dev
```

## Ortam Değişkenleri

Supabase ve Stripe anahtarlarınızı aşağıdaki değişkenlerle `.env.local` dosyasında tanımlayın:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
STRIPE_SECRET_KEY=
```

## Yönetim Paneli

`/admin` adresinden ürünleri listeleyebilir ve yönetebilirsiniz.
