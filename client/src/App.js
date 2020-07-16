import React from 'react';
import './App.css';
import Home from "./Components/Home.js"
import About from "./Components/About.js"
import Phil from "./Components/Phil.js"
import Gallery from "./Components/Gallery.js"
import {Switch, Route} from "react-router"
import Header from "./Components/Header.js"
import Contact from "./Components/Contact.js"
import Footer from "./Components/Footer.js"

function App() {
  return (
    <div id="bodyContainer">
      <Header />
      <Switch>
        <Route exact path="/" component= {Home} />
        <Route path="/about" component ={About} />
        <Route path="/philosophy" component={Phil}/>
        <Route path ="/gallery" component={Gallery}/>
        <Route path="/contact" component={Contact}/>


      </Switch>
      <Footer />
    </div>
  );
}

export default App;
