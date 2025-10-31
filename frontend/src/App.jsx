// src/pages/Landing.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, DollarSign, Target, CheckCircle , Wallet , Shield , LockIcon } from 'lucide-react';
import Header from './pages/Header';
import ScrollingCoins from './components/Scrollingcoins';
import ScrollingBackedBy from './components/ScrollingBackedBy';

// NOTE: place images into /src/assets/cards/*.jpg (see below)
const CARD_IMAGES = {
  feature1: './assets/cards/blockchain.jpg',
  feature2: '/assets/cards/feature2.jpg',
  feature3: '/assets/cards/feature3.jpg',
  heroCard: '/assets/cards/hero-card.jpg',
};



export default function Landing() {
  return (
    <div className="min-h-screen bg-linear-to-b from-[#030512] via-[#061022] to-[#071029] text-white">
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <ScrollingCoins />
        <ScrollingBackedBy />
        <HowItWorks />
        <CoinSwapAnimation/>
        <Features />
        <SwapCards />
        <ProblemsSection />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
const ConnectButton = ({ onClick, small }) => {
  return (
    <motion.button
      onClick={onClick}
      aria-label="Connect wallet"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`relative z-20 px-5 ${small ? "py-2 text-sm" : "py-3 text-md"} rounded-xl font-semibold blue-glow`}
    >
      <span className="relative z-10 flex items-center gap-2 text-white/95">
        <Wallet size={16} />
        <span>Connect Wallet</span>
      </span>
      {/* subtle animated ring */}
      <motion.span
        aria-hidden
        className="absolute -inset-1 rounded-xl pointer-events-none"
        initial={{ opacity: 0.06 }}
        animate={{ opacity: [0.06, 0.16, 0.06] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.button>
  );
};

/* -------------------- HERO -------------------- */
const HeroSection = ({ parallaxX, parallaxY }) => {
  return (
    <section className=" pb-10 px-6 min-h-screen flex items-center">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: copy + CTA */}
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1
            className="hero-headline text-6xl md:text-5xl font-extrabold leading-tight mb-4"
            style={{ transform: `translate(${parallaxX * 0.6}px, ${parallaxY * 0.6}px)` }}
          >
            <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-200 via-white to-cyan-200 drop-shadow-[0_6px_30px_rgba(69,90,255,0.08)]">
              SWAP TOKENS IN SECONDS
            </span>
            <br />
            <span className="block text-slate-200/95">WITH INTENTSWAP — BLOCKDAG POWERED</span>
          </h1>

          <p className="hero-sub text-lg text-slate-300 max-w-xl mb-6">
            Trade tokens seamlessly across aggregated liquidity sources on BlockDAG. Fast routing, low fees, and a polished UX
            built for crypto newbs and pros alike.
          </p>

          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ y: -3 }}
              href="/swap"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold bg-linear-to-r from-[#06b6d4] to-[#6d28d9] text-black shadow-[0_12px_50px_rgba(6,182,212,0.12)]"
            >
              Start Swapping <ArrowRight />
            </motion.a>

         
                     <motion.button
                       aria-label="Connect wallet"
                       whileHover={{ scale: 1.03 }}
                       whileTap={{ scale: 0.98 }}
                       className="relative px-5 py-2 rounded-2xl font-semibold text-white bg-linear-to-r from-cyan-500 to-indigo-600 shadow-lg border border-cyan-400/30 overflow-hidden"
                     >
                       <div className="absolute inset-0 rounded-2xl bg-black/0 hover:bg-black/25 transition-all pointer-events-none" />
                       <div className="flex items-center gap-2 relative z-10">
                         <Wallet size={16} /> <span className="hidden sm:inline">Connect Wallet</span>
                       </div>
                     </motion.button>
          </div>

          {/* small trust badges */}
          <div className="mt-8 flex gap-4 items-center text-sm text-slate-400">
            <div className="glass p-3 rounded-md flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#06B6D4]/20 flex items-center justify-center text-[#06B6D4]">⚡</div>
              <div>
                <div className="font-semibold text-sm text-slate-100">Instant routing</div>
                <div className="text-xs text-slate-400">Sub-second swap estimates</div>
              </div>
            </div>

            <div className="glass p-3 rounded-md flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#6D28D9]/20 flex items-center justify-center text-[#6D28D9]">🔒</div>
              <div>
                <div className="font-semibold text-sm text-slate-100">Immutable receipts</div>
                <div className="text-xs text-slate-400">Future smart contract support</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: fancy glass card with clip-path image + details */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="flex justify-center">
          {/* Card wrapper */}
          <div className="relative w-full max-w-lg card-clip">
            {/* Background image area - you'll supply an image path here */}
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden"
              aria-hidden
              style={{
                // TODO: replace this URL with your own card image path or pass as prop
                backgroundImage: `url('/images/your-card-image.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                mixBlendMode: "overlay",
                opacity: 0.12,
              }}
            />

            {/* glass card */}
            <div className="glass relative rounded-2xl border border-white/6 p-6 shadow-[0_20px_60px_rgba(2,6,23,0.6)]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm text-slate-300">Featured Pool</div>
                  <div className="mt-2 text-2xl font-bold">BDAG / INT</div>
                </div>

                <div className="text-right">
                  <div className="text-xs text-slate-400">APR</div>
                  <div className="font-semibold text-slate-100">12.4%</div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)] border border-white/4">
                  <div className="text-xs text-slate-400">You Pay</div>
                  <div className="mt-1 font-semibold text-white">100 INT</div>
                </div>

                <div className="p-4 rounded-lg bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)] border border-white/4">
                  <div className="text-xs text-slate-400">You Receive (est.)</div>
                  <div className="mt-1 font-semibold text-white">0.52 BDAG</div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between gap-4">
                <div className="text-sm text-slate-300">Price Impact</div>
                <div className="font-semibold text-slate-100">0.34%</div>
              </div>

              <div className="mt-6 flex gap-3">
                <button className="flex-1 py-3 rounded-xl font-semibold bg-linear-to-r from-[#06b6d4] to-[#6d28d9] text-black">
                  Swap
                </button>
                <button className="px-4 py-3 rounded-xl border border-white/8 text-slate-200">Details</button>
              </div>
            </div>

            {/* decorative neon border (glow) */}
            <div
              className="pointer-events-none absolute -inset-0.5 rounded-2xl"
              style={{
                boxShadow: "0 20px 60px rgba(109,40,217,0.08), 0 6px 30px rgba(6,182,212,0.06) inset",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.02)",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* -------------------- Coin Swap Row (animation) -------------------- */
function CoinSwapAnimation() {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto flex justify-center">
        <div className="relative w-full max-w-xl h-48 glass rounded-2xl border border-white/10 overflow-hidden">

          {/* Coin A: LEFT → RIGHT → OFF */}
          <motion.div
            initial={{ x: "-20vw", rotate: -20 }}
            animate={{ x: "120vw", rotate: 40 }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-linear-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-lg"
          >
            INT
          </motion.div>

          {/* Coin B: RIGHT → LEFT → OFF */}
          <motion.div
            initial={{ x: "120vw", rotate: 20 }}
            animate={{ x: "-20vw", rotate: -40 }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-linear-to-br from-cyan-400 to-indigo-600 flex items-center justify-center shadow-lg"
          >
            BDAG
          </motion.div>

          {/* Pool Glow */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.8, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full border border-white/20 flex items-center justify-center"
          >
            <div className="w-16 h-16 rounded-full bg-cyan-500/40 backdrop-blur-xl font-bold flex items-center justify-center">
              POOL
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Feature Cards (clip-path top-left diagonal) -------------------- */
function Features() {
  const features = [
    { title: 'Lightning Fast', body: 'BlockDAG enables near-instant finality.', image: CARD_IMAGES.feature1, icon: Zap },
    { title: 'Best Price Routing', body: 'Aggregator routes to the optimal pool.', image: CARD_IMAGES.feature2, icon: DollarSign },
    { title: 'Silly Simple', body: 'Minimal UX while exposing advanced controls.', image: CARD_IMAGES.feature3, icon: Target },
    { title: 'Security', body: 'Maximum Security. Secure and safe', image: CARD_IMAGES.feature3, icon: LockIcon },
    { title: 'Flexibility', body: 'Flexible Solutions.', image: CARD_IMAGES.feature3, icon: Zap },
    { title: 'Reliable', body: 'it protects you assets.', image: CARD_IMAGES.feature3, icon: Shield },
  ];

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }) {
  const Icon = feature.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative card-clip overflow-hidden rounded-2xl"
      style={{ minHeight: 220 }}
    >
      {/* clipped image background (top-left diagonal reveal) */}
      <div className="absolute inset-0">
        <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/60" />
      </div>

      <div className="glass p-6 h-full relative">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-linear-to-br from-cyan-400 to-indigo-600 flex items-center justify-center text-black"><Icon size={18} /></div>
          <div>
            <h4 className="text-xl font-semibold">{feature.title}</h4>
            <p className="text-slate-300 mt-1">{feature.body}</p>
          </div>
        </div>

        <div className="absolute -left-6 -top-6 w-40 h-40 bg-linear-to-br from-cyan-500/10 to-indigo-600/6 pointer-events-none" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 60%, 20% 100%, 0 100%)' }} />

        <div className="mt-6">
          <button className="text-sm text-cyan-400 hover:underline flex items-center gap-2">
            Learn more <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* -------------------- Swap / Compare / Route Preview / Settlement cards -------------------- */
function SwapCards() {
  const cards = [
    { title: 'Swap', desc: 'Core experience: select tokens, preview estimate, confirm.' },
    { title: 'Compare', desc: 'Compare prices across different liquidity routes.' },
    { title: 'Route Preview', desc: 'See step-by-step route: pools, fees, impact.' },
    { title: 'Settlement', desc: 'Receipt with proof and tx hash for audit.' },
  ];

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass p-5 rounded-xl border border-white/6">
              <div className="text-sm text-slate-300 font-semibold">{c.title}</div>
              <div className="mt-2 text-slate-200">{c.desc}</div>
              <div className="mt-4">
                <button className="text-sm px-3 py-1 rounded-md bg-white/5 hover:bg-white/8">Open</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- How it works -------------------- */
function HowItWorks() {
  const steps = [
    { title: 'Connect Wallet', desc: 'Mock connect or real wallet via ethers.js later.' },
    { title: 'Choose Tokens', desc: 'Select from a searchable token modal.' },
    { title: 'Preview Route', desc: 'View estimate, fee, price impact and slippage.' },
    { title: 'Confirm & Swap', desc: 'Approve if needed, confirm and get a tx receipt.' },
  ];

  return (
    <section className="py-12 px-6 bg-linear-to-b from-transparent to-black/10">
      <div className="container mx-auto">
        <div className='text-center'>

        <h1 className="text-5xl font-semibold ">How it works</h1>
        <p className="text-slate-400 mt-2 ">A clean flow designed for hackathon demos.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-6">
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} className="glass p-5 rounded-xl border border-white/6">
              <div className="text-xl font-bold">{i + 1}</div>
              <div className="mt-2 font-semibold text-slate-100">{s.title}</div>
              <div className="mt-1 text-slate-300 text-sm">{s.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- Problems -> Solutions -------------------- */
function ProblemsSection() {
  const problems = [
    { prob: 'Slow finality', sol: 'BlockDAG reduces latency and increases throughput.' },
    { prob: 'High fees', sol: 'Multi-route aggregation finds lower-fee paths.' },
    { prob: 'Complex UX', sol: 'One-click flow with clear confirmations' },
  ];

  return (
    <section className="py-12 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h3 className="text-2xl font-semibold">Problems we solve</h3>
          <p className="text-slate-400 mt-2">IntentSwap addresses the main friction points for token swaps.</p>

          <div className="mt-6 space-y-3">
            {problems.map((p, i)=> (
              <div key={i} className="flex gap-3 items-start">
                <div className="p-3 rounded-md bg-cyan-600/10 text-cyan-300"><CheckCircle /></div>
                <div>
                  <div className="font-semibold">{p.prob}</div>
                  <div className="text-slate-300 text-sm">{p.sol}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass p-6 rounded-xl border border-white/6">
          <h4 className="font-semibold">Quick steps to demo</h4>
          <ol className="mt-3 text-slate-300 space-y-2 text-sm">
            <li>1. Connect Wallet (mock)</li>
            <li>2. Choose tokens</li>
            <li>3. Preview & confirm</li>
            <li>4. Show processing + success</li>
          </ol>
          <div className="mt-6">
            <button className="px-4 py-2 rounded-md bg-linear-to-r from-cyan-500 to-indigo-600 text-black font-semibold">Start demo</button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- CTA and Footer -------------------- */
function CTA() {
  return (
    <section className="py-12 px-6">
      <div className="container mx-auto bg-linear-to-br from-[#031024]/30 to-[#071029]/30 p-8 rounded-2xl glass border border-white/6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold">Ready to make your voice count?</h3>
            <p className="text-slate-400 mt-2">Start swapping with IntentSwap — demo ready for hackathons and real integration.</p>
          </div>
          <div>
            <a href="/swap" className="px-6 py-3 rounded-2xl bg-linear-to-r from-cyan-500 to-indigo-600 text-black font-semibold">Get started</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/6 mt-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-cyan-400 to-indigo-600 flex items-center justify-center font-bold text-black">IS</div>
              <div>
                <div className="text-lg font-semibold">IntentSwap</div>
                <div className="text-slate-400 text-sm">BlockDAG-powered swaps</div>
              </div>
            </div>
            <p className="text-slate-400 mt-4 text-sm">© 2025 IntentSwap • Built by your team</p>
          </div>

          <div>
            <div className="flex gap-6">
              <div>
                <h5 className="font-semibold">Product</h5>
                <ul className="text-slate-400 text-sm mt-3 space-y-2">
                  <li>Swap</li>
                  <li>History</li>
                  <li>Dashboard</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold">Company</h5>
                <ul className="text-slate-400 text-sm mt-3 space-y-2">
                  <li>About</li>
                  <li>Docs</li>
                  <li>Support</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h5 className="font-semibold">Stay updated</h5>
            <p className="text-slate-400 text-sm mt-3">Subscribe for product updates</p>
            <form onSubmit={(e)=>e.preventDefault()} className="mt-3 flex gap-2">
              <input aria-label="Email" className="flex-1 px-3 py-2 rounded-md bg-[#061022] border border-white/6" placeholder="you@domain.com" />
              <button className="px-4 py-2 rounded-md bg-linear-to-r from-cyan-500 to-indigo-600 text-black">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-8 text-slate-400 text-sm">Made with ❤️ for hackathons. Demo UI only — replace web3 stubs for real swap.</div>
      </div>
    </footer>
  );
}
