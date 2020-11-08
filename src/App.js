import logo from './logo.svg';
import './App.css';

import Banner from './components/Banner/Banner'
import Navigation from './components/Navigation/Navigation'
import HeroOne from './components/Heros/HeroOne'
import HeroTwo from './components/Heros/HeroTwo'
import SolutionJourney from './components/Sections/SolutionJourney'
import Covid from './components/Sections/Covid'
import RequestDemo from './components/Sections/RequestDemo'
import Trending from './components/Sections/Trending'
import Footer from './components/Sections/Footer'

function App() {
  return (
    <div className="App">
      <Banner />
      <Navigation />
      <HeroOne />
      <HeroTwo />
      <SolutionJourney />
      <Covid />
      <RequestDemo />
      <Trending />
      <Footer />
    </div>
  );
}

export default App;
