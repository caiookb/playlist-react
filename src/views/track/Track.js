import React from "react";
import styles from "./Track.module.css";

const Track = (props) => {
  const { prop } = props;

  return (
    <div className={styles.track}>
      <div>Current Playing Track</div>
    </div>
  );
};

export default Track;
