import React from 'react';
import Counter from '../counter/counter';
import Form from '../form/form';
import List from '../list/list';

import { Unless, When } from '../if/index';

// import { Context } from '../context/context';
import { AuthContext } from '../context/auth-context';

import './todo.scss';

class ToDo extends React.Component {
  // static contextType = Context;

  render() {
    return (
      <>
        <AuthContext.Consumer>
          { user => (
            <>
            <Unless condition={user.loggedin}>
              <form>
                <input type='text' placeholder='username'></input>
                <input type='text' placeholder='password'></input>
                <button>Open Sesame</button>
              </form>
            </Unless>

            <When condition={user.loggedin}>
              <section className="todo">
                <div>
                  <Counter />
                </div>

                <div>
                  <Form />
                </div>

                <div>
                  <List />
                </div>
              </section>
            </When>
            </>
          )}
        </AuthContext.Consumer>
      </>
    );
  }
}

export default ToDo;
