import React from 'react';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';


import Header from './components/Header/Header.components';
import Navigation from './components/Navigation/Navigation.components'
import Directory from './components/Directory/Directory.components'
import MidSection from './components/Mid-Section/Mid-Section.components';
import About from './components/About/About.components';
import Contact from './components/Contact/Contact.components';
import Footer from './components/Footer/Footer.components'
import Checkout from './pages/checkout.pages';
import { Switch, Route } from "react-router-dom";
function App() {

  library.add(fab);
  return (
    <div className="App">

      <Header />
      <Navigation />
      <Switch>
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
      <Directory />
      <MidSection />
      <About />
      <Contact />
      <Footer />




    </div >
  );
}

export default App;
