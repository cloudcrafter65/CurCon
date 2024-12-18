const API_KEY = '8d5ffcefd5ff7af390c99063'; // Note: In production, use environment variables
const BASE_URL = 'https://v6.exchangerate-api.com/v6';

export async function fetchExchangeRate(baseCurrency: string) {
  try {
    const response = await fetch(`${BASE_URL}/${API_KEY}/latest/${baseCurrency}`);
    if (!response.ok) {
      throw new Error('Failed to fetch exchange rates');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    throw error;
  }
}