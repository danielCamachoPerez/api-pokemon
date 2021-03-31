import React from "react";
import { Switch, Route } from "react-router-dom";
import Pokemon from "../Pokemon";
import ImageView from "../ImageView";
//import ModalSwitch from '../ModalSwitch'

const Desktop = () => {
  //const location = useLocation();
  //const background = location.state && location.state.background;
  return (
    <Switch>
      <Route exact path="/" children={<Pokemon />} />
      <Route path="/img/:id" children={<ImageView />} />
    </Switch>
  );
};

export default Desktop;
