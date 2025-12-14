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
            <Link href="#work" className="hover:text-white transition-colors">Work</Link>
            <Link href="#faq" className="hover:text-white transition-colors">FAQ</Link>
          </div>
          <a href="#contact" className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-200 transition-all">
            Get Audit
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
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
            <a href="#work" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all">
              View Our Work
            </a>
          </div>
        </div>
      </section>

      {/* NEW: Client Trust Section (Logos) */}
      <section className="py-10 border-y border-white/5 bg-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-500 mb-8 uppercase tracking-widest">Trusted by innovative companies</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {/* You can replace these with real logo images later */}
            <span className="text-xl font-bold text-white">Acme Corp</span>
            <span className="text-xl font-bold text-white">GlobalTech</span>
            <span className="text-xl font-bold text-white">Nebula</span>
            <span className="text-xl font-bold text-white">Trio</span>
            <span className="text-xl font-bold text-white">FoxRun</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">Our Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">🚀</div>
              <h3 className="text-xl font-bold mb-3">SEO Optimization</h3>
              <p className="text-gray-400">Rank higher on Google. We optimize your technical structure and content to drive organic traffic.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">🎯</div>
              <h3 className="text-xl font-bold mb-3">PPC Campaigns</h3>
              <p className="text-gray-400">Maximize ROI. We manage Google and Meta ads with precision targeting and constant A/B testing.</p>
            </div>
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-500/50 transition-all group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">✨</div>
              <h3 className="text-xl font-bold mb-3">Content Strategy</h3>
              <p className="text-gray-400">Tell your story. We create compelling content that engages your audience and builds brand authority.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Testimonials Section */}
      <section id="work" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
              <div className="flex text-blue-500 mb-4">★★★★★</div>
              <p className="text-lg text-gray-300 mb-6">"SG Agency completely transformed our online presence. Our leads doubled in just 3 months. The best investment we made this year."</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-600"></div> {/* Placeholder for user image */}
                <div>
                  <h4 className="font-bold">Sarah Jenkins</h4>
                  <p className="text-sm text-gray-500">CEO, TechFlow</p>
                </div>
              </div>
            </div>
             {/* Testimonial 2 */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
              <div className="flex text-blue-500 mb-4">★★★★★</div>
              <p className="text-lg text-gray-300 mb-6">"I didn't know where to start with SEO. Suman and the team guided me every step of the way. Professional, fast, and effective."</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-600"></div>
                <div>
                  <h4 className="font-bold">David Chen</h4>
                  <p className="text-sm text-gray-500">Founder, Bloom & Co</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: FAQ Section */}
      <section id="faq" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            
            <details className="group bg-white/5 border border-white/10 rounded-xl p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                <h2 className="text-lg font-medium">How quickly can I see results?</h2>
                <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-white sm:p-3 group-open:-rotate-180 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-300">
                For PPC ads, you can see results instantly. For SEO, it typically takes 3-6 months to see significant organic growth. We provide monthly reports so you can track progress.
              </p>
            </details>

            <details className="group bg-white/5 border border-white/10 rounded-xl p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                <h2 className="text-lg font-medium">Do you work with small businesses?</h2>
                <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-white sm:p-3 group-open:-rotate-180 transition-transform">
                   <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-300">
                Absolutely! We have specific packages designed for startups and small businesses looking to get their first 100 customers.
              </p>
            </details>

            <details className="group bg-white/5 border border-white/10 rounded-xl p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-white">
                <h2 className="text-lg font-medium">What makes you different?</h2>
                <span className="shrink-0 rounded-full bg-white/10 p-1.5 text-white sm:p-3 group-open:-rotate-180 transition-transform">
                   <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-gray-300">
                We are data-first. We don't just make things look pretty; we focus on ROI (Return on Investment). If it doesn't make you money, we don't do it.
              </p>
            </details>

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

      {/* Enhanced Footer */}
      <footer className="py-12 bg-zinc-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-bold mb-4">SG Agency</h4>
            <p className="text-gray-400 text-sm">Helping brands grow through data-driven digital marketing strategies.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">SEO</a></li>
              <li><a href="#" className="hover:text-white">PPC Advertising</a></li>
              <li><a href="#" className="hover:text-white">Content Marketing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-white">About Us</a></li>
              <li><a href="#work" className="hover:text-white">Case Studies</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-600 text-sm pt-8 border-t border-white/5">
          <p>&copy; 2024 SG Digital Agency. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}