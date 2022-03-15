const express = require("express");
const router = express.Router();
const SpotifyWebApi = require("spotify-web-api-node");

router.post("/login", async (req, res) => {
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URL || "http://localhost:3000/home",
    clientId: process.env.CLIENT_ID || "99a0065cbdd34063a3f60e85db844b68",
    clientSecret:
      process.env.CLIENT_SECRET || "e0ea03498cff4f1f82f28ea38dade82c",
  });

  spotifyApi
    .authorizationCodeGrant(req.body.code)
    .then((data) => {
      console.log(data)
      res.json({
        accessToken: data.body.access_token,
        refreshTokne: data.body.refresh_token,
        expireIn: data.body.expires_in,
      });
    })
    .catch((err) => {
      res.sendStatus(400);
      console.log("error--------------->", err);
    });
});

router.post("/refresh", async (req, res) => {
    const refreshToken = req.body.refreshToken;
    const spotifyApi = new SpotifyWebApi({
      redirectUri: process.env.REDIRECT_URL || "http://localhost:3000/home",
      clientId: process.env.CLIENT_ID || "99a0065cbdd34063a3f60e85db844b68",
      clientSecret:process.env.CLIENT_SECRET || "e0ea03498cff4f1f82f28ea38dade82c",
      refreshToken,
    })

    spotifyApi
    .refreshAccessToken()
    .then( (data) =>{
      console.log(data.body)
    } )
    .catch((err)=>{
      console.log(err)
    })
  
});

module.exports = router;
