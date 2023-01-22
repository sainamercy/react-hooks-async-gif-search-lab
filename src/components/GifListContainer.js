import React, {useEffect, useState} from "react";
import GiftList from "./GifList";
import GifSearch from "./GifSearch";


function GifListContainer(){
    const [giftData, setGiftData] = useState([])
    const [query, setQuery] = useState("dolphin")

    useEffect(()=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=g4rI9ZGPZx9y57B9rTP85yRjZ6gmkRjz`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data.data.slice(0,3))
            setGiftData(data.data.slice(0,3))
        })
    }, [query])

    function handleSubmit(search){
        
        setQuery(search)
    }
    return<div>
        <GifSearch onSubmitForm={handleSubmit}/>
       <ol>
       {giftData.map(gif=><GiftList key={gif.id} image={gif.images.original.url} name={gif.title}/>)}
       </ol>
    </div>
}
export default GifListContainer