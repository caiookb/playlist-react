import Spotify from "spotify-web-api-js";
import { ArtistsActions } from "../libs/redux/actions";

const spotifyWebApi = new Spotify();

export const getArtistList = (artist) => (dispatch) => {
  try {
    spotifyWebApi.searchArtists(artist).then((res) => {
      dispatch(
        ArtistsActions.saveArtists(
          res.artists?.items?.sort((a, b) => b.popularity > a.popularity)
        )
      );
    });
  } catch (error) {
    throw error;
  }
};

export const getRelatedArtist = (artist) => (dispatch) => {
  try {
    spotifyWebApi.getArtistRelatedArtists(artist.id).then((res) => {
      dispatch(ArtistsActions.saveArtistRelated(res.artists));
    });

    console.log("mamou");
  } catch (error) {
    throw error;
  }
};

export const getRelatedArtistTopTracks = async (artist) => {
  try {
    return await (
      await spotifyWebApi.getArtistTopTracks(artist.id, "US")
    ).tracks
      .sort((a, b) => b.popularity > a.popularity)
      .slice(0, 5);
  } catch (error) {
    throw error;
  }
};
