import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import Home from './components/common/Home.jsx';
import App from './components/common/App.jsx';
import LoginForm from './components/login/LoginForm.jsx';
import ClaimForm from './components/claim/ClaimSummary.jsx';
import UpdateClaimForm from './components/claim/UpdateClaim.jsx';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const DEFAULT_STORE_OBJECT = {
  loggedInUser: null,
  loggedOut: true
}

const LOGIN = 'LOGIN';
const reducer = (state = DEFAULT_STORE_OBJECT, action) => {

  switch(action.type) {

      case LOGIN : 
          return {                
              loggedInUser: action.loggedInUser
          }                
  }
  return state;
}
const store = createStore(reducer, {});

store.subscribe(() => {
  console.log('dispatch calling on store', store.getState());
})

const loginAction = () => {
  return {
      type: LOGIN,
      loggedInUser: 'blank'
  }
}

store.dispatch(loginAction());

ReactDOM.render(
  
  <div>
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={LoginForm} />
          <Route path="home" component={Home} />
          <Route path="claim" component={ClaimForm} />
          <Route path="updateclaim/:claimId" component={UpdateClaimForm} />
          <Route path="login" component={LoginForm} />
        </Route>
      </Router>
    </Provider> 
   </div>
  , document.getElementById('root')
);


