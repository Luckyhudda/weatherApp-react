/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import styles from "./HourlyWeather.module.css";
const HourlyWeather = ({ hourlyData }) => {
  const finalArr = [...hourlyData.forecast.forecastday[0].hour];

  const timeInhh = (hhlist) => {
    const timestamp = hhlist.time_epoch;
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const amOrPm = hours >= 12 ? "PM" : "AM";
    const formattedDateTime = `${hours % 12 || 12} ${amOrPm}`;
    return formattedDateTime;
  };

  const hourCard = finalArr.map((data, index) => {
    return (
      <motion.div key={index}>
        <div className={styles.hhCard}>
          <p className={styles.hhCardTime}>{timeInhh(data)}</p>
          <p className={styles.hhCardImg}>
            <img src={data.condition.icon} alt="i" />
          </p>
          <p className={styles.hhCardTemp}>{data.feelslike_c}°C</p>
        </div>
      </motion.div>
    );
  });

  return (
    <div className={styles.boxTwo_hh}>
      <h1 className={styles.hh_heading}>Hourly Forecast</h1>
      <motion.div whileTap={"grabbing"}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -1159 }}
          className={styles.hhCards}
        >
          {" "}
          {hourCard}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HourlyWeather;
