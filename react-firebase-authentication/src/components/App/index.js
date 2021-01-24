import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
 
import Navigation from '../Navigation';
import SearchPage from '../Search';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import HistoryPage from '../History';
import OpinionsPage from '../Opinions';

 
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import Footer from '../Footer';

 
const App = () => (
  <Router>
    <div>
      <Navigation />
      <Footer />
      <hr />
      
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.SEARCH} component={SearchPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Route path={ROUTES.HISTORY} component={HistoryPage}/>
      <Route path={ROUTES.OPINIONS} component={OpinionsPage}/>
      
    </div>
  </Router>
);
 
export default withAuthentication(App);