export const CURRENCY_CONFIGS = {
  // Group 1: High-value currencies (roughly 1:1 or stronger vs USD)
  USD: [1, 5, 10, 50, 100, 500],
  EUR: [1, 5, 10, 50, 100, 500],
  GBP: [1, 5, 10, 50, 100, 500],
  CHF: [1, 5, 10, 50, 100, 500],
  
  // Group 2: Medium-high value currencies (roughly 1:1.2-2 vs USD)
  AUD: [2, 10, 20, 50, 100, 500],
  CAD: [2, 10, 20, 50, 100, 500],
  SGD: [2, 10, 20, 50, 100, 500],
  NZD: [2, 10, 20, 50, 100, 500],
  
  // Group 3: Medium value currencies (roughly 1:3-30 vs USD)
  BRL: [5, 20, 50, 100, 500, 1000],
  SAR: [5, 20, 50, 100, 500, 1000],
  AED: [5, 20, 50, 100, 500, 1000],
  CNY: [10, 50, 100, 500, 1000, 5000],
  MXN: [20, 50, 100, 500, 1000, 5000],
  HKD: [10, 50, 100, 500, 1000, 5000],
  ZAR: [20, 50, 100, 500, 1000, 5000],
  THB: [50, 100, 500, 1000, 5000, 10000],
  
  // Group 4: High-denomination currencies (roughly 1:50+ vs USD)
  JPY: [100, 500, 1000, 5000, 10000, 50000],
  INR: [100, 500, 1000, 5000, 10000, 50000],
  KRW: [1000, 5000, 10000, 50000, 100000, 500000],
  RUB: [100, 500, 1000, 5000, 10000, 50000],
} as const;

// Default fallback amounts
export const DEFAULT_AMOUNTS = [10, 50, 100, 500, 1000, 5000];

export const DEFAULT_CURRENCIES = {
  from: 'USD',
  to: 'SGD',
} as const;

export const COMMON_CURRENCIES: Record<string, string> = {
  USD: 'US Dollar',
  EUR: 'Euro',
  GBP: 'British Pound',
  JPY: 'Japanese Yen',
  AUD: 'Australian Dollar',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  CNY: 'Chinese Yuan',
  INR: 'Indian Rupee',
  NZD: 'New Zealand Dollar',
  SGD: 'Singapore Dollar',
  HKD: 'Hong Kong Dollar',
  KRW: 'South Korean Won',
  MXN: 'Mexican Peso',
  BRL: 'Brazilian Real',
  AED: 'UAE Dirham',
  SAR: 'Saudi Riyal',
  RUB: 'Russian Ruble',
  ZAR: 'South African Rand',
  THB: 'Thai Baht'
};