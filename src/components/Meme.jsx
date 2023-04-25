import React from 'react'
import './Meme.css'
import memesData from "../memesData"

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "", 
    bottomText: "", 
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage(){
    let memesArray = allMemeImages.data.memes;
    let random = Math.floor(Math.random() * memesArray.length);

    setMeme(prevMeme => ({
      ...prevMeme, 
      randomImage: memesArray[random].url
    }));
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
            <img className='memeImage' src={meme.randomImage} alt="" />
        </div>
    </div>
  )
}

export default Meme