/* eslint-disable react/no-unescaped-entities */
import { Button, Form } from "react-bootstrap";
import Swal from 'sweetalert2'


const UserForm = () => {

    const handleAddUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const first_name = form.name.value;
        const age = form.age.value;
        const contact = form.contact.value;
        //make an object : 
        const userInfo = { first_name, age, contact };
        console.log(userInfo);
        //send userInfo => Backend By POST Method : 
        fetch("http://localhost:5000/users", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Data successfully save in DB',
                        showConfirmButton: false,
                        timer: 1000
                    })
                    form.reset();
                }

            })
    }
    return (
        <>
            <Form onSubmit={handleAddUser}>
                <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter your name" />
                </Form.Group>
                <Form.Select className="mb-3" >
                    <option >Gender</option>
                    <option name="male" value="male">Male</option>
                    <option name="female" value="female">Female</option>
                    <option name="other" value="other">Other</option>
                </Form.Select>
                <Form.Group  >
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="number" name="age" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control type="text" name="contact" />
                </Form.Group>
                <Button variant="primary" value="Add User" type="submit">
                    Submit
                </Button>
            </Form>

        </>
    );
};

export default UserForm;