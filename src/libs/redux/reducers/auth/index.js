import { combineReducers } from "redux";

import ServerReducer from "./ServerReducer";

export default combineReducers({
  server: ServerReducer,
});
