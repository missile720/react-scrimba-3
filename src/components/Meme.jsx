import React from 'react'
import './Meme.css'
import memesData from "../memesData"

function Meme() {
  const [memeImg, setMemeImg] = React.useState("");

  function getMemeImage(){
    let memesArray = memesData.data.memes;
    let random = Math.floor(Math.random() * memesArray.length);

    setMemeImg(memesArray[random].url);
  }

  return (
    <div className='memeForm'>
        <div className='inputField'>
            <input type="text" name="" placeholder='Top Text' id="topInput" />
            <input type="text" name="" placeholder='Bottom Text' id="bottomInput" />
        </div>
        <div className='buttonField'>
            <button className='submit' onClick={getMemeImage}>Get a new meme image</button>
        </div>
        <div className='imageField'>
            <img className='memeImage' src={memeImg} alt="" />
        </div>
    </div>
  )
}

export default Meme