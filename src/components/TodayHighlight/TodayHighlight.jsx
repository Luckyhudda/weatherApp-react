/* eslint-disable react/prop-types */
import styles from "./TodayHighlight.module.css";
import { LuSunrise } from "react-icons/lu";
import { LuSunset } from "react-icons/lu";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { LuWaves } from "react-icons/lu";
import { MdVisibility } from "react-icons/md";
import { CiTempHigh } from "react-icons/ci";
import HourlyWeather from "../HourlyWeather/HourlyWeather";
const TodayHighlight = ({ currentData }) => {
  const current = currentData.forecast.forecastday[0];
  return (
    <div>
      <div className={styles.highlightBox}>
        <p>Today Highlight</p>
        <div className={styles.boxOne}>
          <div className={styles.dayBox}>
            <p className={styles.dayBox_heading}>Air Quality Index</p>
            <div className={styles.airBox}>
              <div className={styles.iconStyle}>
                <FaWind />
              </div>
              <div>
                <p className={styles.airHeading}>pm2.5</p>
                <p>{current.day.air_quality.pm2_5.toFixed(2)}</p>
              </div>
              <div>
                <p className={styles.airHeading}>SO2</p>
                <p>{current.day.air_quality.so2.toFixed(2)}</p>
              </div>
              <div>
                <p className={styles.airHeading}>NO2</p>
                <p>{current.day.air_quality.no2.toFixed(2)}</p>
              </div>
              <div>
                <p className={styles.airHeading}>O3</p>
                <p>{current.day.air_quality.o3.toFixed(2)}</p>
              </div>
            </div>
          </div>
          <div className={styles.dayBox}>
            <p className={styles.dayBox_heading}>Sunrist & Sunset</p>
            <div className={styles.sunsBox}>
              <div>
                <span className={styles.iconStyle}>
                  <LuSunrise />
                </span>{" "}
                <span style={{ marginLeft: "9px" }}>
                  {current.astro.sunrise}
                </span>
              </div>
              <div>
                <span className={styles.iconStyle}>
                  <LuSunset />
                </span>{" "}
                <span style={{ marginLeft: "9px" }}>
                  {current.astro.sunset}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.boxOne}>
          <div className={styles.dayBoxDown}>
            <div className={styles.bgDown}>
              <p className={styles.dayBoxDownHeading}>Humidity</p>
              <div className={styles.downBox_list}>
                <div className={styles.iconsStyle}>
                  <WiHumidity />
                </div>
                <div className={styles.iconTexts}>
                  {current.day.avghumidity}
                  <span className={styles.valueSize}>%</span>
                </div>
              </div>
            </div>
            <div className={styles.bgDown}>
              <p className={styles.dayBoxDownHeading}>Pressure</p>
              <div className={styles.downBox_list}>
                <div className={styles.iconsStyle}>
                  <LuWaves />
                </div>
                <div className={styles.iconTexts}>
                  {Math.round(current.hour[0].pressure_mb)}
                  <span className={styles.valueSize}>hPa</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.dayBoxDown}>
            <div className={styles.bgDown}>
              <p className={styles.dayBoxDownHeading}>Visibility</p>
              <div className={styles.downBox_list}>
                <div className={styles.iconsStyle}>
                  <MdVisibility />
                </div>
                <div className={styles.iconTexts}>
                  {current.day.avgvis_km}
                  <span className={styles.valueSize}>Km</span>
                </div>
              </div>
            </div>
            <div className={styles.bgDown}>
              <p className={styles.dayBoxDownHeading}>Feels like</p>
              <div className={styles.downBox_list}>
                <div className={styles.iconsStyle}>
                  <CiTempHigh />
                </div>
                <div className={styles.iconTexts}>
                  {Math.round(current.hour[0].feelslike_c)}
                  <span className={styles.valueSize}>°C</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HourlyWeather hourlyData={currentData} />
    </div>
  );
};

export default TodayHighlight;
