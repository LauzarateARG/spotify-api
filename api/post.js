const express = require('express');
const { append } = require('express/lib/response');
const router = express.Router();
const SpotifyWebApi = require("spotify-web-api-node")

router.post('/login',(req, res)=>{
    const spotifyApi = new SpotifyWebApi({
        
    })
})

router.get("/", async (req, res)=>{
    try{
        res.json({
            status:200,
            message:"Get data has successfully posts",
        })
    } catch (err){
        console.log(error);
        return res.status(500).send("Server error")
    }
});

module.exports = router;