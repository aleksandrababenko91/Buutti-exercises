import React from "react";
import { Container, Form, Button } from 'react-bootstrap';


const ReactBootstrap = () => {
    return (
        <Container fluid>
          <Form>
            <div>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="type your email" size="lg"/>
            </div>
            <div>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="type your password" size="lg"/>
            </div>
            <div>
              <Button size="sm" type="submit">Submit</Button>
              <Button size="sm" type="reset">Reset form</Button>
            </div>
          </Form>
        </Container>
      );
}

export default ReactBootstrap