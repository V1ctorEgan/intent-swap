
import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

const Button = ({ children, onClick, className = '', variant = 'primary', isLoading = false, disabled = false, ...props }) => {
  const baseClasses = 'px-6 py-3 font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2';

  const variantClasses = {
    primary: 'bg-primary text-background hover:bg-opacity-80 shadow-primary-glow focus:ring-primary',
    secondary: 'bg-secondary text-white hover:bg-opacity-80 shadow-secondary-glow focus:ring-secondary',
    tertiary: 'bg-surface/50 border border-glass-border text-text-primary hover:bg-surface/80 hover:border-primary/50 focus:ring-primary',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="animate-spin" size={20} />
          <span>Processing...</span>
        </>
      ) : (
        children
      )}
    </motion.button>
  );
};

export default Button;
