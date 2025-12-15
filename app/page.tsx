"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { ArrowRight, Globe, BarChart3, Zap, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

// --- COMPONENTS ---

// 1. The "Kinetic" Hero Text Component
const KineticText = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-wrap justify-center overflow-hidden">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: 100, opacity: 0, rotateX: -90 }}
          animate={{ y: 0, opacity: 1, rotateX: 0 }}
          transition={{
            duration: 1.2,
            delay: i * 0.05,
            ease: [0.22, 1, 0.36, 1], // Custom "Apple-style" ease
          }}
          className="inline-block origin-bottom transform-3d"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

// 2. Strategic Card Component
const StrategyCard = ({ number, title, content, delay }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
      className="group relative border-t border-white/10 py-12 md:py-16 hover:bg-white/[0.02] transition-colors"
    >
      <div className="max-w-[1920px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="col-span-2">
          <span className="font-mono text-xs text-neutral-500 group-hover:text-[#ccff00] transition-colors">
            {number}
          </span>
        </div>
        <div className="col-span-4">
          <h3 className="text-3xl md:text-4xl font-light tracking-tight text-white group-hover:translate-x-4 transition-transform duration-500">
            {title}
          </h3>
        </div>
        <div className="col-span-6">
          <p className="text-lg text-neutral-400 font-light leading-relaxed max-w-2xl group-hover:text-white transition-colors duration-500">
            {content}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// 3. Main Page
export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-[#e1e1e1] font-sans selection:bg-[#ccff00] selection:text-black overflow-x-hidden">
      
      {/* GLOBAL PROGRESS BAR (Like Top News Sites) */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#ccff00] origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* BACKGROUND TEXTURE (Noise) */}
      <div className="fixed inset-0 z-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
           style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}
      />

      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 px-6 py-6 mix-blend-difference flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#ccff00] rounded-full animate-pulse" />
          <span className="font-bold tracking-tighter text-lg">GS DIGITAL</span>
        </div>
        
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        <div className="hidden md:flex gap-12">
           {['Philosophy', 'Capabilities', 'Work', 'Intelligence'].map((item) => (
             <a key={item} href={`#${item.toLowerCase()}`} className="text-xs font-bold uppercase tracking-widest hover:text-[#ccff00] transition-colors">
               {item}
             </a>
           ))}
        </div>

        <a href="#contact" className="hidden md:block border border-white/20 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#ccff00] hover:text-black transition-all">
          Start Project
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="relative z-10 min-h-screen flex flex-col justify-center items-center pt-20">
        <div className="max-w-[1920px] w-full px-6">
          <div className="mb-8 flex justify-center">
            <span className="px-3 py-1 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-[#ccff00]">
              System Architecture v3.0
            </span>
          </div>
          
          <h1 className="text-[10vw] leading-[0.85] font-black tracking-tighter uppercase text-center mb-12 mix-blend-difference">
            <KineticText text="Digital" />
            <span className="block h-4 md:h-8" /> {/* Spacer */}
            <KineticText text="Sovereignty" />
          </h1>

          <div className="flex flex-col items-center max-w-2xl mx-auto text-center gap-8">
            <p className="text-xl md:text-2xl font-light text-neutral-400 leading-relaxed">
              We do not build "websites." We engineer <span className="text-white font-medium">revenue ecosystems</span> for brands that have outgrown the ordinary.
            </p>
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 1.5, duration: 1 }}
               className="flex gap-4"
            >
              <a href="#contact" className="bg-[#ccff00] text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-white transition-colors">
                Initiate Sequence
              </a>
              <a href="#philosophy" className="border border-white/20 px-8 py-4 font-bold uppercase tracking-wider hover:bg-white/10 transition-colors">
                Read Manifesto
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-50"
        >
          <ChevronDown className="w-8 h-8 text-[#ccff00]" />
        </motion.div>
      </section>

      {/* PHILOSOPHY SECTION (Deep Content) */}
      <section id="philosophy" className="relative z-10 py-32 px-6 border-t border-white/10 bg-[#080808]">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-xs font-mono text-[#ccff00] mb-8 uppercase tracking-widest sticky top-32">
              01 // The Philosophy
            </h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.9] mb-12">
              The Old Web <br/> Is Dead.
            </h3>
          </div>
          <div className="space-y-12 text-lg md:text-xl font-light leading-relaxed text-neutral-400">
            <p>
              <strong className="text-white">Most agencies are selling you 2018.</strong> They sell you a static brochure and call it a digital presence. They sell you "traffic" but ignore conversion physics.
            </p>
            <p>
              At GS Digital, we operate differently. We view your digital presence as a <strong className="text-white">living organism</strong>. It must breathe, adapt, and evolve. We fuse high-fidelity aesthetics with brutal backend automation.
            </p>
            <p>
              We don't care about "likes." We care about <strong className="text-[#ccff00]">Velocity of Capital</strong>—how fast we can turn a stranger into a loyal advocate for your brand.
            </p>
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-white mb-2">0.2s</div>
                <div className="text-xs text-neutral-500 uppercase">Load Latency</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-xs text-neutral-500 uppercase">Retention Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">4x</div>
                <div className="text-xs text-neutral-500 uppercase">Avg. ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC PROCESS (The Content You Wanted) */}
      <section id="capabilities" className="relative z-10 bg-[#050505]">
        <div className="py-20 px-6 max-w-[1920px] mx-auto">
          <h2 className="text-xs font-mono text-[#ccff00] mb-8 uppercase tracking-widest">
            02 // Strategic Architecture
          </h2>
        </div>

        <StrategyCard 
          number="01" 
          title="Forensic Audit" 
          content="We don't guess. We deploy deep-dive analytics to map your current user journey, identify leakage points, and spy on competitor infrastructure. We find the money you are leaving on the table."
          delay={0}
        />
        <StrategyCard 
          number="02" 
          title="UX Engineering" 
          content="We design systems, not just pages. Using Next.js and behavioral psychology, we craft interfaces that reduce friction to zero. Every pixel has a commercial purpose."
          delay={0.1}
        />
        <StrategyCard 
          number="03" 
          title="Automated Nurture" 
          content="Traffic is useless without retention. We build custom AI Agents and Email flows that grab leads and nurture them 24/7. Your business sells while you sleep."
          delay={0.2}
        />
        <StrategyCard 
          number="04" 
          title="Scale & Optimization" 
          content="Launch is just day one. We monitor real-time dashboards, running continuous A/B tests to squeeze every ounce of performance from your ad spend."
          delay={0.3}
        />
      </section>

      {/* INTELLIGENCE / AUTOMATION VISUAL */}
      <section id="intelligence" className="relative z-10 py-32 px-6 border-t border-white/10 overflow-hidden">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#ccff00]/30 text-[#ccff00] text-xs font-mono uppercase mb-8">
                 <Zap size={12} /> Live Simulation
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-none">
                The Machine <br/> That Never Sleeps.
              </h2>
              <p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                Imagine a sales team that works 24/7/365, speaks 40 languages, and never asks for a raise. That is what we build.
              </p>
              <ul className="space-y-4 font-mono text-sm text-neutral-300">
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"/> 
                  Lead Capture (Instant)
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"/> 
                  CRM Injection (0.4ms)
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"/> 
                  AI SMS Follow-up (1 min delay)
                </li>
              </ul>
            </div>

            {/* Right Visual (Abstract Representation) */}
            <div className="relative h-[500px] border border-white/10 bg-white/[0.02] rounded-3xl p-8 flex flex-col justify-between overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-[#ccff00]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-[#ccff00]/20 transition-all duration-1000"></div>
               
               <div className="grid grid-cols-2 gap-4 opacity-50">
                 <div className="h-32 bg-white/5 rounded-xl animate-pulse"></div>
                 <div className="h-32 bg-white/5 rounded-xl animate-pulse" style={{animationDelay: '0.2s'}}></div>
                 <div className="h-32 bg-white/5 rounded-xl animate-pulse" style={{animationDelay: '0.4s'}}></div>
                 <div className="h-32 bg-white/5 rounded-xl animate-pulse" style={{animationDelay: '0.6s'}}></div>
               </div>

               <div className="font-mono text-xs text-[#ccff00]">
                <div className="font-mono text-xs text-[#ccff00]">
                 &gt; SYSTEM STATUS: OPTIMAL <br/>
                 &gt; LEADS GENERATED TODAY: 142 <br/>
                 &gt; REVENUE IMPACT: +$42,000
               </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT (Editorial Style) */}
      <section id="contact" className="relative z-10 min-h-screen bg-[#ccff00] text-black py-32 px-6">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-[10vw] font-black leading-[0.8] mb-8 tracking-tighter">
              LET'S <br/> BUILD.
            </h2>
            <p className="text-xl font-medium max-w-md">
              We are selective. We only partner with brands ready to scale aggressively.
            </p>
          </div>

          <div className="bg-black/5 p-8 md:p-16">
             {/* PASTE YOUR LINK HERE */}
            <form action="PASTE_YOUR_FORMSPREE_LINK_HERE" method="POST" className="space-y-12">
              <div className="relative border-b border-black/20 focus-within:border-black transition-colors">
                <input required name="name" type="text" className="w-full bg-transparent py-4 text-2xl font-bold placeholder-black/30 focus:outline-none" placeholder="Your Name" />
              </div>
              <div className="relative border-b border-black/20 focus-within:border-black transition-colors">
                <input required name="email" type="email" className="w-full bg-transparent py-4 text-2xl font-bold placeholder-black/30 focus:outline-none" placeholder="Email Address" />
              </div>
              <div className="relative border-b border-black/20 focus-within:border-black transition-colors">
                <textarea required name="message" rows={3} className="w-full bg-transparent py-4 text-2xl font-bold placeholder-black/30 focus:outline-none resize-none" placeholder="Project Brief"></textarea>
              </div>
              <button type="submit" className="w-full bg-black text-white py-6 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black py-12 px-6 border-t border-white/10 text-center md:text-left">
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center text-xs font-mono text-neutral-500 uppercase tracking-widest">
           <p>GS Digital Systems © 2026</p>
           <div className="flex gap-8 mt-4 md:mt-0">
             <a href="#" className="hover:text-white">Legal</a>
             <a href="#" className="hover:text-white">Twitter</a>
             <a href="#" className="hover:text-white">LinkedIn</a>
           </div>
        </div>
      </footer>

    </div>
  );
}