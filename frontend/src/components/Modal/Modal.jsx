import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { modalVariants, backdropVariants } from '../../animations/variants';
import { createPortal } from 'react-dom';

const Modal = ({ isOpen, onClose, children, title }) => {
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="card w-full max-w-md"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">{title}</h3>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Content */}
              {children}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Modal;