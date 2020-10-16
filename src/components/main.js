import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch, useHistory } from "react-router-dom";
import { useAuth } from "../customHooks/auth.hook";
import { ModalState} from "../context/modal/modalState"
import Login from "../pages/login"
import Today from "../pages/today";
import Animals from "../pages/animals";

function Main() {
  const animals = useSelector (state => state.animals);
  const history = useHistory();
  const auth = useAuth();
  auth ? history.push('/today') : history.push('/login');

  return (
    <ModalState>
      <main>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route
            path="/today"
            render={(props) => (
              <
                Today {...props} animals={animals}
              />
            )}
          />
          <Route
            path="/animals"
            render={(props) => (
              <
                Animals {...props} animals={animals}
              />
            )}
          />
        </Switch>
      </main>
    </ModalState>
  );
}

export default Main;