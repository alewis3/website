import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Resume from './pages/Resume';

class App extends Component {
  render() {
    const App = () => (
      <div>
        <Switch>
          <Route path='/resume' component={Resume}/>
          <Route exact path='/' component={Home}/>
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
