import React from "react";
import { motion } from "framer-motion";

// (D) Token logo URLs - add or remove as needed
// You can replace these with your own logos later
const tokens = ["BTC", "ETH", "SOL", "USDT", "BNB", "ADA", "XRP", "DOGE", "INT", "BDAG"]

export default function ScrollingCoins() {
  return (
    <div className="w-full overflow-hidden py-4 select-none">
      <motion.div
        className="flex gap-10 whitespace-nowrap text-black"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      >
        {[...tokens, ...tokens].map((coin, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.15, rotateY: 8 }} // 3D tilt on hover
            className="coin-base text-black px-1 py-1 bg-amber-300 rounded-full "
          >
            {/* <img src={coin.logo} alt={coin.symbol} className="coin-img" /> */}
            {coin}
          </motion.div>
        ))}
      </motion.div>
      
    </div>
  );
}
