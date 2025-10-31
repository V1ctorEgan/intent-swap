
import { MOCK_TOKENS, MOCK_DASHBOARD_DATA } from './mockData';

// Simulates network delay
const delay = (ms) => new Promise(res => setTimeout(res, ms));

export async function getSwapData() {
  await delay(500); // Simulate API call latency
  return { tokens: MOCK_TOKENS };
}

export async function getDashboardData() {
  await delay(800); // Simulate a slower API call
  return { dashboardData: MOCK_DASHBOARD_DATA };
}

// This loader will always throw an error to demonstrate the errorElement
export async function brokenLoader() {
  await delay(300);
  throw new Response("Resource Not Found", {
    status: 404,
    statusText: "The data you requested could not be located on our servers.",
  });
}
