import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loadedUser = useLoaderData();

    const handleUpdate = (event) => {
        event.preventDefault();

        const form = event.target;
        const first_Name = form.name.value;
        const age = form.age.value;
        const contact = form.contact.value;
        const updatedUser = { first_Name, age, contact };
        console.log(updatedUser);

        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedUser)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <>

            <Container className='m-5 fst-italic p-5'>
                <Row>
                    <Col md={8}>
                        <h3 className="alert alert-primary text-center mt-5"> Welcome  To Edit Page :  {loadedUser.first_name}</h3>
                    </Col>
                </Row>
                <Row >
                    <Col md={5} className='shadow-lg m-5 p-5'>
                        <Form onSubmit={handleUpdate} className='fw-bold'>
                            <Form.Group className="mb-3">
                                <Form.Label>First Name : </Form.Label>
                                <Form.Control defaultValue={loadedUser?.first_name} type="text" name="name" placeholder="Enter your name" />
                            </Form.Group>
                            <Form.Group  >
                                <Form.Label>Age : </Form.Label>
                                <Form.Control defaultValue={loadedUser?.age} type="number" name="age" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>Contact Number : </Form.Label>
                                <Form.Control defaultValue={loadedUser?.contact} type="text" name="contact" />
                            </Form.Group>
                            <Button className='mx-' variant="outline-info" value="Update" type="submit">
                                Submit
                            </Button>
                        </Form>

                    </Col>
                </Row>
            </Container>
        </>)
};

export default Update;