import React, {useState} from "react";

function GifSearch({onSubmitForm}){
    const [search, setSearch] = useState("")
    function handleSubmit(e){
        e.preventDefault()
        onSubmitForm(search)
    }

    function handleChange(e){
        setSearch(e.target.value)
    }
    return<form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={search}></input>
        <button type="submit">submit</button>
    </form>
}

export default GifSearch