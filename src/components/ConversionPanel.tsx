import React from 'react';
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
  return (
    <div className="grid grid-cols-[1fr,auto,1fr] gap-6 items-center">
      <CurrencyInput
        label="Amount"
        value={amount}
        currency={fromCurrency}
        onChange={onAmountChange}
      />
      
      <button
        onClick={onSwapCurrencies}
        className="flex justify-center items-center bg-blue-100 hover:bg-blue-200 
                 dark:bg-blue-900 dark:hover:bg-blue-800 p-4 rounded-full 
                 transition-colors group mt-6"
        aria-label="Swap currencies"
      >
        <ArrowLeftRight className="text-blue-600 dark:text-blue-400 w-6 h-6 
                                transition-transform group-hover:scale-110" />
      </button>

      <CurrencyInput
        label="Converted Amount"
        value={convertedAmount}
        currency={toCurrency}
        readOnly
      />
    </div>
  );
}