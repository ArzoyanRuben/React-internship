import { Route, Switch } from "react-router-dom";

import Albums from "../src/view/components/albums/Albums";
import Users from "../src/view/components/users/Users";
import Homepage from "../src/view/components/homePage/HomePage";
import Table from '../src/view/components/table/Table';
import NavBar from "../src/view/components/navBar/NavBar";
import NoPage from "./view/components/errors/NoPages";
import "../src/view/components/styles/fonts.scss";
import "../src/view/components/styles/reset.scss";
import "./App.scss";


export const App = () => {
  return (
    <div className="app">
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/albums">
          <Albums />
        </Route>
        <Route path="/table">
          <Table />
        </Route>
        <Route path="*">
          <NoPage />
        </Route> 
      </Switch>
    </div>
  );
};

export default App;
