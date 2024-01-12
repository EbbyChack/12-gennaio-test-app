import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputGroup, Form, Row, Col, Container, Button } from "react-bootstrap";

const Search = ({ updateLocation }) => {
  const [city, setCity] = useState("");

  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const apiKey = "62f09c3f143f269a754759c1616c9b2f";
      const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`);

      const data = await response.json();

      if (data && data.length > 0) {
        updateLocation(city, data[0].lat, data[0].lon);
        navigate("/details");
      } else {
        console.error("City not found");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Container className="mt-5 pt-5">
      <Row>
        <Col xs={6} className="mx-auto mt-5 text-center">
          <InputGroup className="mb-3" size="lg">
            <Form.Control
              placeholder="Search a city"
              aria-label="Search a city"
              aria-describedby="basic-addon2"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </InputGroup>
          <Button className="btn btn-dark" onClick={handleSearch}>
            Search
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
