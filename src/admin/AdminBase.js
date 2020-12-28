import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Sidebar from './Sidebar';
import Users from './Users';


export const Admin = (props) => {
    let match = useRouteMatch();
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-xs-1">
                        <Sidebar />
                    </div>
                    <div className="col-md-9 col-xs-1">
                        <Switch>
                            <Route path={`${match.path}/`}>
                                <h3> Welcome to the admin page </h3> 
                            </Route>
                            <Route path={`${match.path}/users`}>
                                <Users />
                            </Route>
                            <Route path={match.path}>
                                <h3>Invalid {match.path}</h3>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Admin;
