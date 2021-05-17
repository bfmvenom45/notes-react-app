import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import About from 'src/pages/About';
import { Home } from 'src/pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="container pt-4">
        <Switch>
          <Route path={'/'} exact component={Home}/>
          <Route path={'/about'}  component={About}/>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
