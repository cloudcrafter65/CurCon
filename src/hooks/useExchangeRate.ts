import { useState, useEffect, useCallback } from 'react';
import { fetchExchangeRate } from '../utils/api';
import type { ExchangeRateResponse } from '../types/types';

export function useExchangeRate(fromCurrency: string, toCurrency: string) {
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const [nextUpdate, setNextUpdate] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getExchangeRate = useCallback(async () => {
    try {
      setIsLoading(true);
      const data: ExchangeRateResponse = await fetchExchangeRate(fromCurrency);
      setExchangeRate(data.conversion_rates[toCurrency]);
      setLastUpdated(data.time_last_update_utc);
      setNextUpdate(data.time_next_update_utc);
      setError(null);
    } catch (err) {
      setError('Failed to fetch exchange rates. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    getExchangeRate();
  }, [fromCurrency, toCurrency, getExchangeRate]);

  useEffect(() => {
    const checkAndUpdateRates = () => {
      if (nextUpdate) {
        const nextUpdateTime = new Date(nextUpdate).getTime();
        const currentTime = new Date().getTime();
        
        if (currentTime >= nextUpdateTime) {
          getExchangeRate();
        }
      }
    };

    // Check every minute if we need to update
    const interval = setInterval(checkAndUpdateRates, 60000);
    return () => clearInterval(interval);
  }, [nextUpdate, getExchangeRate]);

  return { exchangeRate, lastUpdated, nextUpdate, isLoading, error };
}