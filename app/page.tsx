import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-blue-500 selection:text-white font-sans">
      
      {/* Navbar with Glass Effect */}
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">
            SG Agency
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            <Link href="#services" className="hover:text-white transition-colors">Services</Link>
            <Link href="#work" className="hover:text-white transition-colors">Work</Link>
            <Link href="#faq" className="hover:text-white transition-colors">FAQ</Link>
          </div>
          <a href="#contact" className="px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-zinc-200 transition-all">
            Get Audit
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 opacity-50"></div>
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-blue-400 font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Accepting New Clients for 2025
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-white">
            We Scale Brands with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500">Intelligent Marketing.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Stop guessing. Start growing. We combine data science with creative strategy to turn traffic into revenue.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
            <a href="#contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25">
              Book Your Free Strategy Call
            </a>
            <a href="#work" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">
              View Case Studies
            </a>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs text-zinc-500 mb-8 uppercase tracking-widest font-semibold">Powering growth for</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <h3 className="text-xl font-bold text-white">ACME Corp</h3>
            <h3 className="text-xl font-bold text-white">Stark Industries</h3>
            <h3 className="text-xl font-bold text-white">Wayne Ent</h3>
            <h3 className="text-xl font-bold text-white">Cyberdyne</h3>
            <h3 className="text-xl font-bold text-white">Globex</h3>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <p className="text-zinc-400">Everything you need to dominate your market.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-blue-500/50 transition-all group hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-2xl mb-6 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">📈</div>
              <h3 className="text-xl font-bold mb-3">SEO & Authority</h3>
              <p className="text-zinc-400 leading-relaxed">We optimize your technical structure and content architecture to capture high-intent organic traffic.</p>
            </div>
            <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-purple-500/50 transition-all group hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-2xl mb-6 text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-all">🎯</div>
              <h3 className="text-xl font-bold mb-3">Paid Acquisition</h3>
              <p className="text-zinc-400 leading-relaxed">Laser-targeted campaigns on Google and Meta that maximize ROAS (Return on Ad Spend).</p>
            </div>
            <div className="p-8 rounded-3xl bg-zinc-900 border border-white/5 hover:border-pink-500/50 transition-all group hover:-translate-y-1">
              <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center text-2xl mb-6 text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all">🎨</div>
              <h3 className="text-xl font-bold mb-3">Brand Strategy</h3>
              <p className="text-zinc-400 leading-relaxed">We craft compelling narratives and visual identities that turn passive visitors into loyal advocates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-zinc-900/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Common Questions</h2>
          <div className="space-y-4">
            <details className="group bg-black border border-white/5 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden open:border-blue-500/30 transition-all">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white font-medium">
                How much does a typical engagement cost?
                <span className="shrink-0 rounded-full bg-white/5 p-1.5 text-white sm:p-3 group-open:-rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 leading-relaxed text-zinc-400">
                Our packages start at $1,500/month for startups, but most comprehensive growth campaigns range between $3k-$8k depending on ad spend and content volume.
              </p>
            </details>
            <details className="group bg-black border border-white/5 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden open:border-blue-500/30 transition-all">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white font-medium">
                Is there a long-term contract?
                <span className="shrink-0 rounded-full bg-white/5 p-1.5 text-white sm:p-3 group-open:-rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 leading-relaxed text-zinc-400">
                We believe in earning your business every month. We operate on a month-to-month basis with a 30-day cancellation notice.
              </p>
            </details>
          </div>
        </div>
      </section>
      {/* PROFESSIONAL CONTACT SECTION */}
      <section id="contact" className="py-32 px-6 relative overflow-hidden">
        {/* Background Gradient for Contact */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Copy */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's talk about <br />your <span className="text-blue-500">revenue goals.</span></h2>
            <p className="text-lg text-zinc-400 mb-8">
              Fill out the form to book a free discovery call. We'll analyze your current digital presence and propose a growth roadmap.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">✉️</div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase">Email Us</p>
                  <p className="font-medium">hello@sgagency.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-zinc-300">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">📍</div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase">Office</p>
                  <p className="font-medium">Mumbai, India (Remote Global)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: THE FORM */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
            {/* 
                IMPORTANT: 
                Replace the URL in the action="" quotes below with your unique Formspree link 
            */}
            <form action="PASTE_YOUR_FORMSPREE_LINK_HERE" method="POST" className="space-y-4">
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">First Name</label>
                  <input required name="name" type="text" className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-400">Last Name</label>
                  <input name="lastname" type="text" className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Email Address</label>
                <input required name="email" type="email" className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="john@company.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Website URL (Optional)</label>
                <input name="website" type="text" className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="www.yourbrand.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">How can we help?</label>
                <textarea required name="message" rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="I want to scale my ads..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-lg transform active:scale-95">
                Get My Free Audit
              </button>
              
              <p className="text-xs text-center text-zinc-500">No credit card required. Free 15-min consultation.</p>
            </form>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/10 text-center">
         <div className="text-2xl font-bold tracking-tighter text-white mb-4">SG Agency</div>
         <p className="text-zinc-500 text-sm">&copy; 2024 SG Digital Agency. Built for performance.</p>
      </footer>

    </div>
  );
}