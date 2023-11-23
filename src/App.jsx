import { useState } from 'react';
import './App.css';
import Header from './components/header.jsx';
import Service from './components/cta.jsx';
import Features from './components/features.jsx';
import Opinions from './components/opinions.jsx';
import Copy from './components/copyright.jsx';

function App() {

  return (
    <>
      <Header />
      <Service />
      <Features />
      <Opinions />
      <Copy />
    </>
  )
}

export default App
