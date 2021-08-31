import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ROUTES_CONFIG from "./config/index";
import Error from "./pages/Error";
function Routes() {
  return (
    <Router>
      <Switch>
        {ROUTES_CONFIG.map((route) => {
          const Page = route.page;
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              render={(props) => <Page {...props} />}
            />
          );
        })}
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}
export default Routes;
