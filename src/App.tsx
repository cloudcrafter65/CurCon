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
  
  const { 
    exchangeRate, 
    lastUpdated, 
    nextUpdate, 
    isLoading, 
    error 
  } = useExchangeRate(fromCurrency, toCurrency);

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
      
      <div className="space-y-6">
        <section>
          <ExchangeRate
            fromCurrency={fromCurrency}
            toCurrency={toCurrency}
            rate={exchangeRate}
          />
        </section>

        {error ? (
          <div className="bg-red-50 dark:bg-red-900/50 text-red-700 dark:text-red-300 p-4 rounded-md text-sm">
            {error}
          </div>
        ) : (
          <div className="space-y-6">
            <section className="bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700 rounded-xl p-8 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent dark:from-blue-900/20 rounded-xl" />
              <div className="relative">
                <ConversionPanel
                  amount={amount}
                  convertedAmount={convertedAmount}
                  fromCurrency={fromCurrency}
                  toCurrency={toCurrency}
                  onAmountChange={setAmount}
                  onSwapCurrencies={handleSwapCurrencies}
                />
              </div>
            </section>

            <section className="pt-2">
              <StandardAmounts
                onSelect={(value) => setAmount(value.toString())}
                exchangeRate={exchangeRate}
                fromCurrency={fromCurrency}
                toCurrency={toCurrency}
              />
            </section>
          </div>
        )}

        <section className="pt-2">
          <DefaultCurrencySettings
            defaultFrom={defaultFromCurrency}
            defaultTo={defaultToCurrency}
            onDefaultFromChange={handleDefaultFromChange}
            onDefaultToChange={handleDefaultToChange}
          />
        </section>

        <Footer 
          lastUpdated={lastUpdated} 
          nextUpdate={nextUpdate} 
          isLoading={isLoading} 
        />
      </div>
    </Layout>
  );
}

export default App;