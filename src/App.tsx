import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { TodosPage } from './pages/TodosPage';
import { AboutPage } from './pages/AboutPage';

function App() {
  return <BrowserRouter>
    <Navbar />
    <div className='container'>
      <Routes>
        <Route Component={TodosPage} path='/' />
        <Route Component={AboutPage} path='/about'/>
      </Routes>
    </div>
  </BrowserRouter>
}

export default App;
