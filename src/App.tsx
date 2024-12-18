import { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ConversionPanel } from './components/ConversionPanel';
import { StandardAmounts } from './components/StandardAmounts';
import { ExchangeRate } from './components/ExchangeRate';
import { useExchangeRate } from './hooks/useExchangeRate';
import { DEFAULT_CURRENCIES } from './constants/currency';
import { formatAmount, parseAmount } from './utils/format';
import { DefaultCurrencySettings } from './components/DefaultCurrencySettings';

function App() {
  const [amount, setAmount] = useState('1');
  const [fromCurrency, setFromCurrency] = useState(() => {
    return localStorage.getItem('defaultFromCurrency') || DEFAULT_CURRENCIES.from;
  });
  const [toCurrency, setToCurrency] = useState(() => {
    return localStorage.getItem('defaultToCurrency') || DEFAULT_CURRENCIES.to;
  });
  const [defaultFromCurrency, setDefaultFromCurrency] = useState(() => {
    return localStorage.getItem('defaultFromCurrency') || DEFAULT_CURRENCIES.from;
  });
  const [defaultToCurrency, setDefaultToCurrency] = useState(() => {
    return localStorage.getItem('defaultToCurrency') || DEFAULT_CURRENCIES.to;
  });
  
  const { exchangeRate, lastUpdated, isLoading, error } = useExchangeRate(fromCurrency, toCurrency);

  const convertedAmount = exchangeRate ? formatAmount(parseAmount(amount) * exchangeRate) : '0.00';

  const handleSwapCurrencies = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  useEffect(() => {
    localStorage.setItem('defaultFromCurrency', defaultFromCurrency);
    localStorage.setItem('defaultToCurrency', defaultToCurrency);
  }, [defaultFromCurrency, defaultToCurrency]);

  useEffect(() => {
    const savedFromCurrency = localStorage.getItem('defaultFromCurrency');
    const savedToCurrency = localStorage.getItem('defaultToCurrency');
    
    if (savedFromCurrency) setDefaultFromCurrency(savedFromCurrency);
    if (savedToCurrency) setDefaultToCurrency(savedToCurrency);
  }, []);

  const handleDefaultFromChange = (currency: string) => {
    setDefaultFromCurrency(currency);
    setFromCurrency(currency);
  };

  const handleDefaultToChange = (currency: string) => {
    setDefaultToCurrency(currency);
    setToCurrency(currency);
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
            onSelect={(value) => setAmount(value.toString())}
            exchangeRate={exchangeRate}
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
          />
        </div>
      )}

      <DefaultCurrencySettings
        defaultFrom={defaultFromCurrency}
        defaultTo={defaultToCurrency}
        onDefaultFromChange={handleDefaultFromChange}
        onDefaultToChange={handleDefaultToChange}
      />

      <Footer lastUpdated={lastUpdated} isLoading={isLoading} />
    </Layout>
  );
}

export default App;