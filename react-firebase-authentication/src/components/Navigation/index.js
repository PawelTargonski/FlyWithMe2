import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
 
const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);
 
const NavigationAuth = () => (
  <div className="Header">
            <div className="Container">
                <div className="Logo">
                Fly With Me!
                </div>

  <nav class="Menu">
  <ul class="MenuHeaderNavigator">
  
    <li class="MenuHeaderList">
      <Link class="MenuHeaderListLink" to={ROUTES.LANDING}>Landing</Link>
    </li>
    
    <li class="MenuHeaderList">
      <Link class="MenuHeaderListLink" to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li class="MenuHeaderList">
      <Link class="MenuHeaderListLink" to={ROUTES.ADMIN}>Admin</Link>
    </li>
    <li class="MenuHeaderList">
      <Link class="MenuHeaderListLink" to={ROUTES.HOME}>Home</Link>
    </li>
    <li class="MenuHeaderList">
      <SignOutButton />
    </li>
  </ul>
  </nav>
  </div> 
</div>
);
 
const NavigationNonAuth = () => (
  <div className="Header">
            <div className="Container">
                <div className="Logo">
                Fly With Me!
                </div>

  <nav class="Menu">
  <ul class="MenuHeaderNavigator">
  
    <li class="MenuHeaderList">
      <Link class="MenuHeaderListLink" to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li  class="MenuHeaderList">
      <Link class="MenuHeaderListLink" to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
    <li  class="MenuHeaderList">
      <Link class="MenuHeaderListLink" to={ROUTES.HOME}>Home</Link>
    </li>

  </ul>
  </nav>
  </div>
  </div>
);
 
export default Navigation;