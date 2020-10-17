import React from 'react';
import {LoginIn} from "./pages/login_in/login_in";
import {Route,Switch,BrowserRouter} from "react-router-dom";
import { Home } from './pages/home/home';
import {CreateContract} from './pages/createContract/createContract';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
    <Route exact path="/" component={LoginIn} />
    <Route path="/home" component={Home} />
    <Route path="/createContract" component={CreateContract} />
    <Route path="/home" component={Home} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;


