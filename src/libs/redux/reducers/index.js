import { combineReducers } from "redux";

import ArtistsReducer from "./ArtistsReducer";
import AuthReducer from "./auth";
import TracksReducer from "./TracksReducer";

export default combineReducers({
  artists: ArtistsReducer,
  tracks: TracksReducer,
  auth: AuthReducer,
});
