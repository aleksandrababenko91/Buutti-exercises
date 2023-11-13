import "./App.css";
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Planets from './Planets';

const Greetings = (props) => {
  return (
    <div>
      <p>My name is {props.fullName} and my age is {props.age}</p>
    </div>
  );
}
  
Greetings.propTypes = {
    fullName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  };

const App = () => {   
  return (
    <div>
        <h1>Assignment 1</h1>
        <Greetings 
        fullName = "Harry"
        const age = {32}/>   

        <h1>Assignment 2</h1>
        <div className="containerR2D2">
        <div className="poster">
            <img className="image" src="../images/r2d2.jpg" alt="R2D2" />
            <h1>Hello, I am R2D2!</h1>
            <p className="R2D2-font">BeeYoop BeeDeepBoom Weoop DeepaEEya!</p>
        </div>
        </div>

        <h1>Assignment  3</h1>
        
        <Planets/>

        <h1>Assignment  4</h1>
        
        <Container>
        <Col className="px-4 mb-4 mt-4">
        <Row className="fw-bold text-body-emphasis mb-3">Book List Service </Row>
        <Row >Books: </Row>
        <Row className="px-4 pb-2 mt-4 border-bottom w-50">Dune(412 pages)</Row>
        <Row className="px-4 mb-4 mt-2">The eye of the wirls (1872)</Row>
        <Row>Add new Book</Row>
        </Col>
        <Form>
          <Col md={4}>

          <Form.Group className="mb-3" controlId="formBasicBook">
          <Form.Control type="book name" placeholder="Book name" />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPages">
          <Form.Control type="page amount" placeholder="Page count" />
        
        </Form.Group>
          </Col>
        <Col md={1}>
        <Button variant="primary" type="add book">
          Add book
        </Button>
        </Col>
      </Form>
      </Container>
  </div>
  );
}
export default App;
