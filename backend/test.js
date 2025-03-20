//const express = require('express');
const ytdl = require('ytdl-core');

//const app = express();
//var cors = require('cors');

//test
const fs = require('fs');
//ytdl('https://www.youtube.com/watch?v=dQw4w9WgXcQ').pipe(fs.createWriteStream('video.mp4'));

var testurl ='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
async function test_yt(url) {
  const video_id = await ytdl.getURLVideoID(url);
  const meta_data = await ytdl.getInfo(url);
}
console.log(video_id);
console.log(meta_data);
