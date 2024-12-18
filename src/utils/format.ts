export function formatAmount(amount: number, decimals: number = 2): string {
  return amount.toFixed(decimals);
}

export function parseAmount(value: string): number {
  const parsed = parseFloat(value);
  return isNaN(parsed) ? 0 : parsed;
}