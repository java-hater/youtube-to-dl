const express = require('express');
const ytdl = require('ytdl-core');

const app = express();
var cors = require('cors');

//test
const fs = require('fs');
//ytdl('https://www.youtube.com/watch?v=dQw4w9WgXcQ').pipe(fs.createWriteStream('video.mp4'));

app.use(cors());
app.get('/download', async (request, result) => {
  const url = request.query.url
  ytdl(url).pipe(fs.createWriteStream('request.mp4'))
  const video_id = await ytdl.getURLVideoID(url)
  const meta_data = await ytdl.getInfo(url)
  let data = {
    url: 'https://www.youtube.com/embed/' + video_id,
    metadata: meta_data.formats
  }
  return result.send(data)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is running on https://localhost:${port}`)
})
