import { ArtistsTypes } from "../types";

export const saveArtists = (artists) => ({
  type: ArtistsTypes.SAVE_ARTISTS,
  payload: artists,
});

export const clearArtists = () => ({
  type: ArtistsTypes.CLEAR_ARTISTS,
  payload: {},
});

export const updateArtists = (artists) => ({
  type: ArtistsTypes.UPDATE_ARTISTS,
  payload: artists,
});

export const saveArtistDetail = (artist) => ({
  type: ArtistsTypes.SAVE_ARTIST_DETAIL,
  payload: artist,
});

export const clearArtistDetail = () => ({
  type: ArtistsTypes.CLEAR_ARTIST_DETAIL,
  payload: {},
});

export const updateArtistDetail = (artists) => ({
  type: ArtistsTypes.UPDATE_ARTIST_DETAIL,
  payload: artists,
});

export const saveArtistRelated = (artist) => ({
  type: ArtistsTypes.SAVE_ARTIST_RELATED,
  payload: artist,
});
