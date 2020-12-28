import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import 'react-pro-sidebar/dist/css/styles.css';

import Sidebar from './Sidebar';
import Users from './Users';


export const Admin = (props) => {
    let match = useRouteMatch();
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-xs-1">
                        <ProSidebar>
                            <Menu iconShape="square">
                                <MenuItem>Dashboard <Link to="/admin" /></MenuItem>
                                <SubMenu title="Users">
                                <MenuItem>Component 1 <Link to="/admin/users" /></MenuItem>
                                <MenuItem>Component 2</MenuItem>
                                </SubMenu>
                            </Menu>
                        </ProSidebar>
                    </div>
                    <div className="col-md-9 col-xs-1">
                    <Switch>
                        <Route exact path={match.path}>
                            <h3> Welcome to the admin page {`${match.path}`}</h3>
                        </Route>
                        <Route exact path={`${match.path}/users`}>
                            <Users />
                        </Route>
                    </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Admin;
