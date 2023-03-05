import React from "react"
import Header from "./components/Header"
import Meme from "./components/Meme"
// import data from "./data"

export default function App(){
    // const cards = data.map(item => {
    //     return(
    //         <Card
    //             key={item.id}

    //             // the better way of passing props of an object, just pass the whole thing, explicit access in html
    //             item={item}
    //         />
    //     )
    // })

    return(
        <div className="container">
            <Header/>
            <Meme/>
        </div>
    )
}

//bookmark 9hr 38m
