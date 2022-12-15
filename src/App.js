import React from 'react';
import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Calculator from './components/Calculator.js';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import Quote from './pages/Quote.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
  }

  render() {
    return (
      <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home text={this.props}/>}/>
        <Route path='/calculator' element={<Calculator />}/>
        <Route path='/quote' element={<Quote />}/>
      </Routes>
      </BrowserRouter>
      </>
    );
  }
}

export default App;
