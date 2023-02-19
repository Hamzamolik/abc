import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  let pagesize=5
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/businessen"><News key='businessen' pagesize={pagesize} category="businessen" country="in" /></Route>
          <Route exact path="/entertainment"><News key='entertainment' pagesize={pagesize} category="entertainment" country="in" /></Route>
          <Route exact path="/"><News key='general' pagesize={pagesize} category="general" country="in" /></Route>
          <Route exact path="/health"><News key='health' pagesize={pagesize} category="health" country="in" /></Route>
          <Route exact path="/science"><News key='science' pagesize={pagesize} category="science" country="in" /></Route>
          <Route exact path="/sports"><News key='sports' pagesize={pagesize} category="sports" country="in" /></Route>
          <Route exact path="/technology"><News key='technology' pagesize={pagesize} category="technology" country="in" /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
