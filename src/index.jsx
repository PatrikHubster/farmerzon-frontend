import ReactDOM from 'react-dom';
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import HomePage from './HomePage';
import LoginPage from './LoginPage';
import Navigation from './Navigation';
import RegisterPage from './RegisterPage';
import AboutPage from './AboutPage';

const REACT_APP_GRAPH_SERVER = process.env.REACT_APP_GRAPH_SERVER;
const REACT_APP_AUTH_SERVER = process.env.REACT_APP_AUTH_SERVER;

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
            <Route path='/register' component={RegisterPage}/>
            <Route path='/about' component={AboutPage}/>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

console.log(REACT_APP_GRAPH_SERVER);
console.log(REACT_APP_AUTH_SERVER);

ReactDOM.render(<App />, document.getElementById('root'));
