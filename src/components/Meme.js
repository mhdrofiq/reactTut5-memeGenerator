import React from "react"
// import memesData from "../memesData.js"

export default function Meme(){
    

    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumbeer = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumbeer].url
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
        </main>
    )
}