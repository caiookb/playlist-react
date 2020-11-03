import Spotify from "spotify-web-api-js";
const spotifyWebApi = new Spotify();

export const createPlaylistBasedOnTopTracks = async (artist) => {
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
