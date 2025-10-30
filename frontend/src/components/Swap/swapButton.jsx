import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { buttonTapVariants } from '../../animations/variants';

const SwapButton = ({ fromToken, toToken }) => {
  const [isLoading, setIsLoading] = useState(false);

  const isDisabled = !fromToken.amount || isLoading;

  const handleSwap = async () => {
    setIsLoading(true);
    // Swap logic here
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <motion.button
      variants={buttonTapVariants}
      whileTap="tap"
      onClick={handleSwap}
      disabled={isDisabled}
      className="btn-primary w-full mt-6 flex items-center justify-center gap-2"
    >
      {isLoading ? (
        <>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
          />
          <span>Swapping...</span>
        </>
      ) : (
        <span>{isDisabled ? 'Enter Amount' : 'Swap Now'}</span>
      )}
    </motion.button>
  );
};

export default SwapButton;