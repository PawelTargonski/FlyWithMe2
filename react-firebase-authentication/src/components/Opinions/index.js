import React from 'react';
 
import { AuthUserContext, withAuthorization } from '../Session';
 
const OpinionsPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        Oponions
      </div>
    )}
  </AuthUserContext.Consumer>
);
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(OpinionsPage);