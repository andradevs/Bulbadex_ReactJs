import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "pokemon-font/css/pokemon-font.css";
import './styles/PokeCell.css'

const PokeCell = (props) => {
    
    const [sprite,setSprite] = useState(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`)
    // const [sprite,setSprite] = ``

    const notFoundImg = (event) =>{
        setSprite(require('../assets/not-found-icon-19.jpg'))
        console.log('hi')
    }
    return (
        <Link className="pokemon" to={`/PokeDetails?id=${props.id}`}>
            <div className="pokeCard">
                <div className="pokeBox">
                    <img src={sprite} onError={notFoundImg} alt="not found" />
                </div>
                {/* <div className="pokeName"> */}
                    <p>{props.name}</p>
                {/* </div> */}
            </div>
        </Link>
    )
}

export default PokeCell;