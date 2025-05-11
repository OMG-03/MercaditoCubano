import React from 'react';
import './styles.css';
import MercaditoHeader from './components/MercaditoHeader';
import MercaditoHero from './components/MercaditoHero';
import ProductList from './components/ProductList';
import PaymentMethods from './components/PaymentMethods';
import PickupPoints from './components/PickupPoints';
import AboutSection from './components/AboutSection';
import ContactForm from './components/ContactForm';
import MercaditoFooter from './components/MercaditoFooter';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <MercaditoHeader />
      <main className="flex-grow">
        <MercaditoHero />
        <ProductList />
        <PaymentMethods />
        <PickupPoints />
        <AboutSection />
        <ContactForm />
      </main>
      <MercaditoFooter />
    </div>
  );
};

export default App;