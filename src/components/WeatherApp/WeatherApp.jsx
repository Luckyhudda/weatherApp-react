import { useEffect } from "react";
import { getTime, weatherData } from "../../services/weather";
import { useState } from "react";
import styles from "./WeatherApp.module.css";
import { CiSearch } from "react-icons/ci";
import CurrentWeatherUI from "../CurrentWeather/CurrentWeatherUI";
import TodayHighlight from "../TodayHighlight/TodayHighlight";
import LoadingScreen from "./../LoadingScreen/LoadingScreen.jsx";
import { getCityName } from "../../services/findCity";

const WeatherApp = () => {
  const [city, setCity] = useState("new delhi");
  const [timeZone, setTimezone] = useState([]);
  const [CurrentWeather, setCurrentWeather] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentCity, setCurrentCity] = useState(false);

  useEffect(() => {
    setIsFetching(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        getCityName(position.coords.latitude, position.coords.longitude).then(
          (data) => {
            weatherData(data.location.name)
              .then((weather) => {
                setCurrentWeather(weather);
                setIsFetching(false);
              })
              .catch((error) => {
                setIsFetching(false);
                setIsError(true);
                console.log(error);
              });
            getTime(data.location.name).then((data) => {
              setTimezone(data);
            });
          }
        );
      },
      (error) => {
        weatherData("new delhi")
          .then((weather) => {
            setCurrentWeather(weather);
            setIsFetching(false);
          })
          .catch((error) => {
            setIsFetching(false);
            setIsError(true);
            console.log(error);
          });
        getTime("new delhi").then((data) => {
          setTimezone(data);
        });
        console.log(error);
      }
    );
  }, []);

  const getWeatherInfo = () => {
    setCurrentCity(false);
    setIsFetching(true);
    setIsError(false);
    weatherData(city)
      .then((weather) => {
        if (!weather.error) {
          setCurrentWeather(weather);
          setIsFetching(false);
        } else {
          console.log(weather.error.code);
          setIsFetching(true);
          setIsError(true);
          setCurrentCity(true);
        }
      })
      .catch((error) => {
        setIsFetching(false);
        setIsError(true);
        console.log(error);
      });
    getTime(city).then((data) => {
      setTimezone(data);
    });
  };

  const onchangeHandler = (e) => {
    setCity(e.target.value);
  };

  const onkeyUpHandler = (e) => {
    if (e.key == "Enter") {
      setIsError(false);
      getWeatherInfo();
      e.target.value = "";
    }
  };

  return (
    <>
      <div className="container-fluid  py-3 bg-dark text-white">
        <div className="row justify-content-around align-items-center">
          <div className="col-12 col-md-4 col-lg-3 text-center mb-3 mb-md-0">
            <h2 className={styles.appLogo}>
              <span role="img" aria-label="Weather Icon">
                🌦
              </span>
              <span className={styles.logoName}>Weather</span>App
            </h2>
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <div className="d-flex justify-content-center justify-content-md-start">
              <div className={styles.searchContainer}>
                <span className={styles.searchIcon}>
                  <CiSearch />
                </span>
                <input
                  type="text"
                  name="city"
                  id="cityID"
                  onChange={onchangeHandler}
                  className={styles.inputBox}
                  onKeyUp={onkeyUpHandler}
                  placeholder="Search city..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-3 pb-0 d-flex container my-2 mx-auto ">
        {currentCity && isError && (
          <LoadingScreen message="City not found. Please enter a valid city name." />
        )}
        {!isError && isFetching && (
          <LoadingScreen message="Please Wait While We Retrieve Weather Details." />
        )}
        {!isError && !isFetching && CurrentWeather && (
          <>
            <CurrentWeatherUI
              currentData={CurrentWeather}
              currentTime={timeZone}
            />
            <TodayHighlight currentData={CurrentWeather} />
          </>
        )}
      </div>
    </>
  );
};

export default WeatherApp;
