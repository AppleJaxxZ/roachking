import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

// import Header from "./components/Header/Header.components";
import Navigation from "./components/Navigation/Navigation.components";
import Directory from "./components/Directory/Directory.components";
import MidSection from "./components/Mid-Section/Mid-Section.components";
import About from "./components/About/About.components";
import Contact from "./components/Contact/Contact.components";
import Footer from "./components/Footer/Footer.components";
import Checkout from "./pages/checkout.pages";
import Success from "./pages/success.pages";
import Canceled from "./pages/canceled.pages";
import { Switch, Route } from "react-router-dom";
import FirstSection from "./components/first-section/firstSection.components";
import MobileNav from "./components/mobile-navbar/MobileNav.components";
function App() {
  library.add(fab, faEnvelope, faPhone);
  return (
    <div>
      {/* <Header /> */}
      <MobileNav />
      <Navigation />
      <Switch>
        <Route exact path="/checkout" component={Checkout} />
        <Route path="/success" component={Success} />
        <Route path="/canceled" component={Canceled} />
      </Switch>
      <FirstSection />
      <Directory />
      <MidSection />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
