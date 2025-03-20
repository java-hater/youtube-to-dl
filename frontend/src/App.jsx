import React, {useEffect, useState} from 'react'
import './App.css'
import Header from './Header.jsx'

const App = () => {
  const [data, set_data] = useState(null);
  const [url, set_url] = useState('');
  const url_handler = (event) => {
    console.log(event.target.value)
    set_url(event.target.value);
  };

  const submit_download = async () => {
    console.log("Push!");
    console.log(url);
    //const data = await fetch(`http://localhost:3000/download?url=${url}`);
    //const data = await fetch(`http://localhost:3000/download/`)
    const resdata = await fetch(`http://localhost:3000/download?url=${url}`)
    console.log(resdata)
    set_data(resdata);
    //console.log(data)
    set_url('');
  };

  return(
    <div>
      <label htmlFor="video">Type a valid YouTube video url</label>
      <input 
        type="text"
        name="video"
        value={url}
        onChange={url_handler}
        placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      />

      <button type="submit" onClick={submit_download}>Download</button>
    </div>
  );
}
export default App;
