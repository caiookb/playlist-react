import { TracksTypes } from "../types";

const initialState = {
  list: [],
  selected_track: {},
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TracksTypes.SAVE_TRACKS:
      return { ...state, list: payload };
    case TracksTypes.SAVE_TRACK_DETAIL:
      return { ...state, selected_track: payload };
    case TracksTypes.CLEAR_TRACKS:
      return { ...payload };
    case TracksTypes.UPDATE_TRACKS:
      return { ...state };
    default:
      return state;
  }
};
