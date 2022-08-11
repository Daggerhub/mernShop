import React, {useState} from "react";
import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const FormContainer = () => {
  const [searchInput, setSearchInput] = useState("")  
  const history = useHistory();
  const handleChange = (e) => {
    setSearchInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?q=${searchInput}`);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Row>
              <Form.Group as={Col}>
                <InputGroup>
                  <Form.Control type="text" placeholder="Search here.." value={searchInput} onChange={handleChange}/>
                </InputGroup>
              </Form.Group>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
