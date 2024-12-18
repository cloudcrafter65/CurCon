import { COMMON_CURRENCIES } from '../constants/currency';

interface DefaultCurrencySettingsProps {
  defaultFrom: string;
  defaultTo: string;
  onDefaultFromChange: (currency: string) => void;
  onDefaultToChange: (currency: string) => void;
}

export function DefaultCurrencySettings({
  defaultFrom,
  defaultTo,
  onDefaultFromChange,
  onDefaultToChange,
}: DefaultCurrencySettingsProps) {
  return (
    <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
        Default Currency Settings
      </h3>
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
            Default From
          </label>
          <select
            value={defaultFrom}
            onChange={(e) => onDefaultFromChange(e.target.value)}
            className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 
                     dark:border-gray-600 rounded-md shadow-sm focus:outline-none 
                     focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-gray-100"
          >
            {Object.entries(COMMON_CURRENCIES).map(([code, name]) => (
              <option key={code} value={code} className="text-gray-900 dark:text-gray-100">
                {code} - {name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label className="block text-sm text-gray-600 dark:text-gray-400 mb-2">
            Default To
          </label>
          <select
            value={defaultTo}
            onChange={(e) => onDefaultToChange(e.target.value)}
            className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 
                     dark:border-gray-600 rounded-md shadow-sm focus:outline-none 
                     focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-gray-100"
          >
            {Object.entries(COMMON_CURRENCIES).map(([code, name]) => (
              <option key={code} value={code} className="text-gray-900 dark:text-gray-100">
                {code} - {name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
} 