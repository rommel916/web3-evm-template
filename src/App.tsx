import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Counter from '../src/views/Counter';
import Mark from '../src/views/Mark';
import TopBar from '../src/components/TopBar';
import Footer from '../src/components/Footer';
import SushiProvider from '../src/contexts/SushiProvider'
import OnboardWalletConnectorProvider from '../src/contexts/OnboardWalletConnector';
import styles from './App.css';

const App = () => {
  const Layout = () => {
    return <div className={styles.container}>
      <TopBar />
      <div>
        <Routes>
          <Route path="/" element={
            <Counter />
          } />
          <Route path="/mark" element={
            <Mark />
          } />
        </Routes>
      </div>
      <Footer />
    </div>
  };

  return (
    <OnboardWalletConnectorProvider>
      <SushiProvider>
        <Layout />
      </SushiProvider>
    </OnboardWalletConnectorProvider>
  );
};

export default App;
