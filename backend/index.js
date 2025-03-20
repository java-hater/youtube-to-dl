const express = require('express');
const ytdl = require('ytdl-core');

const app = express();
var cors = require('cors');

app.use(cors());

app.get('/download', async (request, result) => {
  try {
    const url = request.query.url
    //ytdl(url).pipe(fs.createWriteStream('request.mp4'))
    const video_id = await ytdl.getURLVideoID(url)
    const meta_data = await ytdl.getInfo(url)
    let data = {
      url: 'https://www.youtube.com/embed/' + video_id,
      metadata: meta_data.formats
    }
    return result.send(data)
  } catch(err) {
    return result.status(500)
  }
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is running on https://localhost:${port}`)
})
