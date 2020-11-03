import React, { useState, useEffect } from "react";
import "./App.css";
import Spotify from "spotify-web-api-js";

import { PlaylistCreator, Track } from "./views";
import { getHashParams } from "./utils/utils";

const spotifyWebApi = new Spotify();

function App() {
  const [loggedIn, setLoggedIn] = useState(
    getHashParams().access_token ? true : false
  );

  useEffect(() => {
    spotifyWebApi.setAccessToken(getHashParams().access_token);
  }, []);

  return (
    <div className="App">
      <a href="http://localhost:8888">
        <button> Login with Spotify</button>
      </a>
      <PlaylistCreator spotifyWebApi={spotifyWebApi} />
    </div>
  );
}

export default App;
