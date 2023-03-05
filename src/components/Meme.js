import React from "react"

export default function Meme(){

    //make a state in this component containing a set of values (can set default value here)
    const [meme, setMeme] = React.useState({
        topText: "",
        botText: "",
        randomImage: "https://imgflip.com/s/meme/Laughing-Leo.png"
    })

    //check the contents of the current state
    //console.log.(meme)

    //make a state in this component that will contain all the meme imgs in an array
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        //get memes from api
        fetch("https://api.imgflip.com/get_memes")
            //parse to json
            .then(res => res.json())
            //the json tree here is: data > data > memes
            .then(data => setAllMemes(data.data.memes))
    },[])

    function getMemeImage(){
        //get a random number from the total number of meme imgs
        const randomNumber = Math.floor(Math.random() * allMemes.length) 
        //get the meme img with index of the random number
        const url = allMemes[randomNumber].url
        //set the meme img to component state
        setMeme(prevMeme => ({
            //retain previous values of the state 
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event){
        //stop the page from refeshing after form submit
        event.preventDefault()
        //get keys and values from the target event into local vars 
        const {name, value} = event.target
        //set the values from the event (top text and bot text) into component state
        setMeme(prevMeme => ({
            //retain previous values of the state 
            ...prevMeme,
            [name]: value
        }))
    }

    return(
        <main>
            <div className="form">
                <input 
                    className="form-input"
                    type="text"
                    placeholder="top text"
                    name="topText"
                    //set the default value of the input from component state
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    className="form-input"
                    type="text"
                    placeholder="bottom text"
                    name="botText"
                    //set the default value of the input from component state
                    value={meme.botText}
                    onChange={handleChange}
                />
                <button 
                    className="form-button"
                    onClick={getMemeImage}
                >
                    Get a new meme image
                </button>
            </div>
            <div className="meme-image-container">
                <img src={meme.randomImage} className="meme-image"/>
                <h2 className="meme-text-top">{meme.topText}</h2>
                <h2 className="meme-text-bot">{meme.botText}</h2>
            </div>
        </main>
    )
}