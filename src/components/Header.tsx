import React from 'react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Currency Converter</h1>
      <ThemeToggle />
    </div>
  );
}