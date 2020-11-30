import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Users from './admin/Users';
import Admin from './admin/Admin';


import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Brand href="/users">SJC OTM</Navbar.Brand>
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link href="/">Add A Tree</Nav.Link>
                            <Nav.Link href="/users">Explore Map</Nav.Link>
                            <Nav.Link href="/users">View Edits</Nav.Link>
                            <Nav.Link href="/admin">Manage</Nav.Link>
                            <Nav.Link href="/users">Dashboard</Nav.Link>
                            <Nav.Link href="/users">Users</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Nav.Link href="/users">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Router>
                    <Switch>
                        <Route exact path='/users' component={Users} />
                        <Route exact path='/admin' component={Admin} />
                        <Route exact path='/' component={Users} />
                    </Switch>
                </Router>
            </div>
        );
    }
}



export default App;
