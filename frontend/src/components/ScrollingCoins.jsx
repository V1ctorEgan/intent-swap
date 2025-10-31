import React from "react";
import { motion } from "framer-motion";

const tokens = ["BTC", "ETH", "SOL", "USDT", "BNB", "ADA", "XRP", "DOGE", "INT", "BDAG"];

export default function ScrollingCoins() {
  return (
    <div className="w-full overflow-hidden py-4 select-none relative">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      >
        {[...tokens, ...tokens].map((coin, index) => (
          <span
            key={index}
            className="mx-6 text-[1.25rem] font-semibold tracking-wide opacity-90 hover:opacity-100 transition-all duration-200"
          >
            {coin}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
