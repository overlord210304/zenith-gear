import Link from 'next/link';

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center p-8 text-center text-white relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-purple/20 via-[#0a0a0f] to-[#0a0a0f] z-0"></div>
      
      <div className="relative z-10 max-w-2xl mx-auto rounded-3xl border border-neon-blue/30 bg-black/60 backdrop-blur-md p-10 md:p-16 shadow-[0_0_50px_rgba(0,243,255,0.15)]">
        <div className="text-8xl mb-8 animate-bounce">🎌</div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-green to-neon-blue drop-shadow-[0_0_8px_rgba(0,255,102,0.4)]">
          VICTORY!
        </h1>
        <h2 className="text-2xl text-neon-pink font-bold mb-6 tracking-widest uppercase">
          Quest Completed Successfully
        </h2>
        <p className="text-lg text-gray-300 mb-10 leading-relaxed font-light">
          Your gear has been secured. The package is now being prepared for teleportation to your coordinates. Look out for the tracking spell in your inbox!
        </p>
        
        <Link href="/" className="inline-block py-4 px-10 rounded-xl bg-transparent border-2 border-neon-blue text-neon-blue font-black text-xl hover:bg-neon-blue hover:text-black hover:shadow-[0_0_30px_rgba(0,243,255,0.6)] transition-all duration-300 uppercase tracking-widest">
          Return to Guild
        </Link>
      </div>
    </main>
  );
}
