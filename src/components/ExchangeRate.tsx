import React from 'react';

interface ExchangeRateProps {
  fromCurrency: string;
  toCurrency: string;
  rate: number | null;
}

export function ExchangeRate({
  fromCurrency,
  toCurrency,
  rate,
}: ExchangeRateProps) {
  return (
    <div className="text-center mb-8">
      {rate && (
        <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
          1 {fromCurrency} = {rate.toFixed(4)} {toCurrency}
        </p>
      )}
    </div>
  );
}