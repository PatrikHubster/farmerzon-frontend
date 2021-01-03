import ReactDOM from 'react-dom';
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './Home';
import Users from './Users';
import Contact from './Contact';
import Navigation from './Navigation';

const App = () => {
  return (
    <div>
      <div className='row'>
        <div className='col-md-12'>
          <BrowserRouter>
            <Navigation />
            <br />
            <Route exact path='/' component={Home}/>
            <Route path='/users' component={Users}/>
            <Route path='/contact' component={Contact}/>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
