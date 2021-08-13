import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <>
            <Navbar></Navbar>
            <h1>Hello from index</h1>
            <header className="bg-gray-50 w-full h-36"></header>
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
