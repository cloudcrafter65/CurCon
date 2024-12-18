import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ConversionPanel } from './components/ConversionPanel';
import { StandardAmounts } from './components/StandardAmounts';
import { ExchangeRate } from './components/ExchangeRate';
import { useExchangeRate } from './hooks/useExchangeRate';
import { STANDARD_AMOUNTS, DEFAULT_CURRENCIES } from './constants/currency';
import { formatAmount, parseAmount } from './utils/format';

function App() {
  const [amount, setAmount] = useState('1');
  const [fromCurrency, setFromCurrency] = useState(DEFAULT_CURRENCIES.from);
  const [toCurrency, setToCurrency] = useState(DEFAULT_CURRENCIES.to);
  
  const { exchangeRate, lastUpdated, isLoading, error } = useExchangeRate(fromCurrency, toCurrency);

  const convertedAmount = exchangeRate ? formatAmount(parseAmount(amount) * exchangeRate) : '0.00';

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <Layout>
      <Header />
      
      <ExchangeRate
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
        rate={exchangeRate}
      />

      {error ? (
        <div className="bg-red-50 dark:bg-red-900/50 text-red-700 dark:text-red-300 p-4 rounded-md text-sm">
          {error}
        </div>
      ) : (
        <div className="space-y-8">
          <ConversionPanel
            amount={amount}
            convertedAmount={convertedAmount}
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
            onAmountChange={setAmount}
            onSwapCurrencies={handleSwapCurrencies}
          />

          <StandardAmounts
            amounts={STANDARD_AMOUNTS}
            onSelect={(value) => setAmount(value.toString())}
            exchangeRate={exchangeRate}
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
          />
        </div>
      )}

      <Footer lastUpdated={lastUpdated} isLoading={isLoading} />
    </Layout>
  );
}

export default App;