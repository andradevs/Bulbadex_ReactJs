import React from "react"
import { Link } from 'react-router-dom'
import "pokemon-font/css/pokemon-font.css";
import './styles/PokeCell.css'

const PokeCell = (props) => {
    
    return (
        <Link className="pokemon" to={`/PokeDetails?id=${props.id}`}>
            <div className="pokeBox">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt="not found" />
            </div>
            <span>{props.name}</span>
        </Link>
    )
}

export default PokeCell;