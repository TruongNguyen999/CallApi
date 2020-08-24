import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Menu />
        <div className="container">
          <div className="row">
            {this.onShowContentMenus(routes)}
          </div>
        </div>
      </Router>
    )
  }
  onShowContentMenus = (routes) => {
    let result = null;
    if (routes !== null && routes.length > 0) {
      result = routes.map((route, index) => {
        return <Route key={index} path={route.path} exact={route.exact} component={route.main} />
      })  
    }
    return <Switch>{result}</Switch>
  }
}
export default App;
