/* eslint-disable react/prop-types */
import styles from "./CurrentWeatherUI.module.css";
import { SlCalender } from "react-icons/sl";
import { ImLocation2 } from "react-icons/im";
const CurrentWeatherUI = ({ currentData, currentTime }) => {
  const final = { ...currentData };
  // const { today, month, currentdate } = currentTime;
  const currentValue = { ...final.current };
  const locationValue = { ...final.location };
  const forecastValue = [...final.forecast.forecastday];

  const dailyCards = forecastValue.map((days, index) => {
    return (
      <div key={index}>
        <div className={styles.dayslist}>
          <span>
            <img src={days.day.condition.icon} alt="" />
          </span>
          <span className={styles.listtemp}>
            {Math.round(days.day.avgtemp_c)}°
          </span>
          <span className={styles.listDate}>{days.date}</span>
        </div>
      </div>
    );
  });

  return (
    <div className={styles.currentBox}>
      <div className={styles.boxNow}>
        <p className={styles.nowText}>Now</p>
        <div className={styles.tempBox}>
          <p className={styles.temp}>
            {currentValue.temp_c}°<span className={styles.tempUnit}>C</span>
          </p>
          <div className={styles.imgbox}>
            <img src={currentValue.condition.icon} alt="img" />
          </div>
        </div>
        <p className={styles.imgtext}>{currentValue.condition.text}</p>
        <div>
          <p className="">
            <span className={styles.calIcon}>
              <SlCalender />{" "}
            </span>
            {currentTime}
          </p>
          <p>
            <span className={styles.calIcon}>
              <ImLocation2 />
            </span>
            {locationValue.name},{locationValue.country}
          </p>
        </div>
      </div>

      <div style={{ marginTop: "4px" }} className={styles.daysbox}>
        <p className={styles.daysHeading}>4 Days Forecast</p>
        <div className={styles.daysMainDiv}>
              {dailyCards}
        </div>
      </div>
    </div>
  );
};

export default CurrentWeatherUI;
