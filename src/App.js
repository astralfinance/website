import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Back from './assets/back.jpg';
import Example from './components/navbar';
import Header from './components/header';
import Faq from './components/faq';
import Tokenomics from './components/tokenomics';
import Nfts from './components/nfts';
function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
    <Example /><br />
    {/* <img src={ Back } /> */}

      </header>
    <Switch>
      <Route exact path="/">
    <Header />
    </Route>

      <Route exact path="/faq">
        <Faq />
        </Route>
        <Route exact path="/tokenomics">
          <Tokenomics />
        </Route>
        <Route exact path="/nfts">
          <Nfts />
        </Route>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
