import { HashRouter, Switch, Route } from "react-router-dom";
import { DrawOptionsPage } from "../page/draw-options/draw-options";
import { DrawPage } from "../page/draw/draw";
import { LoginPage } from "../page/login/login";
import { PaymentPage } from "../page/payment/payment";
import { ProfilPage } from "../page/profil/profil";
import { WelcomePage } from "../page/welcome/welcome";

const AppRoute = () => (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/">
        <WelcomePage />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/draw">
        <DrawPage />
      </Route>
      <Route exact path="/drawoptions">
        <DrawOptionsPage />
      </Route>
      <Route exact path="/payment">
        <PaymentPage />
      </Route>
      <Route exact path="/profil">
        <ProfilPage />
      </Route>
    </Switch>
  </HashRouter>
);

export default AppRoute;
