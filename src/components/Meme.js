import React from "react"
// import memesData from "../memesData.js"

export default function Meme(){

    const [meme, setMeme] = React.useState({
        topText: "",
        botText: "",
        randomImage: "https://imgflip.com/s/meme/Laughing-Leo.png"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumbeer = Math.floor(Math.random() * memesArray.length) 
        url = memesArray[randomNumbeer].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    return(
        <main>
            <div className="form">
                <input 
                    className="form-input"
                    type="text"
                    placeholder="top text"
                />
                <input 
                    className="form-input"
                    type="text"
                    placeholder="bottom text"
                />
                <button 
                    className="form-button"
                    onClick={getMemeImage}
                >
                    Get a new meme image
                </button>
            </div>
            <img src={meme.randomImage} className="meme-image"></img>
        </main>
    )
}