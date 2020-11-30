import { ButtonGroup, Button } from 'react-bootstrap';
import ActiveTreeMapUsers from './ActiveUsersTable';
import InvitedUsersTable from './InvitedUsersTable';


export const Users = (props) => {
    return (
        <div>
            <ButtonGroup className="float-right">
                <Button>Test</Button>
                <Button>Test2</Button>
            </ButtonGroup>
            <br/>
            <InvitedUsersTable />
            <br/>
            <ActiveTreeMapUsers />
        </div>
    );
}

export default Users;
