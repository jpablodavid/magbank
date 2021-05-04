import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cartao from './components/Cartao';
import Cards from './components/Cards';
import Institutional from './components/Institutional';
import './App.scss';

import posts from './data/posts';

const App = () => (

  <div className="App">
    <Navbar/>

    <Hero/>

    <Cartao/>

    <Cards posts={posts} />

    <Institutional/>
  </div>

);


export default App;
