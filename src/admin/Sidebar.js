import React, { Component } from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

import 'react-pro-sidebar/dist/css/styles.css';


class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-xs-1">
                        <ProSidebar>
                            <Menu iconShape="square">
                                <MenuItem>Dashboard <Link to="/admin" /></MenuItem>
                                <SubMenu title="Users">
                                <MenuItem>Component 1 <Link to="/users" /></MenuItem>
                                <MenuItem>Component 2</MenuItem>
                                </SubMenu>
                            </Menu>
                        </ProSidebar>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;
