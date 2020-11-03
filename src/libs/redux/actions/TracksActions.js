import { TracksTypes } from "../types";

export const saveTracks = (tracks) => ({
  type: TracksTypes.SAVE_TRACKS,
  payload: tracks,
});

export const clearTracks = () => ({
  type: TracksTypes.CLEAR_TRACKS,
  payload: {},
});

export const updateTracks = (tracks) => ({
  type: TracksTypes.UPDATE_TRACKS,
  payload: tracks,
});

export const saveTrackDetail = (event) => ({
  type: TracksTypes.SAVE_TRACK_DETAIL,
  payload: event,
});

export const clearTrackDetail = () => ({
  type: TracksTypes.CLEAR_TRACK_DETAIL,
  payload: {},
});

export const updateTrackDetail = (tracks) => ({
  type: TracksTypes.UPDATE_TRACK_DETAIL,
  payload: tracks,
});
