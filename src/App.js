import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Hero from './Components/Hero/Hero';
import ScrollToTop from './Components/Navbar/ScrollToTop'
import Trade from './Components/Trade/Trade';
import CoinDetail from './Components/Trade/CoinDetail/CoinDetail';
import Features from './Components/Features/Features'
import Team from './Components/Team/Team'
import Faq from './Components/FAQ/Faq';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <section className="wrapper">
      <Router>

        <ScrollToTop />
        <Navbar />
        
        <Switch>

          <Route exact path='/'>
            <Hero />
            <Trade />
            <Features />
            <About />
            <Team />
            <Contact />
            <Faq />
          </Route>

          <Route exact path="/:coinId">
            <CoinDetail />
          </Route>

          <Route path="*">
            <h1>Not found</h1>
          </Route>

        </Switch>

        <Footer />

      </Router>
    </section>
  );
}

export default App;
