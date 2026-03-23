import Link from 'next/link';

export default async function Page() {
  console.log('API URL:', process.env.NEXT_PUBLIC_API_URL);
  
  let products = [];
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, { cache: 'no-store' });
    if (res.ok) {
      products = await res.json();
    }
  } catch (err) {
    console.error("API Fetch Error:", err);
  }

  return (
    <main className="min-h-screen p-8 bg-[#0a0a0f] text-white">
      <h1 className="text-6xl font-black mb-16 text-center tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink mt-10 filter drop-shadow-[0_0_15px_rgba(181,55,242,0.6)]">
        ZENITH GEAR
      </h1>
      
      {products.length === 0 ? (
        <div className="text-center text-gray-500 mt-20">Loading products from cloud...<br/>(Make sure the API server is running on port 5000 with Atlas connected!)</div>
      ) : (
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product: any) => (
            <div key={product._id} className="relative group rounded-2xl bg-[#0f0f15] border border-gray-800 hover:border-neon-blue transition-all duration-300 overflow-hidden shadow-[0_0_0_rgba(0,243,255,0)] hover:shadow-[0_0_25px_rgba(0,243,255,0.3)] hover:-translate-y-2">
              <div className="h-72 w-full bg-black relative overflow-hidden">
                <img src={product.images[0] || 'https://via.placeholder.com/400'} alt={product.name} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-neon-pink border border-neon-pink/40 tracking-wider shadow-[0_0_10px_rgba(255,0,255,0.4)]">
                  {product.animeSeries}
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3 truncate hover:whitespace-normal">{product.name}</h2>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-2xl text-neon-green font-mono tracking-tighter drop-shadow-[0_0_8px_rgba(0,255,102,0.4)]">${parseFloat(product.price).toFixed(2)}</span>
                  <span className="text-xs font-semibold text-gray-400 tracking-widest uppercase">{product.rarity}</span>
                </div>
                
                <Link href={`/product/${product._id}`} className="block w-full text-center py-3.5 bg-transparent border border-neon-blue text-neon-blue rounded-xl font-bold hover:bg-neon-blue hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,243,255,0.5)]">
                  VIEW DETAILS
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
