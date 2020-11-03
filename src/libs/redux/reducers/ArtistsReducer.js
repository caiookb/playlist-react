import { ArtistsTypes } from "../types";

const initialState = {
  list: [],
  selected_artist: {},
  related_artists: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ArtistsTypes.SAVE_ARTISTS:
      return { ...state, list: payload };
    case ArtistsTypes.SAVE_ARTIST_RELATED:
      return { ...state, list: payload };
    case ArtistsTypes.SAVE_ARTIST_DETAIL:
      return { ...state, selected_artist: payload };
    case ArtistsTypes.CLEAR_ARTISTS:
      return { ...payload };
    case ArtistsTypes.UPDATE_ARTISTS:
      return { ...state };
    default:
      return state;
  }
};
