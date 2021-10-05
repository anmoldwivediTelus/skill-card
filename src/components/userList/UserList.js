import { Table,Button } from 'reactstrap';
import './userList.css'
import {Link} from 'react-router-dom'
const UserList = () =>{
    return(
        <div className="tableContainer">
            <Button className="addBtn">Add Person</Button>
            <Table striped>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Experience</th>
                <th>Designation</th>
                <th>Skills</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>4 years</td>
            <td>Application Developer</td>
            <td>React Js, Node Js</td>
            <td>
                <Link className="cmnBtn" to="/user-profile">View</Link>
                <Button className="cmnBtn">Udate</Button>
                <Button className="cmnBtn">Delete</Button>
            </td>
            </tr>
            <tr>
            <th scope="row">12</th>
            <td>Akash</td>
            <td>2 years</td>
            <td>Application Developer</td>
            <td>React Js, Node Js</td>
            <td>
                <Link className="cmnBtn" to="/user-profile">View</Link>
                <Button className="cmnBtn">Udate</Button>
                <Button className="cmnBtn">Delete</Button>
            </td>
            </tr>

        </tbody>
        </Table>
        </div>
    )
}

export default UserList