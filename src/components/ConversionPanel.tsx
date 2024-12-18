import React, { useState } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { CurrencyInput } from './CurrencyInput';

interface ConversionPanelProps {
  amount: string;
  convertedAmount: string;
  fromCurrency: string;
  toCurrency: string;
  onAmountChange: (value: string) => void;
  onSwapCurrencies: () => void;
}

export function ConversionPanel({
  amount,
  convertedAmount,
  fromCurrency,
  toCurrency,
  onAmountChange,
  onSwapCurrencies,
}: ConversionPanelProps) {
  const [isRotating, setIsRotating] = useState(false);

  const handleSwap = () => {
    setIsRotating(true);
    onSwapCurrencies();
    setTimeout(() => setIsRotating(false), 500);
  };

  return (
    <div className="flex items-center gap-4">
      <CurrencyInput
        label={fromCurrency}
        value={amount}
        onChange={onAmountChange}
      />
      
      <button
        onClick={handleSwap}
        className="flex justify-center items-center bg-blue-100 hover:bg-blue-200 
                 dark:bg-blue-900 dark:hover:bg-blue-800 p-4 rounded-full 
                 transition-colors group"
        aria-label="Swap currencies"
      >
        <ArrowLeftRight 
          className={`text-blue-600 dark:text-blue-400 w-6 h-6 
                     transition-transform duration-500
                     ${isRotating ? 'rotate-180' : ''}`}
        />
      </button>

      <CurrencyInput
        label={toCurrency}
        value={convertedAmount}
        readOnly
      />
    </div>
  );
}