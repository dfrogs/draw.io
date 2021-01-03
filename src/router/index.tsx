import { BrowserRouter, Switch, Route } from "react-router-dom";
import { DrawOptionsPage } from "../page/draw-options/draw-options";
import { DrawPage } from "../page/draw/draw";
import { LoginPage } from "../page/login/login";
import { PaymentPage } from "../page/payment/payment";
import { ProfilPage } from "../page/profil/profil";
import { WelcomePage } from "../page/welcome/welcome";

const AppRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/draw.io/">
        <WelcomePage />
      </Route>
      <Route exact path="/draw.io/login">
        <LoginPage />
      </Route>
      <Route exact path="/draw.io/draw">
        <DrawPage />
      </Route>
      <Route exact path="/draw.io/drawoptions">
        <DrawOptionsPage />
      </Route>
      <Route exact path="/draw.io/payment">
        <PaymentPage />
      </Route>
      <Route exact path="/draw.io/profil">
        <ProfilPage />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default AppRoute;
