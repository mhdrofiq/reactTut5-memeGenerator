import React from "react"

export default function Meme(){
    return(
        <main>
            <form className="form">
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
                <button className="form-button">
                    Get a new meme image
                </button>
            </form>
        </main>
    )
}