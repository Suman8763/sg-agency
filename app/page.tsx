import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e1e1e1] font-sans selection:bg-[#ccff00] selection:text-black overflow-x-hidden">
      
      {/* 
          CUSTOM CSS ANIMATIONS 
          (We inject this directly so you don't need to touch global css files)
      */}
      <style>{`
        @keyframes float {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes colorShift {
          0% { color: #ccff00; text-shadow: 0 0 10px rgba(204, 255, 0, 0.5); }
          25% { color: #00ffcc; text-shadow: 0 0 10px rgba(0, 255, 204, 0.5); }
          50% { color: #ff00ff; text-shadow: 0 0 10px rgba(255, 0, 255, 0.5); }
          75% { color: #ffff00; text-shadow: 0 0 10px rgba(255, 255, 0, 0.5); }
          100% { color: #ccff00; text-shadow: 0 0 10px rgba(204, 255, 0, 0.5); }
        }
        @keyframes dropBounce {
          0% { opacity: 0; transform: translateY(-100px); }
          60% { opacity: 1; transform: translateY(20px); }
          80% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        .animate-blob {
          animation: float 10s infinite ease-in-out;
        }
        .animate-letter {
          display: inline-block;
          animation: dropBounce 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards, colorShift 8s infinite linear;
          opacity: 0; /* Start hidden */
        }
      `}</style>

      {/* ABSTRACT LIVE BACKGROUND */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Orb 1 */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-600/20 rounded-full blur-[120px] animate-blob mix-blend-screen"></div>
        {/* Orb 2 */}
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-blue-600/20 rounded-full blur-[120px] animate-blob mix-blend-screen" style={{animationDelay: '2s'}}></div>
        {/* Orb 3 */}
        <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-[#ccff00]/10 rounded-full blur-[150px] animate-blob mix-blend-screen" style={{animationDelay: '4s'}}></div>
        {/* Grain overlay for texture */}
        <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}></div>
      </div>

      {/* HEADER */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference">
        <div>
          <span className="font-mono text-[10px] text-[#ccff00] tracking-[0.2em] block mb-1">AGENCY OS v3.0</span>
          <h1 className="text-xl font-black tracking-tighter leading-none text-white">GS DIGITAL</h1>
        </div>
        <a href="#contact" className="hidden md:flex items-center gap-2 px-6 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all group backdrop-blur-sm">
           <span className="text-xs font-bold uppercase tracking-widest">Start Project</span>
           <div className="w-2 h-2 bg-[#ccff00] rounded-full animate-pulse group-hover:bg-black"></div>
        </a>
      </nav>

      {/* MAIN HERO: Centered Kinetic Typography */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4">
        
        <div className="max-w-[1920px] w-full text-center">
          
          {/* ANIMATED HEADLINE: "BRAND ALCHEMY" */}
          <h1 className="text-[15vw] md:text-[12vw] leading-[0.85] font-black tracking-tighter uppercase mb-8">
            {/* We split the text into letters to animate each one */}
            <div className="block">
              {"BRAND".split("").map((char, i) => (
                <span key={i} className="animate-letter" style={{animationDelay: `${i * 0.1}s`}}>
                  {char}
                </span>
              ))}
            </div>
            <div className="block">
              {"ALCHEMY".split("").map((char, i) => (
                <span key={i} className="animate-letter" style={{animationDelay: `${0.5 + (i * 0.1)}s`}}>
                  {char}
                </span>
              ))}
            </div>
          </h1>

          <p className="font-mono text-[#ccff00] text-sm md:text-lg tracking-widest uppercase mb-12 animate-pulse">
             [ SCROLL TO INITIALIZE ]
          </p>
          
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-[#ccff00] to-transparent"></div>
        </div>

      </section>

      {/* STRATEGY SECTION (Editorial Grid) */}
      <section id="strategy" className="relative z-10 border-t border-white/10 bg-[#050505]">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          <div className="p-12 group hover:bg-white/5 transition-colors duration-500">
            <h3 className="text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 group-hover:from-[#ccff00] group-hover:to-emerald-500 transition-all">01.</h3>
            <h4 className="text-xl font-bold uppercase tracking-wide mb-4 text-white">Discovery</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              We strip away the noise. We analyze market gaps, competitor weaknesses, and behavioral data to find your winning angle.
            </p>
          </div>

          <div className="p-12 group hover:bg-white/5 transition-colors duration-500">
            <h3 className="text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 group-hover:from-[#ccff00] group-hover:to-emerald-500 transition-all">02.</h3>
            <h4 className="text-xl font-bold uppercase tracking-wide mb-4 text-white">Execution</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              High-velocity deployment. We launch AI-driven campaigns and automated workflows that nurture leads while you sleep.
            </p>
          </div>

          <div className="p-12 group hover:bg-white/5 transition-colors duration-500">
            <h3 className="text-6xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600 group-hover:from-[#ccff00] group-hover:to-emerald-500 transition-all">03.</h3>
            <h4 className="text-xl font-bold uppercase tracking-wide mb-4 text-white">Scale</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Data-driven optimization. We kill what loses money and double down on what generates revenue.
            </p>
          </div>

        </div>
      </section>

      {/* CAPABILITIES LIST */}
      <section className="relative z-10 py-32 px-6 md:px-12 border-t border-white/10 bg-[#080808]">
        <div className="max-w-[1920px] mx-auto">
          <h2 className="text-sm font-mono text-[#ccff00] mb-16 uppercase tracking-widest">// Capabilities</h2>
          
          <div className="space-y-0">
             {/* Service Row */}
            <div className="group py-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-[#ccff00] transition-all duration-300 cursor-pointer px-4 -mx-4">
              <h3 className="text-4xl md:text-7xl font-black uppercase text-white group-hover:text-black transition-colors">Strategy</h3>
              <p className="mt-4 md:mt-0 text-gray-500 group-hover:text-black font-mono text-sm max-w-sm">
                Brand Positioning • Go-To-Market • Market Analysis
              </p>
            </div>
             {/* Service Row */}
            <div className="group py-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-[#ccff00] transition-all duration-300 cursor-pointer px-4 -mx-4">
              <h3 className="text-4xl md:text-7xl font-black uppercase text-white group-hover:text-black transition-colors">Automation</h3>
              <p className="mt-4 md:mt-0 text-gray-500 group-hover:text-black font-mono text-sm max-w-sm">
                AI Agents • CRM Workflows • Lead Nurturing
              </p>
            </div>
             {/* Service Row */}
            <div className="group py-16 border-t border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-[#ccff00] transition-all duration-300 cursor-pointer px-4 -mx-4">
              <h3 className="text-4xl md:text-7xl font-black uppercase text-white group-hover:text-black transition-colors">Growth</h3>
              <p className="mt-4 md:mt-0 text-gray-500 group-hover:text-black font-mono text-sm max-w-sm">
                Paid Ads • SEO • Conversion Optimization
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="relative z-10 py-32 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-6xl md:text-8xl font-black uppercase leading-none mb-6">Start<br/>Project</h2>
            <p className="text-gray-400 text-xl">We select 3 new partners per month.</p>
          </div>

          <form action="PASTE_YOUR_FORMSPREE_LINK_HERE" method="POST" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-mono text-[#ccff00] uppercase">01 / Name</label>
                <input required name="name" type="text" className="w-full bg-[#111] border border-white/10 p-6 text-white font-bold focus:outline-none focus:border-[#ccff00] transition-colors" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono text-[#ccff00] uppercase">02 / Email</label>
                <input required name="email" type="email" className="w-full bg-[#111] border border-white/10 p-6 text-white font-bold focus:outline-none focus:border-[#ccff00] transition-colors" placeholder="email@company.com" />
              </div>
            </div>
            
            <div className="space-y-2">
               <label className="text-xs font-mono text-[#ccff00] uppercase">03 / The Goal</label>
               <textarea required name="message" rows={4} className="w-full bg-[#111] border border-white/10 p-6 text-white font-bold focus:outline-none focus:border-[#ccff00] transition-colors resize-none" placeholder="What are we building?"></textarea>
            </div>

            <button type="submit" className="w-full py-6 bg-[#ccff00] text-black font-black uppercase tracking-widest hover:bg-white transition-colors text-xl">
              Initiate Launch
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-black py-8 px-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-gray-600 uppercase">
        <p>GS Digital Systems © 2026</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
          <a href="#" className="hover:text-white">Twitter</a>
        </div>
      </footer>

    </div>
  );
}