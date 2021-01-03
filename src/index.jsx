import ReactDOM from 'react-dom';
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import HomePage from './HomePage';
import LoginPage from './LoginPage';
import Navigation from './Navigation';

const App = () => {
  return (
    <div>
      <div className='row'>
        <div className='col-md-12'>
          <BrowserRouter>
            <Navigation />
            <br />
            <Route exact path='/' component={HomePage}/>
            <Route path='/login' component={LoginPage}/>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
