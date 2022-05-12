import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter, //this will enable routing for the application, otherwise the routing features will not work
  Switch, //Switch lets us determine which components/elements need to show up only at certain routes
  Route, //Route lets us specify the route url address for an element to show up in
  Link, //Link is just like a href (anchor tag) but it will not reload the page
} from "react-router-dom"; 
import Form from './components/Form'
import People from './components/People';
import Planets from './components/Planets';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>The Coolest Api on the Planet!!</h1>
        <Form></Form>
          <Switch>
            <Route exact path="/people/:id">
              <People></People>
            </Route>
            <Route exact path="/planets/:id">
              <Planets></Planets>
            </Route>
          </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
