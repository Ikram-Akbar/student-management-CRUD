
import { useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Students = () => {

    const loadedData = useLoaderData();
    const [students, setStudents] = useState(loadedData);

    const handleDeleteUser = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {

                Swal.fire("Deleted!", "Your file has been deleted.", "success");
                fetch(`http://localhost:5000/users/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            const remainingUsers = students.filter(user => user._id !== _id);
                            setStudents(remainingUsers)
                        }
                    });
            }
        });
    }

    const handleUpdateUser = (id) => {
        console.log(id);
    }



    return (



        <Container className="m-5  p-5 ">
            <Row>
                <Col md={8}>
                    <div>
                        <h5 className="alert alert-primary text-center">Student Information <span className="badge bg-dark">{loadedData?.length || 0}</span>   </h5>
                    </div>
                    <Table>
                        <thead>
                            <tr>
                                <th># ObjectId</th>
                                <th>First Name</th>
                                <th>Age</th>
                                <th>Contact</th>
                                <th>Action</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {
                            loadedData.map(data =>
                                <tbody key={data._id}>
                                    <tr>
                                        <td>{data._id}</td>
                                        <td>{data.first_name}</td>
                                        <td>{data.age} </td>
                                        <td>{data.contact} </td>
                                        <td>
                                            <Button
                                                variant="outline-danger"
                                                onClick={() => {
                                                    handleDeleteUser(data._id);
                                                }}
                                            >
                                                Delete
                                            </Button>
                                        </td>
                                        <td>
                                            <Link to={`/update/${data._id}`}> <Button
                                                variant="outline-info"
                                                onClick={() => {
                                                    handleUpdateUser(data._id);
                                                }}
                                            >
                                                Update
                                            </Button></Link>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        }
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};



export default Students;