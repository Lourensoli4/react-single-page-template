import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Contact from "./Contact";
import Other from "./Other";

function App() {
  return (
    <div className="">
      <Router>
        <header className="">
            <Navigation />
        </header>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Switch>
          <Route path="/other">
            <Other />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
