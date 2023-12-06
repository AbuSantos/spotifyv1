import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "streaming",
  "user-read-private",
  "user-library-read",
  "user-top-read",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
].join(",");

//the parameters needed to query the api
const params = {
  scopes: scopes,
};

//queryParams now has all of the string attached to it
const queryParams = new URLSearchParams(params);

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParams.toString()}`;
console.log("query params", queryParams);
console.log("loging url", LOGIN_URL);
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
  redirectUri: "http://localhost:3000",
});

export default spotifyApi;

export { LOGIN_URL };

// console.log("THis is ", spotifyApi);
