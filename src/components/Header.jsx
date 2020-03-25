import React from "react";
import './styles/Header.css'





const Header = () => {


    return (
        <header>
            <div className='title'>
                <a href="/"><span>BulbaDex</span></a>
            </div>
            <div className="search-bar">
                <form action="/PokeDetails">
                <input type="text" name="id" placeholder="Bulbasaur..." />
                <button type="submit"><i className="fas fa-search"></i></button>
                </form>
            </div>
        </header>
    )
}

export default Header