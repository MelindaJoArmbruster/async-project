import React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './Home';
import AllTemplates from './AllTemplates';
import SingleTemplateView from './SingleTemplateView';
import OrderForm from './OrderForm';
import Confirmation from './Confirmation';
import About from './About';

const TopComponent = () => {
  return (
    <Router>
      <div className='container'>
        <nav>
          <h2>Send a little Gratitude today!</h2>
          <NavLink to='/' className='navLink' activeClassName='navLinkActive'>
            Home
          </NavLink>
          <NavLink
            to='/templates'
            className='navLink'
            activeClassName='navLinkActive'
          >
            Show All Templates
          </NavLink>
          <NavLink
            to='/about'
            className='navLink'
            activeClassName='navLinkActive'
          >
            About
          </NavLink>
        </nav>
        <main id='main'>
          <Switch>
            <Route
              exact
              path='/templates/:templateId'
              component={SingleTemplateView}
            />
            <Route exact path='/' component={Home} />
            <Route exact path='/templates' component={AllTemplates} />
            <Route exact path='/order' component={OrderForm} />
            <Route exact path='/confirmation' component={Confirmation} />
            <Route exact path='/about' component={About} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default TopComponent;
