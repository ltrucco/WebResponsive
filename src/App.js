import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div >
      <Router>
        <Sidebar/>
        <Navbar/>
      </Router>
      
    </div>
  );
}

export default App;
