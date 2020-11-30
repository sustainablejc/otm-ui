import React, { Component } from 'react';
import axios from 'axios';
import ReactTable from '../common/ReactTable';


export default class InvitedUsersTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            invitedUsers: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/jerseycity/management/user-roles/invited/')
        .then(res => {
            this.setState({
                invitedUsers: res.data.invited_users
            });

        });
    }

    render() {
        const { invitedUsers } = this.state;
        const headers = [
            {
                Header: 'Username',
                accessor: 'username'
            },
            {
                Header: 'Role ID',
                accessor: 'role_id'
            },
            {
                Header: 'Management Access',
                accessor: 'admin'
            }
            /*
             * Need to add a new column for removing these
             */
        ];


        return (
            <div>
                <h3 className="management-header">Invited Tree Map Users</h3>
                <ReactTable columns={headers} data={invitedUsers} />
            </div>
        );
    }
}

