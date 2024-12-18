import { CURRENCY_CONFIGS, DEFAULT_AMOUNTS } from '../constants/currency';

interface StandardAmountsProps {
  onSelect: (amount: number) => void;
  exchangeRate: number | null;
  fromCurrency: string;
  toCurrency: string;
}

export function StandardAmounts({
  onSelect,
  exchangeRate,
  fromCurrency,
  toCurrency,
}: StandardAmountsProps) {
  const standardAmounts = CURRENCY_CONFIGS[fromCurrency as keyof typeof CURRENCY_CONFIGS] || DEFAULT_AMOUNTS;

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Quick Convert</h3>
      <div className="space-y-2">
        {standardAmounts.map((amount) => (
          <button
            key={amount}
            onClick={() => onSelect(amount)}
            className="w-full p-4 text-base bg-blue-50 dark:bg-blue-900 hover:bg-blue-100 
                     dark:hover:bg-blue-800 rounded-lg transition-colors text-blue-700 
                     dark:text-blue-300 flex justify-between items-center"
          >
            <span className="font-medium">
              {amount.toLocaleString()} {fromCurrency}
            </span>
            <span className="text-blue-600 dark:text-blue-400">
              ≈ {exchangeRate ? (amount * exchangeRate).toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2
                }) : '0.00'} {toCurrency}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}