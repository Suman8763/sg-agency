import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e1e1e1] font-sans selection:bg-[#ccff00] selection:text-black overflow-x-hidden">
      
      {/* BACKGROUND NOISE TEXTURE (The "Expensive" Feel) */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}>
      </div>

      {/* HEADER: 4-Corner Navigation (Very Modern) */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 mix-blend-difference flex justify-between items-start pointer-events-none">
        <div className="pointer-events-auto">
          <span className="font-mono text-xs text-[#ccff00] tracking-widest block mb-1">AGENCY OS v2.0</span>
          <h1 className="text-2xl font-black tracking-tighter leading-none">GS<br/>DIGITAL</h1>
        </div>
        
        <div className="hidden md:flex gap-12 pointer-events-auto bg-[#050505]/80 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
          <Link href="#capabilities" className="text-xs font-bold uppercase tracking-widest hover:text-[#ccff00] transition-colors">Capabilities</Link>
          <Link href="#strategy" className="text-xs font-bold uppercase tracking-widest hover:text-[#ccff00] transition-colors">Strategy</Link>
          <Link href="#contact" className="text-xs font-bold uppercase tracking-widest hover:text-[#ccff00] transition-colors">Contact</Link>
        </div>

        <div className="pointer-events-auto">
           <a href="#contact" className="group relative flex items-center gap-3 overflow-hidden">
             <span className="text-sm font-bold uppercase tracking-wider group-hover:translate-x-2 transition-transform">Start Project</span>
             <div className="w-2 h-2 bg-[#ccff00] rounded-full animate-pulse"></div>
           </a>
        </div>
      </nav>

      {/* HERO SECTION: Editorial Layout */}
      <section className="relative z-10 pt-40 pb-20 px-4 md:px-12 border-b border-white/10">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left Column: The Manifesto */}
            <div className="col-span-12 md:col-span-8">
              <h1 className="text-[13vw] md:text-[8vw] leading-[0.85] font-black tracking-tighter uppercase mb-12">
                Brand <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-emerald-500">Alchemy</span> <br/>
                & Scale.
              </h1>
              <div className="flex flex-col md:flex-row gap-8 md:gap-20 items-start border-t border-white/10 pt-8">
                <p className="font-mono text-xs text-[#ccff00] uppercase tracking-widest max-w-[150px]">
                  // The Mission
                </p>
                <p className="text-xl md:text-2xl leading-relaxed max-w-2xl text-neutral-300">
                  We are not a traditional agency. We are a strategic growth partner for ambitious brands. We fuse behavioral data with high-end aesthetics to build systems that dominate markets.
                </p>
              </div>
            </div>

            {/* Right Column: The Visual Hook */}
            <div className="col-span-12 md:col-span-4 flex flex-col justify-end">
               <div className="relative aspect-square w-full overflow-hidden border border-white/10 group">
                 <div className="absolute inset-0 bg-[#ccff00]/10 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                 <img src="https://images.unsplash.com/photo-1485627941502-d2e6429fa8af?q=80&w=2672&auto=format&fit=crop" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-700" alt="Strategy" />
                 
                 <div className="absolute bottom-4 left-4 z-20">
                   <p className="font-mono text-xs bg-black text-[#ccff00] px-2 py-1">FIGURE 01.1</p>
                 </div>
               </div>
               <div className="mt-4 flex justify-between items-end">
                 <div className="font-mono text-xs text-neutral-500">
                   SCROLL FOR DATA<br/>↓
                 </div>
                 <a href="#contact" className="w-12 h-12 border border-[#ccff00] rounded-full flex items-center justify-center hover:bg-[#ccff00] hover:text-black transition-all">
                   ▼
                 </a>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* STRATEGY GRID: High Content Density (Stormbrain Style) */}
      <section id="strategy" className="relative z-10 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          {/* Box 1 */}
          <div className="p-8 md:p-12 hover:bg-white/5 transition-colors group h-full">
            <div className="font-mono text-xs text-[#ccff00] mb-32 group-hover:mb-4 transition-all duration-500">01 / DISCOVERY</div>
            <h3 className="text-3xl font-bold mb-4">Radical Clarity.</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              We don't guess. We audit your entire digital footprint, analyze competitor weaknesses, and identify the "Blue Ocean" opportunity in your niche.
            </p>
          </div>

          {/* Box 2 */}
          <div className="p-8 md:p-12 hover:bg-white/5 transition-colors group h-full">
            <div className="font-mono text-xs text-[#ccff00] mb-32 group-hover:mb-4 transition-all duration-500">02 / ARCHITECTURE</div>
            <h3 className="text-3xl font-bold mb-4">System Design.</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Building the funnel. We architect the user journey, design the automation workflows, and set up the tracking infrastructure.
            </p>
          </div>

          {/* Box 3 */}
          <div className="p-8 md:p-12 hover:bg-white/5 transition-colors group h-full">
            <div className="font-mono text-xs text-[#ccff00] mb-32 group-hover:mb-4 transition-all duration-500">03 / EXECUTION</div>
            <h3 className="text-3xl font-bold mb-4">High Velocity.</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Launching ads, deploying content, and activating the AI agents. We move fast to gather data and validate the strategy.
            </p>
          </div>

           {/* Box 4 */}
           <div className="p-8 md:p-12 hover:bg-white/5 transition-colors group h-full">
            <div className="font-mono text-xs text-[#ccff00] mb-32 group-hover:mb-4 transition-all duration-500">04 / OPTIMIZATION</div>
            <h3 className="text-3xl font-bold mb-4">Profit Scale.</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              We kill what loses money. We double what makes money. Continuous A/B testing until we hit the ROAS (Return on Ad Spend) target.
            </p>
          </div>

        </div>
      </section>

      {/* CAPABILITIES SECTION: The "What We Do" List */}
      <section id="capabilities" className="relative z-10 py-32 px-4 md:px-12 border-b border-white/10 bg-[#080808]">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            
            {/* Title */}
            <div className="col-span-12 md:col-span-4">
              <h2 className="text-6xl font-black tracking-tighter uppercase sticky top-32">
                Capabilities<span className="text-[#ccff00]">.</span>
              </h2>
            </div>

            {/* The List */}
            <div className="col-span-12 md:col-span-8 space-y-20">
              
              {/* Category 1 */}
              <div className="group">
                <h3 className="text-2xl font-mono text-[#ccff00] mb-8 uppercase border-b border-white/10 pb-4">Strategy & Consulting</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-3xl font-bold mb-4">Brand Positioning</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Defining your voice, your visual identity, and exactly why customers should choose you over competitors.</p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold mb-4">Go-To-Market</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">A step-by-step playbook on how to launch your product or service to a new audience.</p>
                  </div>
                </div>
              </div>

               {/* Category 2 */}
               <div className="group">
                <h3 className="text-2xl font-mono text-[#ccff00] mb-8 uppercase border-b border-white/10 pb-4">Digital Experience</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-3xl font-bold mb-4">Web Development</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Next.js & React based platforms. Lightning fast, SEO optimized, and designed to convert traffic into leads.</p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold mb-4">Automation Engineering</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Zapier, Make.com, and Custom AI Agents that handle customer service and lead nurturing 24/7.</p>
                  </div>
                </div>
              </div>

               {/* Category 3 */}
               <div className="group">
                <h3 className="text-2xl font-mono text-[#ccff00] mb-8 uppercase border-b border-white/10 pb-4">Performance</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-3xl font-bold mb-4">Paid Acquisition</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">Meta (Facebook/Instagram) and Google Ads management focusing purely on CPA (Cost Per Acquisition).</p>
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold mb-4">Content Production</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">High-fidelity video and static assets designed specifically to stop the scroll on social media.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FORM SECTION: Brutalist & Direct */}
      <section id="contact" className="relative z-10 grid grid-cols-1 md:grid-cols-2 min-h-screen">
        
        {/* Left: The Statement */}
        <div className="bg-[#ccff00] text-black p-12 md:p-24 flex flex-col justify-between">
          <div>
            <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] mb-8">
              Let's<br/>Talk<br/>Numbers.
            </h2>
            <p className="text-2xl font-bold max-w-md">
              We only partner with 3 new clients per month to maintain elite standards.
            </p>
          </div>
          <div className="space-y-2 font-mono text-sm mt-12 border-t border-black/20 pt-8">
             <p>INQUIRIES:</p>
             <p className="text-xl font-bold">HELLO@GSDIGITAL.COM</p>
          </div>
        </div>

        {/* Right: The Form */}
        <div className="bg-[#050505] p-12 md:p-24 flex flex-col justify-center border-l border-white/10">
           {/* 
                ⚠️ PASTE YOUR FORMSPREE LINK IN THE ACTION BELOW 
            */}
            <form action="PASTE_YOUR_FORMSPREE_LINK_HERE" method="POST" className="space-y-12">
              
              <div className="group relative">
                <input required name="name" type="text" className="w-full bg-transparent border-b border-white/20 py-4 text-2xl font-bold focus:outline-none focus:border-[#ccff00] transition-colors placeholder-transparent" placeholder="Name" id="name" />
                <label htmlFor="name" className="absolute left-0 top-0 text-gray-500 text-xs font-mono uppercase transition-all group-focus-within:-top-6 group-focus-within:text-[#ccff00]">01 // What is your name?</label>
              </div>

              <div className="group relative">
                <input required name="email" type="email" className="w-full bg-transparent border-b border-white/20 py-4 text-2xl font-bold focus:outline-none focus:border-[#ccff00] transition-colors placeholder-transparent" placeholder="Email" id="email" />
                <label htmlFor="email" className="absolute left-0 top-0 text-gray-500 text-xs font-mono uppercase transition-all group-focus-within:-top-6 group-focus-within:text-[#ccff00]">02 // Where can we email you?</label>
              </div>

              <div className="group relative">
                <input required name="company" type="text" className="w-full bg-transparent border-b border-white/20 py-4 text-2xl font-bold focus:outline-none focus:border-[#ccff00] transition-colors placeholder-transparent" placeholder="Company" id="company" />
                <label htmlFor="company" className="absolute left-0 top-0 text-gray-500 text-xs font-mono uppercase transition-all group-focus-within:-top-6 group-focus-within:text-[#ccff00]">03 // Company / Website URL</label>
              </div>

               <div className="group relative">
                <textarea required name="message" rows={2} className="w-full bg-transparent border-b border-white/20 py-4 text-2xl font-bold focus:outline-none focus:border-[#ccff00] transition-colors placeholder-transparent resize-none" placeholder="Message" id="message"></textarea>
                <label htmlFor="message" className="absolute left-0 top-0 text-gray-500 text-xs font-mono uppercase transition-all group-focus-within:-top-6 group-focus-within:text-[#ccff00]">04 // Tell us about the project</label>
              </div>

              <button type="submit" className="w-full py-6 bg-white text-black font-black uppercase tracking-widest hover:bg-[#ccff00] transition-colors mt-8 text-xl">
                Submit Application
              </button>
            </form>
        </div>

      </section>

      <footer className="bg-black py-6 px-12 border-t border-white/10 flex justify-between items-center text-[10px] text-gray-600 font-mono uppercase tracking-widest">
        <span>GS Digital Systems © 2026</span>
        <span>Mumbai / Global</span>
        <span>Privacy Protocol</span>
      </footer>

    </div>
  );
}