import React from 'react';

interface FooterProps {
  lastUpdated: string;
  isLoading: boolean;
}

export function Footer({ lastUpdated, isLoading }: FooterProps) {
  return (
    <footer className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
      {isLoading ? 'Fetching latest rates...' : `Last updated: ${lastUpdated}`}
    </footer>
  );
}