import React, { Component } from 'react';
import axios from 'axios';
import ReactTable from '../common/util/ReactTable';


export default class ActiveTreeMapUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeUsers: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/jerseycity/management/user-roles/active/')
        .then(res => {
            this.setState({
                activeUsers: res.data.active_users
            });

        });
    }

    render() {
        const { activeUsers } = this.state;
        const headers = [
            {
                Header: 'Username',
                accessor: 'username'
            },
            {
                Header: 'Role',
                accessor: 'role_name'
            },
            {
                Header: 'Management Access',
                accessor: 'admin'
            }
        ];

        return (
            <div>
                <h3 className="management-header">Active Tree Map Users</h3>
                <ReactTable columns={headers} data={activeUsers} />
            </div>
        );
    }

}
