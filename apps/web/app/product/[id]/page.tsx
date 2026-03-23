import Link from 'next/link';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { getApiUrl } from '../../../config';

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  let product = null;
  try {
    const res = await fetch(`${getApiUrl()}/api/products/${id}`, { cache: 'no-store' });
    if (res.ok) {
      product = await res.json();
    }
  } catch (err) {
    console.error("API fetch error", err);
  }

  if (!product) return <div className="min-h-screen bg-[#0a0a0f] text-center p-20 text-neon-pink text-2xl animate-pulse font-bold">Failed to load product details from server...</div>;

  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white p-6 md:p-12">
      <Link href="/" className="text-neon-blue hover:text-neon-purple mb-10 inline-flex items-center group transition-colors font-semibold tracking-wide">
        <ArrowLeft className="mr-2 group-hover:-translate-x-2 transition-transform" /> BACK TO GALLERY
      </Link>
      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 mt-4">
        <div className="w-full lg:w-1/2 rounded-3xl overflow-hidden border-2 border-gray-800 hover:border-neon-purple shadow-[0_0_50px_rgba(181,55,242,0.15)] bg-black relative group transition-colors duration-500">
          <img src={product.images[0] || 'https://via.placeholder.com/600'} alt={product.name} className="w-full h-full aspect-square object-cover hover:scale-105 transition-transform duration-1000" />
          <div className="absolute top-6 right-6 bg-black/80 px-5 py-2 rounded-full border border-neon-purple text-neon-purple font-bold tracking-widest shadow-[0_0_15px_rgba(181,55,242,0.4)]">
            {product.animeSeries}
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="mb-3 text-neon-purple tracking-[0.2em] uppercase text-sm font-black drop-shadow-[0_0_8px_rgba(181,55,242,0.8)]">
            {product.rarity} EDITION
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight text-white">{product.name}</h1>
          
          <div className="text-5xl font-mono text-neon-green mb-8 drop-shadow-[0_0_12px_rgba(0,255,102,0.6)] font-black">
            ${parseFloat(product.price).toFixed(2)}
            {product.discountedPrice && product.discountedPrice < product.price && (
               <span className="ml-4 text-2xl text-gray-500 line-through drop-shadow-none">${parseFloat(product.discountedPrice).toFixed(2)}</span>
            )}
          </div>
          
          <p className="text-gray-300 text-xl mb-10 leading-relaxed font-light">
            {product.designNotes || 'Premium quality futuristic merch built for the true otaku. Featuring cyber-enhanced styling and unparalleled comfort.'}
          </p>

          <div className="mb-12">
            <h3 className="text-sm text-gray-500 tracking-widest uppercase font-bold mb-4">Select Size</h3>
            <div className="flex gap-4">
              {['S', 'M', 'L', 'XL'].map((size) => {
                const isAvailable = product.stock[size] > 0;
                return (
                  <button key={size} disabled={!isAvailable} className={`w-16 h-16 rounded-xl border-2 font-bold text-lg transition-all ${isAvailable ? 'border-gray-700 hover:border-neon-blue hover:text-neon-blue hover:shadow-[0_0_15px_rgba(0,243,255,0.4)] bg-[#111]' : 'border-gray-900 text-gray-700 opacity-40 cursor-not-allowed bg-black'}`}>
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          <button className="relative w-full py-5 rounded-2xl bg-black border-2 border-neon-pink text-neon-pink hover:text-white font-black text-2xl overflow-hidden group transition-colors duration-300">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-neon-purple to-neon-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 w-full h-full shadow-[0_0_40px_rgba(255,0,255,1)] animate-pulse opacity-80 mix-blend-screen"></div>
            <span className="relative z-10 flex items-center justify-center gap-3 drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">
              <ShoppingCart size={28} /> BUY NOW
            </span>
          </button>
        </div>
      </div>
    </main>
  );
}
