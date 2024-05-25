const DisplayText = ({randomPhrase}) => {
    return (
        <div className="text-box">
            <div className="box_svg">
                <img src="../../assets/rectangle2.svg" alt="img" />
            </div>
            {randomPhrase ?
                (<div>
                    <p className="text_fortune_random">{randomPhrase.phrase}</p>
                </div> )
                :
                <p className="text_fortune_random">Presiona para ver tu suerte</p>
            }

            
      </div>
    );
  }
  
  export default DisplayText;
  