
export const MOCK_TOKENS = [
  {
    symbol: 'ETH',
    name: 'Ethereum',
    address: '0x0000000000000000000000000000000000000000',
    decimals: 18,
    logo: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/color/eth.svg',
    balance: '10.5',
    price: 3500.75,
  },
  {
    symbol: 'USDC',
    name: 'USD Coin',
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    decimals: 6,
    logo: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/color/usdc.svg',
    balance: '50000.00',
    price: 1.00,
  },
  {
    symbol: 'WBTC',
    name: 'Wrapped Bitcoin',
    address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    decimals: 8,
    logo: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/color/wbtc.svg',
    balance: '0.5',
    price: 65000.00,
  },
  {
    symbol: 'DAG',
    name: 'Constellation',
    address: '0xa3250D4e21bBC406565A71A4F1385451d4d03612',
    decimals: 8,
    logo: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/color/dag.svg',
    balance: '100000',
    price: 0.04,
  },
  {
    symbol: 'LINK',
    name: 'Chainlink',
    address: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
    decimals: 18,
    logo: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/color/link.svg',
    balance: '250',
    price: 18.50,
  },
    {
    symbol: 'UNI',
    name: 'Uniswap',
    address: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
    decimals: 18,
    logo: 'https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/svg/color/uni.svg',
    balance: '1500',
    price: 11.20,
  },
];

export const MOCK_DASHBOARD_DATA = {
  walletBalance: 125678.90,
  balanceChange: 2.5, // percentage
  tradingVolume: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [120, 150, 210, 180, 250, 300],
  },
  trendingTokens: [
    { ...MOCK_TOKENS[3], change: 15.2 }, // DAG
    { ...MOCK_TOKENS[4], change: -3.1 }, // LINK
    { ...MOCK_TOKENS[5], change: 8.5 }, // UNI
  ],
  liquiditySnapshots: [
    { pair: 'ETH/USDC', tvl: 150000000, apy: 12.5 },
    { pair: 'WBTC/ETH', tvl: 85000000, apy: 8.2 },
  ]
};
