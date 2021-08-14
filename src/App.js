import NewNav from "./components/NewNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LogoIllustration from "./images/illustration-working.svg";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <>
            <NewNav />
            <div className="bg-gray-50 w-full h-full  ">
              <img src={LogoIllustration} className="w-full pl-20" alt="Logo" />
            </div>
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
