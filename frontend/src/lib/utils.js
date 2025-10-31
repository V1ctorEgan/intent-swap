
/**
 * Shortens a wallet address.
 * e.g., "0x1234567890abcdef1234567890abcdef12345678" -> "0x1234...5678"
 * @param {string} address - The full wallet address.
 * @param {number} chars - The number of characters to show at the start and end.
 * @returns {string} The shortened address.
 */
export const shortenAddress = (address, chars = 4) => {
  if (!address) return '';
  const prefix = address.substring(0, chars + 2);
  const suffix = address.substring(address.length - chars);
  return `${prefix}...${suffix}`;
};

/**
 * Formats a number to a string with a specified number of decimal places.
 * @param {string | number} num - The number to format.
 * @param {number} decimals - The maximum number of decimal places.
 * @returns {string} The formatted number string.
 */
export const formatNumber = (num, decimals = 4) => {
  const value = Number(num);
  if (isNaN(value)) return '0.00';
  
  // Use Intl.NumberFormat for better localization and formatting
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: decimals,
  }).format(value);
};

/**
 * Formats a number as currency.
 * @param {string | number} num - The number to format.
 * @returns {string} The formatted currency string.
 */
export const formatCurrency = (num) => {
  const value = Number(num);
  if (isNaN(value)) return '$0.00';
  
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
};
