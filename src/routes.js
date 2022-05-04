import { Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Projetos from "./Pages/Projetos";

const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/projetos"} component={Projetos} />
    </Switch>
  );
};

export default Routes;
