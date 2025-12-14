import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-400 selection:text-black">
      
      {/* Navbar - Minimal & Sticky */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 mix-blend-difference">
        <div className="max-w-[1800px] mx-auto px-6 h-24 flex items-center justify-between">
          <div className="text-3xl font-black tracking-tighter uppercase">
            SG Agency.
          </div>
          <div className="hidden md:flex gap-12 text-sm font-bold tracking-widest uppercase">
            <Link href="#work" className="hover:text-yellow-400 transition-colors">Work</Link>
            <Link href="#services" className="hover:text-yellow-400 transition-colors">Expertise</Link>
            <Link href="#contact" className="hover:text-yellow-400 transition-colors">Contact</Link>
          </div>
          <a href="#contact" className="px-8 py-3 bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-yellow-400 transition-all">
            Let's Talk
          </a>
        </div>
      </nav>

      {/* Hero Section - MASSIVE TYPOGRAPHY (Langoor Style) */}
      <section className="relative pt-48 pb-24 px-6 min-h-[90vh] flex flex-col justify-center border-b border-white/10">
        <div className="max-w-[1800px] mx-auto w-full">
          <h1 className="text-[12vw] leading-[0.8] font-black tracking-tighter uppercase mix-blend-overlay opacity-80">
            Digital
          </h1>
          <h1 className="text-[12vw] leading-[0.8] font-black tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
            Unleashed
          </h1>
          
          <div className="mt-12 flex flex-col md:flex-row justify-between items-end gap-8">
            <p className="max-w-xl text-xl md:text-2xl text-gray-400 font-medium leading-relaxed">
              We are the anti-boring agency. We build digital experiences that provoke, engage, and convert.
            </p>
            
            {/* Scroll Down Indicator */}
            <div className="animate-bounce">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Client Section (The Moving Line) */}
      <section className="py-12 bg-yellow-400 text-black overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee">
          <span className="text-4xl font-black mx-8 uppercase">STRATEGY • GROWTH • ROI • MARKETING • </span>
          <span className="text-4xl font-black mx-8 uppercase">STRATEGY • GROWTH • ROI • MARKETING • </span>
        </div>
      </section>

      {/* WORK GRID (The Visual Portfolio) */}
      <section id="work" className="border-b border-white/10">
        <div className="grid md:grid-cols-2">
          
          {/* Project 1 */}
          <div className="group relative h-[600px] border-r border-b border-white/10 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1481487484168-9b930d5b7960?q=80&w=2670&auto=format&fit=crop" 
              alt="Project 1"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
            />
            <div className="absolute bottom-0 left-0 p-12 w-full bg-gradient-to-t from-black via-black/50 to-transparent">
              <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">Tech Brand</p>
              <h3 className="text-4xl font-black uppercase">Dataflow Systems</h3>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group relative h-[600px] border-b border-white/10 overflow-hidden">
             <img 
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop" 
              alt="Project 2"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
            />
            <div className="absolute bottom-0 left-0 p-12 w-full bg-gradient-to-t from-black via-black/50 to-transparent">
              <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">E-Commerce</p>
              <h3 className="text-4xl font-black uppercase">Neon Fashion</h3>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group relative h-[600px] border-r border-white/10 overflow-hidden">
             <img 
              src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2701&auto=format&fit=crop" 
              alt="Project 3"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
            />
            <div className="absolute bottom-0 left-0 p-12 w-full bg-gradient-to-t from-black via-black/50 to-transparent">
              <p className="text-yellow-400 text-xs font-bold tracking-widest uppercase mb-2">FinTech</p>
              <h3 className="text-4xl font-black uppercase">Vault App</h3>
            </div>
          </div>

          {/* Project 4 - Text Block */}
          <div className="group relative h-[600px] bg-zinc-900 flex flex-col justify-center p-12">
            <h3 className="text-5xl font-black uppercase mb-6 leading-tight">
              We don't just <br /> make ads. <br /> We make <span className="text-yellow-400">Culture.</span>
            </h3>
            <a href="#contact" className="inline-flex items-center gap-4 text-xl font-bold uppercase tracking-widest hover:text-yellow-400 transition-colors">
              Start Project <span className="text-3xl">→</span>
            </a>
          </div>

        </div>
      </section>

      {/* Services List (Clean & Big) */}
      <section id="services" className="py-32 px-6 max-w-[1800px] mx-auto">
        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-16">Our Expertise</h2>
        
        <div className="space-y-0">
          {/* Service Item 1 */}
          <div className="group py-12 border-t border-b border-white/10 flex flex-col md:flex-row justify-between items-center hover:bg-white hover:text-black transition-all duration-300 cursor-pointer px-4">
            <h3 className="text-4xl md:text-6xl font-black uppercase">Brand Strategy</h3>
            <span className="text-lg font-mono mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity">01</span>
          </div>
           {/* Service Item 2 */}
           <div className="group py-12 border-b border-white/10 flex flex-col md:flex-row justify-between items-center hover:bg-white hover:text-black transition-all duration-300 cursor-pointer px-4">
            <h3 className="text-4xl md:text-6xl font-black uppercase">Performance Marketing</h3>
            <span className="text-lg font-mono mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity">02</span>
          </div>
           {/* Service Item 3 */}
           <div className="group py-12 border-b border-white/10 flex flex-col md:flex-row justify-between items-center hover:bg-white hover:text-black transition-all duration-300 cursor-pointer px-4">
            <h3 className="text-4xl md:text-6xl font-black uppercase">Web Experience</h3>
            <span className="text-lg font-mono mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity">03</span>
          </div>
           {/* Service Item 4 */}
           <div className="group py-12 border-b border-white/10 flex flex-col md:flex-row justify-between items-center hover:bg-white hover:text-black transition-all duration-300 cursor-pointer px-4">
            <h3 className="text-4xl md:text-6xl font-black uppercase">Content Production</h3>
            <span className="text-lg font-mono mt-4 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity">04</span>
          </div>
        </div>
      </section>

      {/* BIG BOLD CONTACT SECTION */}
      <section id="contact" className="py-32 px-6 bg-yellow-400 text-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] mb-8">
              Let's <br /> Create <br /> Chaos.
            </h2>
            <p className="text-xl font-bold max-w-md mb-8">
              Ready to disrupt your industry? Fill out the form and let's get to work.
            </p>
            <div className="space-y-2 font-mono text-sm">
              <p>Pune</p>
              <p>sumandalai94@gmail.com</p>
            </div>
          </div>

          <div className="bg-black text-white p-10">
             {/* 
                ⚠️ PASTE YOUR FORMSPREE LINK HERE AGAIN 
            */}
            <form action="PASTE_YOUR_FORMSPREE_LINK_HERE" method="POST" className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Name</label>
                <input required name="name" type="text" className="w-full bg-transparent border-b border-white/20 py-4 text-xl font-bold focus:outline-none focus:border-yellow-400 transition-colors" placeholder="Your Name" />
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Email</label>
                <input required name="email" type="email" className="w-full bg-transparent border-b border-white/20 py-4 text-xl font-bold focus:outline-none focus:border-yellow-400 transition-colors" placeholder="email@company.com" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Project Details</label>
                <textarea required name="message" rows={3} className="w-full bg-transparent border-b border-white/20 py-4 text-xl font-bold focus:outline-none focus:border-yellow-400 transition-colors" placeholder="Tell us what you need..."></textarea>
              </div>

              <button type="submit" className="w-full py-6 bg-yellow-400 text-black font-black uppercase tracking-widest hover:bg-white transition-colors mt-8">
                Send Request
              </button>
            </form>
          </div>

        </div>
      </section>

      <footer className="bg-black text-white py-12 px-6 border-t border-white/10 flex justify-between items-end">
        <div className="text-[10vw] font-black leading-none text-zinc-900 select-none">SG</div>
        <div className="text-right">
          <p className="text-sm text-gray-500">&copy; 2025 SG Agency.</p>
        </div>
      </footer>

    </div>
  );
}