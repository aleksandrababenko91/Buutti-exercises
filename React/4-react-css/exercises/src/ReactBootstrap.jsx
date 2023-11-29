import React from "react";
import { Container, Form, Button } from 'react-bootstrap';


const ReactBootstrap = () => {
    return (
        <Container fluid>
          <Form>
            <div className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Type your email" size="lg" className="mb-2" />
            </div>
            <div className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Type your password" size="lg" className="mb-2" />
            </div>
            <Button variant="success" size="lg" className="w-100 mb-2">Submit</Button>
            <Button variant="danger" size="lg" className="w-100">Reset form</Button>
          </Form>
        </Container>
      );
}

export default ReactBootstrap;
