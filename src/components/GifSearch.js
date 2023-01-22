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
      <label>
        <p>Enter a Search Term:</p>
      <input onChange={handleChange} value={search}></input>
      </label>
        <button type="submit">Find Gifs</button>
    </form>
}

export default GifSearch