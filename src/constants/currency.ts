export const STANDARD_AMOUNTS = [10, 25, 30, 50, 75, 100] as const;

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