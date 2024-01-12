import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const DetailsPage = (props) => {
  //   const [fetchData, setFetchData] = useState({});

  //   const fetchDetails = async () => {
  //     try {
  //       const apiKey = "62f09c3f143f269a754759c1616c9b2f";
  //       const response = await fetch(
  //         `http://api.openweathermap.org/data/2.5/forecast?lat=${props.latitude}&lon=${props.longitude}&appid=${apiKey}`
  //       );

  //       const data = await response.json();

  //       setFetchData(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchDetails();
  //   }, [props.latitude, props.longitude]);

  //   useEffect(() => {
  //     console.log(fetchData);
  //   }, [fetchData]);

  const fetchData = {
    cod: "200",
    message: 0,
    cnt: 40,
    list: [
      {
        dt: 1705071600,
        main: {
          temp: 281.95,
          feels_like: 281.34,
          temp_min: 279.86,
          temp_max: 281.95,
          pressure: 1022,
          sea_level: 1022,
          grnd_level: 1007,
          humidity: 67,
          temp_kf: 2.09,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 1.58,
          deg: 114,
          gust: 2.68,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-01-12 15:00:00",
      },
      {
        dt: 1705082400,
        main: {
          temp: 280.54,
          feels_like: 279.82,
          temp_min: 277.72,
          temp_max: 280.54,
          pressure: 1023,
          sea_level: 1023,
          grnd_level: 1008,
          humidity: 69,
          temp_kf: 2.82,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 1.5,
          deg: 90,
          gust: 2.37,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-01-12 18:00:00",
      },
      {
        dt: 1705093200,
        main: {
          temp: 278.26,
          feels_like: 277.34,
          temp_min: 276.42,
          temp_max: 278.26,
          pressure: 1025,
          sea_level: 1025,
          grnd_level: 1010,
          humidity: 75,
          temp_kf: 1.84,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 1.41,
          deg: 97,
          gust: 2.15,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-01-12 21:00:00",
      },
      {
        dt: 1705104000,
        main: {
          temp: 275.62,
          feels_like: 274.33,
          temp_min: 275.62,
          temp_max: 275.62,
          pressure: 1026,
          sea_level: 1026,
          grnd_level: 1010,
          humidity: 80,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 1.42,
          deg: 87,
          gust: 1.68,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-01-13 00:00:00",
      },
      {
        dt: 1705114800,
        main: {
          temp: 275.28,
          feels_like: 275.28,
          temp_min: 275.28,
          temp_max: 275.28,
          pressure: 1026,
          sea_level: 1026,
          grnd_level: 1009,
          humidity: 79,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 0.35,
          deg: 45,
          gust: 0.34,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-01-13 03:00:00",
      },
      {
        dt: 1705125600,
        main: {
          temp: 274.92,
          feels_like: 274.92,
          temp_min: 274.92,
          temp_max: 274.92,
          pressure: 1025,
          sea_level: 1025,
          grnd_level: 1009,
          humidity: 81,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 1,
        },
        wind: {
          speed: 1.05,
          deg: 243,
          gust: 1.01,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-01-13 06:00:00",
      },
      {
        dt: 1705136400,
        main: {
          temp: 276.21,
          feels_like: 276.21,
          temp_min: 276.21,
          temp_max: 276.21,
          pressure: 1025,
          sea_level: 1025,
          grnd_level: 1008,
          humidity: 73,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 1,
        },
        wind: {
          speed: 1.08,
          deg: 249,
          gust: 1.59,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-01-13 09:00:00",
      },
      {
        dt: 1705147200,
        main: {
          temp: 278.8,
          feels_like: 277.76,
          temp_min: 278.8,
          temp_max: 278.8,
          pressure: 1023,
          sea_level: 1023,
          grnd_level: 1006,
          humidity: 58,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 1,
        },
        wind: {
          speed: 1.56,
          deg: 252,
          gust: 2,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-01-13 12:00:00",
      },
      {
        dt: 1705158000,
        main: {
          temp: 279.11,
          feels_like: 277.96,
          temp_min: 279.11,
          temp_max: 279.11,
          pressure: 1021,
          sea_level: 1021,
          grnd_level: 1004,
          humidity: 58,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 1.69,
          deg: 257,
          gust: 2.44,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-01-13 15:00:00",
      },
      {
        dt: 1705168800,
        main: {
          temp: 277.14,
          feels_like: 275.9,
          temp_min: 277.14,
          temp_max: 277.14,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 1004,
          humidity: 70,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 1.53,
          deg: 253,
          gust: 2.33,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-01-13 18:00:00",
      },
      {
        dt: 1705179600,
        main: {
          temp: 276.3,
          feels_like: 274.95,
          temp_min: 276.3,
          temp_max: 276.3,
          pressure: 1020,
          sea_level: 1020,
          grnd_level: 1003,
          humidity: 74,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 0,
        },
        wind: {
          speed: 1.53,
          deg: 265,
          gust: 1.95,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-01-13 21:00:00",
      },
      {
        dt: 1705190400,
        main: {
          temp: 275.68,
          feels_like: 274.37,
          temp_min: 275.68,
          temp_max: 275.68,
          pressure: 1018,
          sea_level: 1018,
          grnd_level: 1001,
          humidity: 76,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 1,
        },
        wind: {
          speed: 1.44,
          deg: 284,
          gust: 1.45,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-01-14 00:00:00",
      },
      {
        dt: 1705201200,
        main: {
          temp: 275.34,
          feels_like: 275.34,
          temp_min: 275.34,
          temp_max: 275.34,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 1000,
          humidity: 70,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 5,
        },
        wind: {
          speed: 0.99,
          deg: 291,
          gust: 1.03,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-01-14 03:00:00",
      },
      {
        dt: 1705212000,
        main: {
          temp: 275.05,
          feels_like: 275.05,
          temp_min: 275.05,
          temp_max: 275.05,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 999,
          humidity: 62,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02n",
          },
        ],
        clouds: {
          all: 23,
        },
        wind: {
          speed: 1.02,
          deg: 294,
          gust: 1.02,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-01-14 06:00:00",
      },
      {
        dt: 1705222800,
        main: {
          temp: 276.46,
          feels_like: 276.46,
          temp_min: 276.46,
          temp_max: 276.46,
          pressure: 1016,
          sea_level: 1016,
          grnd_level: 999,
          humidity: 52,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 0.76,
          deg: 261,
          gust: 1.36,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-01-14 09:00:00",
      },
      {
        dt: 1705233600,
        main: {
          temp: 279.2,
          feels_like: 279.2,
          temp_min: 279.2,
          temp_max: 279.2,
          pressure: 1014,
          sea_level: 1014,
          grnd_level: 998,
          humidity: 50,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 61,
        },
        wind: {
          speed: 0.87,
          deg: 274,
          gust: 1.43,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-01-14 12:00:00",
      },
      {
        dt: 1705244400,
        main: {
          temp: 279.5,
          feels_like: 279.5,
          temp_min: 279.5,
          temp_max: 279.5,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 996,
          humidity: 58,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02d",
          },
        ],
        clouds: {
          all: 12,
        },
        wind: {
          speed: 0.82,
          deg: 197,
          gust: 0.93,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-01-14 15:00:00",
      },
      {
        dt: 1705255200,
        main: {
          temp: 277.44,
          feels_like: 277.44,
          temp_min: 277.44,
          temp_max: 277.44,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 996,
          humidity: 73,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02n",
          },
        ],
        clouds: {
          all: 15,
        },
        wind: {
          speed: 0.74,
          deg: 138,
          gust: 0.83,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-01-14 18:00:00",
      },
      {
        dt: 1705266000,
        main: {
          temp: 277.53,
          feels_like: 277.53,
          temp_min: 277.53,
          temp_max: 277.53,
          pressure: 1012,
          sea_level: 1012,
          grnd_level: 996,
          humidity: 73,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 86,
        },
        wind: {
          speed: 1.14,
          deg: 100,
          gust: 1.55,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-01-14 21:00:00",
      },
      {
        dt: 1705276800,
        main: {
          temp: 277.41,
          feels_like: 277.41,
          temp_min: 277.41,
          temp_max: 277.41,
          pressure: 1010,
          sea_level: 1010,
          grnd_level: 994,
          humidity: 70,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 92,
        },
        wind: {
          speed: 1.04,
          deg: 90,
          gust: 1.42,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-01-15 00:00:00",
      },
      {
        dt: 1705287600,
        main: {
          temp: 277.33,
          feels_like: 277.33,
          temp_min: 277.33,
          temp_max: 277.33,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 992,
          humidity: 67,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 0.85,
          deg: 113,
          gust: 1.01,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-01-15 03:00:00",
      },
      {
        dt: 1705298400,
        main: {
          temp: 277.1,
          feels_like: 277.1,
          temp_min: 277.1,
          temp_max: 277.1,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 991,
          humidity: 72,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 0.69,
          deg: 159,
          gust: 0.67,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-01-15 06:00:00",
      },
      {
        dt: 1705309200,
        main: {
          temp: 277.67,
          feels_like: 277.67,
          temp_min: 277.67,
          temp_max: 277.67,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 991,
          humidity: 69,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 99,
        },
        wind: {
          speed: 0.9,
          deg: 161,
          gust: 1,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-01-15 09:00:00",
      },
      {
        dt: 1705320000,
        main: {
          temp: 279.56,
          feels_like: 279.56,
          temp_min: 279.56,
          temp_max: 279.56,
          pressure: 1005,
          sea_level: 1005,
          grnd_level: 989,
          humidity: 61,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 61,
        },
        wind: {
          speed: 0.77,
          deg: 185,
          gust: 0.85,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-01-15 12:00:00",
      },
      {
        dt: 1705330800,
        main: {
          temp: 279.8,
          feels_like: 279.8,
          temp_min: 279.8,
          temp_max: 279.8,
          pressure: 1003,
          sea_level: 1003,
          grnd_level: 987,
          humidity: 62,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 9,
        },
        wind: {
          speed: 0.38,
          deg: 153,
          gust: 0.6,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-01-15 15:00:00",
      },
      {
        dt: 1705341600,
        main: {
          temp: 277.96,
          feels_like: 277.96,
          temp_min: 277.96,
          temp_max: 277.96,
          pressure: 1002,
          sea_level: 1002,
          grnd_level: 987,
          humidity: 75,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03n",
          },
        ],
        clouds: {
          all: 28,
        },
        wind: {
          speed: 1.24,
          deg: 156,
          gust: 1.5,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-01-15 18:00:00",
      },
      {
        dt: 1705352400,
        main: {
          temp: 276.95,
          feels_like: 276.95,
          temp_min: 276.95,
          temp_max: 276.95,
          pressure: 1003,
          sea_level: 1003,
          grnd_level: 987,
          humidity: 82,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02n",
          },
        ],
        clouds: {
          all: 20,
        },
        wind: {
          speed: 0.89,
          deg: 123,
          gust: 0.99,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-01-15 21:00:00",
      },
      {
        dt: 1705363200,
        main: {
          temp: 276.2,
          feels_like: 276.2,
          temp_min: 276.2,
          temp_max: 276.2,
          pressure: 1003,
          sea_level: 1003,
          grnd_level: 987,
          humidity: 82,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02n",
          },
        ],
        clouds: {
          all: 18,
        },
        wind: {
          speed: 1.04,
          deg: 67,
          gust: 1.03,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-01-16 00:00:00",
      },
      {
        dt: 1705374000,
        main: {
          temp: 275.64,
          feels_like: 275.64,
          temp_min: 275.64,
          temp_max: 275.64,
          pressure: 1003,
          sea_level: 1003,
          grnd_level: 986,
          humidity: 81,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02n",
          },
        ],
        clouds: {
          all: 12,
        },
        wind: {
          speed: 0.52,
          deg: 155,
          gust: 0.62,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-01-16 03:00:00",
      },
      {
        dt: 1705384800,
        main: {
          temp: 275.25,
          feels_like: 275.25,
          temp_min: 275.25,
          temp_max: 275.25,
          pressure: 1004,
          sea_level: 1004,
          grnd_level: 988,
          humidity: 83,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 8,
        },
        wind: {
          speed: 0.48,
          deg: 267,
          gust: 0.55,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-01-16 06:00:00",
      },
      {
        dt: 1705395600,
        main: {
          temp: 276.58,
          feels_like: 276.58,
          temp_min: 276.58,
          temp_max: 276.58,
          pressure: 1007,
          sea_level: 1007,
          grnd_level: 991,
          humidity: 76,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 1,
        },
        wind: {
          speed: 0.3,
          deg: 170,
          gust: 0.32,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-01-16 09:00:00",
      },
      {
        dt: 1705406400,
        main: {
          temp: 279.11,
          feels_like: 279.11,
          temp_min: 279.11,
          temp_max: 279.11,
          pressure: 1008,
          sea_level: 1008,
          grnd_level: 992,
          humidity: 62,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 1,
        },
        wind: {
          speed: 0.92,
          deg: 122,
          gust: 1.16,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-01-16 12:00:00",
      },
      {
        dt: 1705417200,
        main: {
          temp: 279.55,
          feels_like: 278.11,
          temp_min: 279.55,
          temp_max: 279.55,
          pressure: 1009,
          sea_level: 1009,
          grnd_level: 993,
          humidity: 61,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
        clouds: {
          all: 2,
        },
        wind: {
          speed: 2.04,
          deg: 90,
          gust: 3.36,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-01-16 15:00:00",
      },
      {
        dt: 1705428000,
        main: {
          temp: 277.54,
          feels_like: 275.95,
          temp_min: 277.54,
          temp_max: 277.54,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 995,
          humidity: 68,
          temp_kf: 0,
        },
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01n",
          },
        ],
        clouds: {
          all: 1,
        },
        wind: {
          speed: 1.87,
          deg: 67,
          gust: 4.44,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-01-16 18:00:00",
      },
      {
        dt: 1705438800,
        main: {
          temp: 276.53,
          feels_like: 274.81,
          temp_min: 276.53,
          temp_max: 276.53,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 997,
          humidity: 68,
          temp_kf: 0,
        },
        weather: [
          {
            id: 801,
            main: "Clouds",
            description: "few clouds",
            icon: "02n",
          },
        ],
        clouds: {
          all: 20,
        },
        wind: {
          speed: 1.84,
          deg: 62,
          gust: 3.92,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-01-16 21:00:00",
      },
      {
        dt: 1705449600,
        main: {
          temp: 276.24,
          feels_like: 275.02,
          temp_min: 276.24,
          temp_max: 276.24,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 997,
          humidity: 64,
          temp_kf: 0,
        },
        weather: [
          {
            id: 802,
            main: "Clouds",
            description: "scattered clouds",
            icon: "03n",
          },
        ],
        clouds: {
          all: 34,
        },
        wind: {
          speed: 1.43,
          deg: 47,
          gust: 1.53,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-01-17 00:00:00",
      },
      {
        dt: 1705460400,
        main: {
          temp: 276.62,
          feels_like: 276.62,
          temp_min: 276.62,
          temp_max: 276.62,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 997,
          humidity: 61,
          temp_kf: 0,
        },
        weather: [
          {
            id: 803,
            main: "Clouds",
            description: "broken clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 82,
        },
        wind: {
          speed: 0.75,
          deg: 95,
          gust: 0.89,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-01-17 03:00:00",
      },
      {
        dt: 1705471200,
        main: {
          temp: 276.69,
          feels_like: 276.69,
          temp_min: 276.69,
          temp_max: 276.69,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 997,
          humidity: 62,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04n",
          },
        ],
        clouds: {
          all: 91,
        },
        wind: {
          speed: 0.38,
          deg: 109,
          gust: 0.44,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "n",
        },
        dt_txt: "2024-01-17 06:00:00",
      },
      {
        dt: 1705482000,
        main: {
          temp: 277.21,
          feels_like: 277.21,
          temp_min: 277.21,
          temp_max: 277.21,
          pressure: 1013,
          sea_level: 1013,
          grnd_level: 997,
          humidity: 61,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 0.54,
          deg: 121,
          gust: 0.93,
        },
        visibility: 10000,
        pop: 0,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-01-17 09:00:00",
      },
      {
        dt: 1705492800,
        main: {
          temp: 277.77,
          feels_like: 277.77,
          temp_min: 277.77,
          temp_max: 277.77,
          pressure: 1011,
          sea_level: 1011,
          grnd_level: 995,
          humidity: 61,
          temp_kf: 0,
        },
        weather: [
          {
            id: 804,
            main: "Clouds",
            description: "overcast clouds",
            icon: "04d",
          },
        ],
        clouds: {
          all: 100,
        },
        wind: {
          speed: 0.86,
          deg: 190,
          gust: 1.08,
        },
        visibility: 10000,
        pop: 0.01,
        sys: {
          pod: "d",
        },
        dt_txt: "2024-01-17 12:00:00",
      },
    ],
    city: {
      id: 3173435,
      name: "Milan",
      coord: {
        lat: 45.4642,
        lon: 9.1896,
      },
      country: "IT",
      population: 1000000,
      timezone: 3600,
      sunrise: 1705042868,
      sunset: 1705075259,
    },
  };

  const formattedDatesArray = [];

  for (let i = 0; i < fetchData.list.length; i++) {
    const date = new Date(fetchData.list[i].dt * 1000);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false, 
    };
    const formattedDate = date.toLocaleDateString("en-US", options);
    formattedDatesArray.push(formattedDate);
  }

  console.log(formattedDatesArray);

  return (
    <div>
      <Container className="mt-5 pt-5 bg-light rounded-4">
        <h2>
          {fetchData.city && fetchData.city.name} , {fetchData.city && fetchData.city.country}{" "}
        </h2>
        <Container className="bg-white p-2 rounded-4">
          <p></p>
        </Container>
      </Container>
    </div>
  );
};

export default DetailsPage;