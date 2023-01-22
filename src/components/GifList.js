// import react from "react";

function GiftList({image, name}){
    return <li>
        <h3>{name}</h3>
        <img src={image} alt={name}/>
    </li>
}
export default GiftList