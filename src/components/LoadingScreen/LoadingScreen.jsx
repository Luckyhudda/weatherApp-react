/* eslint-disable react/prop-types */
import styles from "./LoadingScreen.module.css";
import loaderImage from "../../assets/loaderImage.png";

const LoadingScreen = ({ message }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sunDiv}>
        <img
          src={loaderImage}
          alt=""
          height="200px"
          className={styles.rotate}
        />
        <p>{message}</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
