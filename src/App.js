import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header"
import Contact from "./Contact";
import Other from "./Other";
import Footer from "./Footer";

function App() {
  return (
    <div className="">
      <Router>
        
        <Header />

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

          <Footer />

        </Router>
    </div>
  );
}

export default App;
