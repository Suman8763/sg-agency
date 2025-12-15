import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-violet-500 selection:text-white">
      
      {/* Navbar - Glassmorphism */}
      <nav className="fixed top-0 w-full z-50 bg-neutral-950/70 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Animated Logo Icon */}
            <div className="relative flex h-8 w-8 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-lg bg-violet-500 opacity-20"></span>
              <div className="relative w-8 h-8 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-violet-500/20">GS</div>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Digital.</span>
          </div>
          
          <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
            <Link href="#automation" className="hover:text-violet-400 transition-colors">AI Automation</Link>
            <Link href="#industries" className="hover:text-violet-400 transition-colors">Industries</Link>
            <Link href="#services" className="hover:text-violet-400 transition-colors">Services</Link>
          </div>
          
          <a href="#contact" className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-violet-50 transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)]">
            Book Demo
          </a>
        </div>
      </nav>

      {/* Hero Section - LIVE ANIMATION & MODERN GRADIENTS */}
      <section className="relative pt-32 pb-20 md:pt-52 md:pb-40 px-6 overflow-hidden">
        
        {/* Animated Background Blobs (The "Live" Effect) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/30 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-violet-300 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></span>
            Next-Gen Agency for 2026
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-[1.1] mb-8 text-white">
            Growth on <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-white">Autopilot.</span>
          </h1>
          
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            We don't just run ads. We build <span className="text-white font-medium">AI Sales Systems</span> for Gyms, Real Estate, and Healthcare businesses that nurture leads while you sleep.
          </p>
          
          <div className="flex flex-col md:flex-row gap-5 justify-center">
            <a href="#contact" className="group relative px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-all overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-200 to-fuchsia-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative z-10">Start Scaling Now</span>
            </a>
            <a href="#automation" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-all backdrop-blur-md">
              Explore AI Tools
            </a>
          </div>
        </div>
      </section>

      {/* Infinite Marquee - Industries */}
      <section className="py-10 border-y border-white/5 bg-white/[0.02] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center mb-6">
          <p className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Specialized Growth For</p>
        </div>
        <div className="flex justify-center gap-8 md:gap-20 opacity-40 font-bold text-xl md:text-2xl text-white uppercase tracking-tighter">
            <span>Real Estate</span>
            <span className="text-violet-500">•</span>
            <span>Fitness Centers</span>
            <span className="text-violet-500">•</span>
            <span>Dental Clinics</span>
            <span className="text-violet-500">•</span>
            <span>E-Commerce</span>
            <span className="text-violet-500">•</span>
            <span>SaaS</span>
        </div>
      </section>
      {/* STATS SECTION (The BrandSparc Trust Factor) */}
      <section className="py-20 border-b border-white/5 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">12+</h3>
            <p className="text-neutral-500 text-sm uppercase tracking-widest">Active Clients</p>
          </div>
          <div className="p-6 border-l border-white/5">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">$4M+</h3>
            <p className="text-neutral-500 text-sm uppercase tracking-widest">Revenue Generated</p>
          </div>
          <div className="p-6 border-l border-white/5">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">24/7</h3>
            <p className="text-neutral-500 text-sm uppercase tracking-widest">AI Support Active</p>
          </div>
          <div className="p-6 border-l border-white/5">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">3x</h3>
            <p className="text-neutral-500 text-sm uppercase tracking-widest">Avg. ROI</p>
          </div>
        </div>
      </section>

      {/* THE "AUTOMATION WORKFLOW" VISUAL (The Feature You Wanted) */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-neutral-400">We replace manual chaos with automated precision.</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop Only) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent -translate-y-1/2 opacity-30"></div>

            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              
              {/* Step 1 */}
              <div className="group bg-neutral-900 border border-white/10 p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center text-xl mb-6 group-hover:bg-violet-600 transition-colors">1</div>
                <h3 className="text-xl font-bold text-white mb-3">Connect Data</h3>
                <p className="text-sm text-neutral-400">We link your CRM, Website, and Ads into one central brain.</p>
              </div>

              {/* Step 2 */}
              <div className="group bg-neutral-900 border border-white/10 p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 delay-100">
                <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center text-xl mb-6 group-hover:bg-fuchsia-600 transition-colors">2</div>
                <h3 className="text-xl font-bold text-white mb-3">Build AI Agents</h3>
                <p className="text-sm text-neutral-400">We train AI bots to answer FAQs and book meetings instantly.</p>
              </div>

              {/* Step 3 */}
              <div className="group bg-neutral-900 border border-white/10 p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 delay-200">
                <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center text-xl mb-6 group-hover:bg-blue-600 transition-colors">3</div>
                <h3 className="text-xl font-bold text-white mb-3">Launch Traffic</h3>
                <p className="text-sm text-neutral-400">We turn on high-intent ads to flood the system with leads.</p>
              </div>

              {/* Step 4 */}
              <div className="group bg-neutral-900 border border-white/10 p-8 rounded-2xl hover:-translate-y-2 transition-all duration-300 delay-300">
                <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center text-xl mb-6 group-hover:bg-green-500 transition-colors">4</div>
                <h3 className="text-xl font-bold text-white mb-3">Auto-Close</h3>
                <p className="text-sm text-neutral-400">You wake up to booked appointments and new sales.</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* NEW: AI AUTOMATION SECTION (The "Market Trend" Feature) */}
      <section id="automation" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-violet-400 font-bold mb-4 tracking-widest text-sm uppercase">The AI Advantage</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Stop chasing leads. <br />Let AI close them.</h2>
              <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                Most agencies bring you leads that don't pick up the phone. Our AI systems text, email, and nurture your leads instantly, booking appointments directly into your calendar.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400 text-xl">🤖</div>
                  <div>
                    <h3 className="text-white font-bold text-lg">24/7 AI Chatbots</h3>
                    <p className="text-neutral-500 text-sm">Responds to customer questions instantly, day or night.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 text-xl">📅</div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Auto-Booking Engine</h3>
                    <p className="text-neutral-500 text-sm">Qualified leads are automatically scheduled for meetings.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 text-xl">💬</div>
                  <div>
                    <h3 className="text-white font-bold text-lg">SMS Reactivation</h3>
                    <p className="text-neutral-500 text-sm">We automatically text old leads to bring them back.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Representation of AI */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative p-8 bg-neutral-900 ring-1 ring-white/10 rounded-2xl leading-none flex items-top justify-start space-x-6">
                <div className="space-y-4 w-full">
                  <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                     <div className="w-3 h-3 rounded-full bg-red-500"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500"></div>
                     <div className="text-xs text-neutral-500 ml-auto">AI Assistant Active</div>
                  </div>
                  {/* Chat UI Mockup */}
                  <div className="space-y-4 font-mono text-sm">
                    <div className="bg-neutral-800 p-3 rounded-lg rounded-tl-none max-w-[80%] text-neutral-300">
                      Hello! I noticed you were looking at our pricing. Do you have any questions?
                    </div>
                    <div className="bg-violet-900/30 border border-violet-500/30 p-3 rounded-lg rounded-tr-none max-w-[80%] ml-auto text-white">
                      Yes, do you work with Real Estate agents?
                    </div>
                    <div className="bg-neutral-800 p-3 rounded-lg rounded-tl-none max-w-[80%] text-neutral-300">
                      Absolutely. We helped 5 agents in your area double their listings last month. Want to see how?
                    </div>
                    <div className="bg-white/10 p-2 rounded text-center text-xs text-green-400 animate-pulse">
                      Lead Booked Appointment ✅
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 px-6 bg-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Complete Growth Stack</h2>
            <p className="text-neutral-400">Everything a modern business needs to dominate locally.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="p-8 rounded-2xl bg-neutral-950 border border-white/5 hover:border-violet-500/50 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-neutral-900 text-violet-400 flex items-center justify-center text-2xl mb-6">🚀</div>
              <h3 className="text-xl font-bold mb-3 text-white">Paid Ads</h3>
              <p className="text-neutral-400 text-sm">Google & Meta ads that target people actively looking for your service.</p>
            </div>

            {/* Service 2 */}
            <div className="p-8 rounded-2xl bg-neutral-950 border border-white/5 hover:border-fuchsia-500/50 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-neutral-900 text-fuchsia-400 flex items-center justify-center text-2xl mb-6">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-white">Automations</h3>
              <p className="text-neutral-400 text-sm">CRM setup and workflows that ensure no lead is ever left behind.</p>
            </div>

            {/* Service 3 */}
            <div className="p-8 rounded-2xl bg-neutral-950 border border-white/5 hover:border-blue-500/50 transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-neutral-900 text-blue-400 flex items-center justify-center text-2xl mb-6">💎</div>
              <h3 className="text-xl font-bold mb-3 text-white">Premium Web</h3>
              <p className="text-neutral-400 text-sm">Websites designed for conversion, speed, and mobile dominance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500">Upgrade?</span>
          </h2>
          <p className="text-xl text-neutral-400 mb-12">
            We only onboard 3 new partners per month to maintain quality.
          </p>
          
          <div className="bg-neutral-900 p-8 md:p-12 rounded-3xl border border-white/10 text-left">
             {/* 
                ⚠️ PASTE YOUR FORMSPREE LINK IN THE ACTION BELOW 
            */}
            <form action="PASTE_YOUR_FORMSPREE_LINK_HERE" method="POST" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Name</label>
                    <input required name="name" type="text" className="w-full bg-black border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-violet-500 transition-colors" placeholder="Your Name" />
                </div>
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Industry</label>
                    <input required name="industry" type="text" className="w-full bg-black border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-violet-500 transition-colors" placeholder="e.g. Real Estate" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Email</label>
                <input required name="email" type="email" className="w-full bg-black border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-violet-500 transition-colors" placeholder="name@company.com" />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">Current Revenue Goal</label>
                <textarea required name="message" rows={3} className="w-full bg-black border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-violet-500 transition-colors" placeholder="I want to add $10k/mo..."></textarea>
              </div>

              <button type="submit" className="w-full py-5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold rounded-lg hover:opacity-90 transition-all shadow-lg shadow-violet-500/25">
                Book Discovery Call
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-neutral-950 border-t border-white/5 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-md"></div>
            <span className="font-bold text-white">GS Digital.</span>
        </div>
        <p className="text-neutral-500 text-sm">&copy; 2026 GS Digital Agency. Empowering Local Business.</p>
      </footer>

    </div>
  );
}