import React, {useEffect, useState} from 'react'
import './App.css'
import LinkCard from './components/LinkCard.jsx'

const App = () => {
  const [data, set_data] = useState('');
  const [url_val, set_url] = useState('');
  const url_handler = (event) => {
    console.log(event.target.value)
    set_url(event.target.value);
  };

  const submit_download = async () => {
    const resdata = await fetch(`http://localhost:3000/download?url=${url_val}`)
    set_data(resdata);
    //console.log(data)
    set_url('');
  };

  const get_video = () => {
    fetch(`http://localhost:3000/download?url=${url_val}`)
    .then(res => res.json())
    .then(json => set_data(json));

    set_url('');
  }

  return(
    <>
      <div id="header-background">
          <div id="header">
          <h1>YT2DL</h1>
          <div>
            <a href="">HOME</a>
            <a href="">README</a>
            <a href="https://www.github.com/java-hater">GITHUB</a>  
          </div> 
        </div>  
      </div>
      
      <div id="card-background">
        <div className="mainCard">
          <div className="videoLabel">
            <label htmlFor="video">Type a valid YouTube video URL</label>
          </div>
          <div className="magicCard">
            <input 
              type="text"
              name="video"
              value={url_val}
              onChange={url_handler}
              placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            />
          </div>
          <div className="downloadButton">
            <button type="submit" onClick={get_video}>Download</button>
          </div>
        </div>
      </div>
      
      <div id="spawnCards">
        {data?data.metadata.map((format_name, i) => (
          <div className="linkCard" key={i}>
            <LinkCard formatter={format_name}/>
          </div>
        )) : <div id="waiting"> </div>}
      </div>
    </>
  );
}
export default App;
