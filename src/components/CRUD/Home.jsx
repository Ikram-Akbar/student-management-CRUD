import Swal from 'sweetalert2'
import { Button, Col, Container, Form, Row } from "react-bootstrap";


const Home = () => {

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
            <Container className='m-5 fst-italic p-5'>
                <Row >
                    <Col md={5} className='mx-auto'>
                        <div className=' mb-3'>
                            <h4 className="alert alert-primary text-center">Student Information Form  </h4>
                        </div>
                        <Form onSubmit={handleAddUser} className='fw-bold'>
                            <Form.Group className="mb-3">
                                <Form.Label>First Name : </Form.Label>
                                <Form.Control type="text" name="name" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group  >
                                <Form.Label>Age : </Form.Label>
                                <Form.Control type="number" name="age" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Contact Number : </Form.Label>
                                <Form.Control type="text" name="contact" />
                            </Form.Group>
                            <Button className='mx-' variant="outline-info" value="Add User" type="submit">
                                Submit
                            </Button>
                        </Form>

                    </Col>
                </Row>
            </Container>

        </>
    );
};


export default Home;