import React from 'react';
import Sidenav from './components/Sidenav';
import Hero from "./components/Hero";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
     <Sidenav />
     <Hero/>
     <Work/>
     <Projects/>
     <Contact/>
   </div>
  
  );
}

export default App;


