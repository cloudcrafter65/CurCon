import React from 'react';

interface CurrencyInputProps {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

export function CurrencyInput({
  label,
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

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <input
        type="text"
        inputMode="decimal"
        value={value}
        onChange={handleChange}
        readOnly={readOnly}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 
                  focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700
                  dark:text-white"
      />
    </div>
  );
}