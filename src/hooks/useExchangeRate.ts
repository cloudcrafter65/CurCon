import { useState, useEffect } from 'react';
import { fetchExchangeRate } from '../utils/api';
import type { ExchangeRateResponse } from '../types/types';

export function useExchangeRate(fromCurrency: string, toCurrency: string) {
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getExchangeRate = async () => {
      try {
        setIsLoading(true);
        const data: ExchangeRateResponse = await fetchExchangeRate(fromCurrency);
        setExchangeRate(data.conversion_rates[toCurrency]);
        setLastUpdated(new Date(data.time_last_update_utc).toLocaleString());
        setError(null);
      } catch (err) {
        setError('Failed to fetch exchange rates. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    getExchangeRate();
    const interval = setInterval(getExchangeRate, 60000);
    return () => clearInterval(interval);
  }, [fromCurrency, toCurrency]);

  return { exchangeRate, lastUpdated, isLoading, error };
}