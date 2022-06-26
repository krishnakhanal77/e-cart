import React from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Card from './components/Card';
import CardDetails from './components/CardDetails';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Card />} />
        <Route path='/cart' element={<CardDetails />} />
      </Routes>
    </>
  );
}

export default App;
