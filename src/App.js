import NewNav from "./components/NewNav";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Statistics from "./components/Statistics";
import Boost from "./components/Boost";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <>
            <NewNav />
            <Hero />
            <Statistics />
            <Boost />
            <Footer />
          </>
        </Route>
        <Route path="*">
          <h1>Oooops... Requested page was not found</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
