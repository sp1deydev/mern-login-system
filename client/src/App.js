import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import Routers from './routers/Routers';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderBar from './components/header';


function App() {
  
  return (
    <Router>
      <div>
        <HeaderBar/>
        <Routers />
      </div>
    </Router>
  );
}

export default App;
