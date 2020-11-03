import React, { useEffect } from "react";
import { RoundedIcon } from "../cards/Cards";
import styles from "./SelectedArtist.module.css";
import { connect } from "react-redux";
import * as ArtistController from "../../controllers/ArtistsController";

export const RelatedArtists = (props) => {
  const { related } = props;
  return (
    <div className={styles.relatedArtists}>
      <RoundedIcon url={related?.images[0].url} />
      <p>{related?.name}</p>
    </div>
  );
};
export const PlaylistList = (props) => {
  const { playlist } = props;
  return playlist?.map((track, key) => {
    return <p key={key}>{track.name}</p>;
  });
};

const SelectedArtist = (props) => {
  const { artistDetail, playlist, saveRelated, related } = props;

  useEffect(() => {
    saveRelated(artistDetail);
  }, []);

  return artistDetail.name ? (
    <div className={styles.ref}>
      <div
        className={styles.selectedArtist}
        style={{
          backgroundImage: `url(${artistDetail.images[0].url})`,
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className={styles.selectedBox}>
        <div className={styles.selectedTitle}>
          <h2>{artistDetail.name}</h2>
          <h3>{"Related artists playlist"}</h3>
          <RelatedArtists related={related} />
        </div>
      </div>
      {/* <PlaylistList playlist={playlist} /> */}
    </div>
  ) : null;
};

const mapStateToProps = (state) => {
  const {
    artists: { selected_artist, related_artists },
  } = state;

  return { artistDetail: selected_artist, related: related_artists };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveRelated: (artist) =>
      dispatch(ArtistController.getRelatedArtist(artist)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedArtist);
