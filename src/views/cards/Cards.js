import React from "react";
import styles from "./Cards.module.css";

export const RoundedIcon = ({ url }) => (
  <img className={styles.roundedIcon} src={url} />
);

export const SearchedArtistCard = (props) => {
  const { artist, onClick, selected } = props;
  const { name, images, href, key } = artist;

  const markSelected = (selected) => (selected ? "#c8c8c83a" : "unset");

  return (
    <div className={styles.searchList} key={key}>
      <div
        className={styles.artistSearch}
        style={{ backgroundColor: markSelected(selected) }}
        onClick={() => onClick(artist)}
      >
        <RoundedIcon url={images[0]?.url} />
        <p>{name}</p>
      </div>
    </div>
  );
};
