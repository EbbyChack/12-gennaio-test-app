import React, { useEffect, useState } from "react";
import { Container, Card, Row ,Col} from "react-bootstrap";

const DetailsPage = (props) => {
  const [fetchData, setFetchData] = useState({});
  const fetchDetails = async () => {
    try {
      const apiKey = "62f09c3f143f269a754759c1616c9b2f";
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${props.latitude}&lon=${props.longitude}&appid=${apiKey}`
      );
      const data = await response.json();
      setFetchData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchDetails();
  }, [props.latitude, props.longitude]);
  useEffect(() => {
    console.log(fetchData);
  }, [fetchData]);

  const formattedDatesArray = [];

  //   if (fetchData.list && fetchData.list.length > 0) {
  //     const date = new Date(fetchData.list[0].dt * 1000);

  //     formattedDatesArray.push(formattedDate);

  //     console.log(formattedDatesArray);
  //   }

  function kelvinToCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
  }

  return (
    <div>
      <Container className="mt-5 pt-5 bg-light rounded-4">
        <h1>
          {fetchData.city && fetchData.city.name} , {fetchData.city && fetchData.city.country}{" "}
        </h1>
        <Container className="bg-white p-2 rounded-4 ">
          <Row>
            {fetchData.list &&
              fetchData.list.map((forecast, index) => (
                <Col md={4} lg={3}>
                  <Card key={index} className="mb-3">
                    <Card.Body>
                      <Card.Title className="fw-light fs-5">
                        {new Date(forecast.dt * 1000).toLocaleDateString("en-US", {
                          weekday: "long",
                          month: "long",
                          day: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                          hour12: false,
                        })}
                      </Card.Title>
                      <Card.Text>Temperature: {kelvinToCelsius(forecast.main.temp)}°</Card.Text>
                      <Card.Text>Weather: {forecast.weather[0].main}</Card.Text>
                      <Card.Text>Pressure: {forecast.main.pressure} hPa</Card.Text>
                      <Card.Text>Humidity: {forecast.main.humidity}%</Card.Text>
                      <Card.Text>Cloudiness: {forecast.clouds.all}%</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default DetailsPage;
