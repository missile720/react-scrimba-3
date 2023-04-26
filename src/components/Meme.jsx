import React from 'react'
import './Meme.css'
//import memesData from "../memesData"

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "", 
    bottomText: "", 
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });

  const [allMeme, setAllMeme] = React.useState([]);

  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(data => setAllMeme(data.data.memes))
  }, []);

  function getMemeImage(){
    let memesArray = allMeme;
    let random = Math.floor(Math.random() * memesArray.length);

    setMeme(prevMeme => ({
      ...prevMeme, 
      randomImage: memesArray[random].url
    }));
  }

  function changeData(event){
    const {name, value} = event.target;

    setMeme(prevMeme => ({
      ...prevMeme,
      [name] : value
    }));

  }

  return (
    <div className='memeForm'>
        <div className='inputField'>
            <input type="text" name="topText" placeholder='Top Text' id="topInput" onChange={changeData}/>
            <input type="text" name="bottomText" placeholder='Bottom Text' id="bottomInput" onChange={changeData}/>
        </div>
        <div className='buttonField'>
            <button className='submit' onClick={getMemeImage}>Get a new meme image</button>
        </div>
        <div className='imageField'>
            <img className='memeImage' src={meme.randomImage} alt="" />
            <h2 className="meme--text top">{meme.topText}</h2>
            <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
    </div>
  )
}

export default Meme