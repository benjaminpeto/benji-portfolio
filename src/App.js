import React, {useState,useEffect} from 'react';
import {  Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from './components/Footer/Footer';

function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    }, [isLoading]);

  if (isLoading) {
    return null;
  }

  return (
    <main>
      <Navbar />
      <Switch>
          <Route path="/" component={About} exact />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </main>
  );
}

export default App;