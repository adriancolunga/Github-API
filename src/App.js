import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./components/Search";
import Repositories from "./components/Repositories";
import Organizations from "./components/Organizations";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/repos" component={Repositories} />
          <Route path="/orgs" component={Organizations} />
          <Route exact path="/" component={Search} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
