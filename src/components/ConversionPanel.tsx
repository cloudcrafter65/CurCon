import { useState } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { CurrencyInput } from './CurrencyInput';
import { COMMON_CURRENCIES } from '../constants/currency';

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
    <div className="flex items-end gap-2 sm:gap-4">
      <div className="flex-1">
        <CurrencyInput
          currencyCode={fromCurrency}
          currencyName={COMMON_CURRENCIES[fromCurrency]}
          value={amount}
          onChange={onAmountChange}
        />
      </div>
      
      <div className="mb-2">
        <button
          onClick={handleSwap}
          className="flex justify-center items-center bg-blue-100 hover:bg-blue-200 
                   dark:bg-blue-900 dark:hover:bg-blue-800 p-2 rounded-full 
                   transition-colors group"
          aria-label="Swap currencies"
        >
          <ArrowLeftRight 
            className={`text-blue-600 dark:text-blue-400 w-4 h-4 
                       transition-transform duration-500
                       ${isRotating ? 'rotate-180' : ''}`}
          />
        </button>
      </div>

      <div className="flex-1">
        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-600 dark:text-gray-400">
            {COMMON_CURRENCIES[toCurrency]} ({toCurrency})
          </label>
          <div className="flex items-center p-2 rounded-lg border border-gray-300 
                        dark:border-gray-700 bg-white dark:bg-gray-800">
            <span className="text-lg text-gray-900 dark:text-gray-100">
              {convertedAmount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}