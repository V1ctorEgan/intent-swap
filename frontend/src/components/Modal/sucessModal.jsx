import React from 'react';
import { motion } from 'framer-motion';
import { successVariants } from '../../animations/variants';
import Modal from './Modal';

const SuccessModal = ({ isOpen, onClose, transaction }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Swap Successful! 🎉">
      <div className="text-center py-6">
        {/* Animated Checkmark */}
        <motion.div
          variants={successVariants}
          initial="hidden"
          animate="visible"
          className="w-20 h-20 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center"
        >
          <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>

        {/* Transaction Details */}
        <p className="text-lg mb-2">You Swapped</p>
        <p className="text-2xl font-bold text-gradient mb-6">
          {transaction?.from} → {transaction?.to}
        </p>

        <div className="bg-dark-bg rounded-lg p-4 mb-6 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">Transaction Hash</span>
            <span className="font-mono">{transaction?.hash?.slice(0, 10)}...</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Fee</span>
            <span>{transaction?.fee} BDAG</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button className="btn-secondary flex-1">
            View on Explorer
          </button>
          <button onClick={onClose} className="btn-primary flex-1">
            Done
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default SuccessModal;