import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detail from './Router/Detail';
import Home from './Router/Home';


function App() {


  
  
  return (
    <>
    <Router>
      <Switch>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='/movie'>
          <Detail />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default React.memo(App);
