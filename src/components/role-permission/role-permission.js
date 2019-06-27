
import React from 'react';
import jsonWebToken from 'jsonwebtoken';
import { AuthContext } from '../context/auth-context';
import { When } from '../if/index';

require('dotenv').config();

const SECRET = process.env.REACT_APP_SECRET;

class RoleValidation extends React.Component {
  static contextType = AuthContext;

  render() {
    let user = null;
    let hasCorrectRole;

    if (this.context.token) {
      user = jsonWebToken.verify(this.context.token, 'supersecret');
    }

    if (user) {
      if (this.props.capability) {
        hasCorrectRole = user.capabilities.includes(this.props.capability);
      } else {
        hasCorrectRole = true;
      }
    }

    return (
      <When condition={hasCorrectRole}>
          { this.props.children }
      </When>
    );
  }
}

export default RoleValidation;
