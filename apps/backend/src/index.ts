const { TMDBNowPlayingResponseSchemaType } = require('@repo/common');
const fs = require('fs');
const tmdb = require('@repo/tmdb')
// const cors = require('cors');
const express = require('express');
const app = express();
const port = process.env.PORT || 3002;
const bodyParser = require('body-parser');
// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    if (process.env.NODE_ENV === 'production') {
        let data = await tmdb.GetNowPlayingMovies({region:'in'});
        console.log({data});
        res.send(data);
    } else {
        fs.readFile('./cache/nowPlaying.json', 'utf8', function(err, data) {
            if (err) throw err;
            res.send(TMDBNowPlayingResponseSchemaType.parse(JSON.parse(data)));
        });
    }
});


app.listen(port,()=> console.log(`Server is running on port ${port}`));