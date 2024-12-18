import React from 'react';

interface StandardAmountsProps {
  amounts: number[];
  onSelect: (amount: number) => void;
  exchangeRate: number | null;
  fromCurrency: string;
  toCurrency: string;
}

export function StandardAmounts({
  amounts,
  onSelect,
  exchangeRate,
  fromCurrency,
  toCurrency,
}: StandardAmountsProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Quick Convert</h3>
      <div className="space-y-2">
        {amounts.map((amount) => (
          <button
            key={amount}
            onClick={() => onSelect(amount)}
            className="w-full p-4 text-base bg-blue-50 dark:bg-blue-900 hover:bg-blue-100 
                     dark:hover:bg-blue-800 rounded-lg transition-colors text-blue-700 
                     dark:text-blue-300 flex justify-between items-center"
          >
            <span className="font-medium">{amount} {fromCurrency}</span>
            <span className="text-blue-600 dark:text-blue-400">
              ≈ {exchangeRate ? (amount * exchangeRate).toFixed(2) : '0.00'} {toCurrency}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}