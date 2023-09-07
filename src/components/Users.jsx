import { useEffect, useState } from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import UserForm from "./Form/UserForm";
import User from "./user";

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <Container>
            <Row>
                <Col md={7}>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Gender</th>
                                <th>Age</th>
                                <th>Contact</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                        users.map(user => <User
                            key={user._id}
                            user={user}
                        ></User>)
                    }
                    </Table>


                </Col>
                <Col md={5}>
                  <UserForm></UserForm>
                </Col>
            </Row>
        </Container>
    );
};

export default Users;