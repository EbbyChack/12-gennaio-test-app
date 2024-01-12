import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

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

  if (fetchData.list && fetchData.list.length > 0) {
    const date = new Date(fetchData.list[0].dt * 1000);
    const options = {
      weekday: "long",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    };
    const formattedDate = date.toLocaleDateString("en-US", options);
    formattedDatesArray.push(formattedDate);

    console.log(formattedDatesArray);
  }

  function kelvinToCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
  }

  return (
    <div>
      <Container className="mt-5 pt-5 bg-light rounded-4 w-50">
        <h1>
          {fetchData.city && fetchData.city.name} , {fetchData.city && fetchData.city.country}{" "}
        </h1>
        <Container className="bg-white p-2 rounded-4 ">
          <p className="fw-light">{formattedDatesArray[0]}</p>
          <p>Temperature: {fetchData.list && kelvinToCelsius(fetchData.list[0].main.temp)} °</p>
          <p>Weather: {fetchData.list && fetchData.list[0].weather[0].main}</p>
          <p>Pressure: {fetchData.list && kelvinToCelsius(fetchData.list[0].main.pressure)} hPa</p>
        </Container>
      </Container>
    </div>
  );
};

export default DetailsPage;
