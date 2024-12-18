import React from 'react';

interface CurrencyInputProps {
  currencyCode: string;
  currencyName: string;
  value: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

export function CurrencyInput({
  currencyCode,
  currencyName,
  value,
  onChange,
  readOnly,
}: CurrencyInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and decimal point
    if (/^\d*\.?\d*$/.test(value)) {
      onChange?.(value);
    }
  };

  const handleFocus = () => {
    // Clear the input value when focused
    onChange?.('');
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {currencyName} ({currencyCode})
      </label>
      <input
        type="text"
        inputMode="decimal"
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        readOnly={readOnly}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
                  focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700
                  dark:text-white"
      />
    </div>
  );
}