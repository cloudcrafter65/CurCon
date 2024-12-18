import React from 'react';

interface CurrencyInputProps {
  label: string;
  value: string;
  currency: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

export function CurrencyInput({
  label,
  value,
  currency,
  onChange,
  readOnly = false,
}: CurrencyInputProps) {
  return (
    <div className="w-full">
      <label className="block text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
        {label}
      </label>
      <div className="relative rounded-md shadow-sm">
        <input
          type="number"
          inputMode="decimal"
          pattern="[0-9]*"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          readOnly={readOnly}
          className={`
            block w-full rounded-lg border-gray-300 dark:border-gray-600 
            pl-4 pr-16 focus:border-blue-500 focus:ring-blue-500 
            dark:bg-gray-700 dark:text-white text-lg h-14
            ${readOnly ? 'bg-gray-50 dark:bg-gray-600' : ''}
          `}
          placeholder="0.00"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
          <span className="text-gray-500 dark:text-gray-400 text-lg font-medium">{currency}</span>
        </div>
      </div>
    </div>
  );
}