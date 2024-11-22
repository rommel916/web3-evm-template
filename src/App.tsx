import React from 'react';
import Counter from '../src/views/Counter';
import TopBar from '../src/components/TopBar';
import SushiProvider from '../src/contexts/SushiProvider'
import OnboardWalletConnectorProvider from '../src/contexts/OnboardWalletConnector';
import './App.css';

function App() {
  return (
    <div className='app'>
      <OnboardWalletConnectorProvider>
        <SushiProvider>
          <header>
            <TopBar />
          </header>
          <main>
            <Counter />
          </main>
        </SushiProvider>
      </OnboardWalletConnectorProvider>

    </div>
  );
}

export default App;
