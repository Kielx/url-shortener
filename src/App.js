import NewNav from "./components/NewNav";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Statistics from "./components/Statistics";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <>
            <NewNav />
            <Hero />

            <Statistics />
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
