import React from 'react';
import Pizza from './components/Pizza';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/style.scss';

export default function App() {
  return (
    <div>
      <Header />
      <div className="flex-box">
        <Pizza />
        <Footer />
      </div>
    </div>
  )
}
