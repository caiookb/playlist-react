import React, { useState, useEffect } from "react";
import styles from "./PlaylistCreator.module.css";
import { SearchedArtistCard } from "../cards/Cards";
import { connect } from "react-redux";
import { ArtistsActions } from "../../libs/redux/actions";
import SelectedArtist from "../artist-detail/SelectedArtist";
import * as ArtistController from "../../controllers/ArtistsController";

const PlaylistCreator = (props) => {
  const isMobile = window.screen.width < 600;
  const [playlist, setPlaylist] = useState([]);

  const { searchedArtists, selectedArtist } = props;
  const { saveArtistList, saveSelectedArtist } = props;

  const artistList = (artist) => saveArtistList(artist);

  return (
    <div className={styles.container}>
      <div>Create Playlist Based on Artist</div>
      <input onChange={(e) => artistList(e.target.value)} />

      <div className={styles.biggerSection}>
        {isMobile && !selectedArtist ? (
          <div className={styles.searchList}>
            {searchedArtists?.map((artist, key) => (
              <SearchedArtistCard
                selected={artist === selectedArtist}
                onClick={() => {
                  saveSelectedArtist(artist);
                }}
                artist={artist}
                key={key}
              />
            ))}
          </div>
        ) : isMobile && selectedArtist != undefined ? (
          <div className={styles.selectedArtist}>
            <button onClick={() => saveSelectedArtist(undefined)}>
              Go Back
            </button>
            <SelectedArtist artist={selectedArtist} playlist={playlist} />
          </div>
        ) : (
          <React.Fragment>
            <div className={styles.searchList}>
              {searchedArtists?.map((artist, key) => (
                <SearchedArtistCard
                  selected={artist === selectedArtist}
                  onClick={() => {
                    saveSelectedArtist(artist);
                  }}
                  artist={artist}
                  key={key}
                />
              ))}
            </div>
            <div className={styles.selectedArtist}>
              <SelectedArtist artist={selectedArtist} playlist={playlist} />
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { artists } = state;

  return {
    searchedArtists: artists?.list,
    selectedArtist: artists.selectedArtist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveArtistList: (artist) =>
      dispatch(ArtistController.getArtistList(artist)),
    saveSelectedArtist: (artist) =>
      dispatch(ArtistsActions.saveArtistDetail(artist)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistCreator);
