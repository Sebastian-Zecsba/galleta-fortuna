import { useState } from "react";
import DisplayText from "./components/DisplayText";
import ImageRandom from "./components/ImageRandom";

import phrases from './utils/phrases.json'

function App() {
  const images = {
    imageOne: '../../assets/fondo1.png',
    imageTwo: '../../assets/fondo2.png',
    imageThree: '../../assets/fondo3.png',
    imageFour: '../../assets/fondo4.png'
  };

  const [imageRandom, setImageRandom] = useState(images.imageOne);
  const [randomPhrase, setRandomPhrase] = useState(null)
  console.log(randomPhrase)


  const handleImageRandom = () => {
    const imagesKeys = Object.keys(images);
    const randomKey = imagesKeys[Math.floor(Math.random() * imagesKeys.length)];
    const randomIndex = Math.floor(Math.random() * phrases.length)
    
    setRandomPhrase(phrases[randomIndex])
    setImageRandom(images[randomKey]);
  };

  return (
    <div className="container">
      <div className="background-image">
        <ImageRandom imageRandom={imageRandom} />
      </div>
      <div className="box_text">
        <div className="box_text_main">
          <h1>Galletas de la fortuna</h1>
          <button onClick={handleImageRandom}>Probar mi suerte</button>
          <DisplayText 
            randomPhrase={randomPhrase}
          />
        </div>

        {randomPhrase ?  (
                <div className="box_autor">
                    <p className="text_fortune">{randomPhrase.author}</p>
                </div> )
                :
                <p className="text_fortune">Presiona para ver tu suerte</p>}
      </div>
    </div>
  );
}

export default App;
