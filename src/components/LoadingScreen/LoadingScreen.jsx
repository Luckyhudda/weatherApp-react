/* eslint-disable react/prop-types */
import styles from "./LoadingScreen.module.css";
import loaderImage from "../../assets/loaderImage.png";

const LoadingScreen = ({ message }) => {
  return (
    
    <div className="container-fluid h-100">
      <div className="row h-100 justify-content-center align-items-center">
        <div
          className={`col-12 col-md-8 col-lg-6 text-center ${styles.container}`}
        >
          <div className={styles.sunDiv}>
            <img
              src={loaderImage}
              alt=""
              className={`img-fluid ${styles.rotate} ${styles.imageHeight}`}
            />
            <p className="mt-3">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
