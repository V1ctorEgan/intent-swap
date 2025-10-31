import React from "react";
import { motion } from "framer-motion";

export default function ScrollingBackedBy() {
  const tags = [
    "Backed by BlockDAG",
    "Decentralized Liquidity",
    "Secure Settlement",
    "Audited Protocol",
    "Ultra Fast Finality",
    "DeFi Composable",
    "Cross Chain Future",
  ];

  return (
    <div className="overflow-hidden py-5 bg-transparent">
      <motion.div
        className="flex gap-10 whitespace-nowrap text-slate-400 text-sm font-medium tracking-wide"
        animate={{ x: ["0%", "100%"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      >
        {[...tags, ...tags].map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </motion.div>
    </div>
  );
}
