import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white font-sans">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            SG Agency
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <Link href="#services" className="hover:text-white transition-colors">Services</Link>
            <Link href="#about" className="hover:text-white transition-colors">About</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>
          <a href="#contact" className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-all">
            Get Audit
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] -z-10"></div>
        
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            We Scale Brands with <br />
            <span className="text-blue-500">Data-Driven</span> Marketing.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Stop guessing. Start growing. We combine creative strategy with technical precision to turn clicks into customers.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
            <a href="#contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all">
              Start Your Growth
            </a>
            <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">Our Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">🚀</div>
              <h3 className="text-xl font-bold mb-3">SEO Optimization</h3>
              <p className="text-gray-400">Rank higher on Google. We optimize your technical structure and content to drive organic traffic.</p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">🎯</div>
              <h3 className="text-xl font-bold mb-3">PPC Campaigns</h3>
              <p className="text-gray-400">Maximize ROI. We manage Google and Meta ads with precision targeting and constant A/B testing.</p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/50 transition-all group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">✨</div>
              <h3 className="text-xl font-bold mb-3">Content Strategy</h3>
              <p className="text-gray-400">Tell your story. We create compelling content that engages your audience and builds brand authority.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center bg-gradient-to-b from-zinc-900 to-black p-12 rounded-3xl border border-white/10">
          <h2 className="text-3xl font-bold mb-6">Ready to Scale?</h2>
          <p className="text-gray-400 mb-8">
            Book a free 15-minute discovery call. No pressure, just strategy.
          </p>
          
          <form className="space-y-4 text-left">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Your Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@company.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Tell us about your business..."></textarea>
            </div>
            <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5">
        <p>&copy; 2024 SG Digital Agency. All rights reserved.</p>
      </footer>

    </div>
  );
}