import React, { useState, useEffect } from 'react'
import Pokemon from '../models/Pokemon'
import './styles/PokeDetails.css'
import { useLocation, Link } from "react-router-dom";





const PokeDetails = props => {
    const [poke, setPoke] = useState({})
    const [isError, setIsError] = useState(false)
    const query = new URLSearchParams(useLocation().search).get("id")

    async function _getDetails(id) {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                return new Pokemon(res)
            }).catch(err => setIsError(true))
        setPoke(pokemon)
    }

    useEffect(() => {
        _getDetails(query)
    }, [query])



    console.log(poke)

    return (
        <div className="container">
            {!isError ?
                <>
                    <Link to={`/PokeDetails?id=${poke.id - 1}`} className="circle-btn"><i className="fas fa-arrow-left"></i></Link>
                    <div className="poke-content">
                        <div className="poke-display">
                            <img src={poke.sprite} alt={poke.name} />
                        </div>
                        <div className="poke-details">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Nº:</td>
                                        <td>{poke.id}</td>
                                    </tr>
                                    <tr>
                                        <td>Nome:</td>
                                        <td>{poke.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Tipo:</td>
                                        <td>{poke.types}</td>
                                    </tr>
                                    <tr>
                                        <td>Altura:</td>
                                        <td>{poke.height}m</td>
                                    </tr>
                                    <tr>
                                        <td>Peso:</td>
                                        <td>{poke.weight}Kg</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <Link to={`/PokeDetails?id=${poke.id + 1}`} className="circle-btn"><i className="fas fa-arrow-right"></i></Link>
                </>
                : <div className="poke-content">
                    <h1>Pokemon Não encontrado</h1>
                </div>
            }
        </div>
    )
}

export default PokeDetails