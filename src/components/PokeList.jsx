import React, { Component } from 'react';
import PokeCell from './PokeCell'
import "./styles/PokeList.css"

// import { getPokemons } from '../controllers/pokemonController'

export default class PokeList extends Component {


    constructor() {
        super();
        this.state = {
            results: [],
            limit: 12,
            next: `https://pokeapi.co/api/v2/pokemon?limit=${12}`,
            previous: "",
            count: 0,
            nPages: 0,
            curPage: 1
        }
        this.getPokemons = this.getPokemons.bind(this)
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.setPage = this.setPage.bind(this)

    }

    UNSAFE_componentWillMount() {
        this.getPokemons(this.state.next)

    }

    getPokemons(url) {
        const pokemons = fetch(url)
            .then(res => res.json())
            .then(res => {
                const { count, results, next, previous } = res
                this.setState({
                    results,
                    next,
                    previous,
                    count,
                    nPages: Math.ceil((count) / this.state.limit)
                })
            })
        return pokemons;
    }

    nextPage() {
        this.setState({
            curPage: this.state.curPage + 1
        })
        this.getPokemons(this.state.next)
        console.log('aqui')
    }

    setPage(curPage) {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${this.state.limit}&offset=${(curPage - 1) * this.state.limit}`
        this.getPokemons(url)
        this.setState({
            curPage
        })
    }

    previousPage() {
        this.setState({
            curPage: this.state.curPage - 1 <= 0 ? 1 : this.state.curPage - 1
        })
        this.getPokemons(this.state.previous)
        console.log('ali')
    }


    render() {

        const { results } = this.state
        const list = results.map(poke => {
            return <PokeCell key={poke.name} name={poke.name} id={poke.url.match(/\/pokemon\/(\d+)\//)[1]} />
        })

        return (
            <div className="content">
                <div className="pagination">
                    {this.state.curPage - 1 > 0 && <button onClick={(e) => this.previousPage()}>Prev</button>}
                    {this.state.curPage - 3 > 0 &&
                        <>
                            <span onClick={(e) => this.setPage(1)}>{1}</span> 
                            <span onClick={(e) => this.setPage(Math.floor((1 + this.state.curPage)/2))}> ...</span>
                        </>
                    }
                    {this.state.curPage - 2 > 0 && <span onClick={(e) => this.setPage(this.state.curPage - 2)}>{this.state.curPage - 2}</span>}
                    {this.state.curPage - 1 > 0 && <span onClick={(e) => this.setPage(this.state.curPage - 1)}>{this.state.curPage - 1}</span>}
                    {<span className="active-page" onClick={(e) => this.setPage(this.state.curPage)}>{this.state.curPage}</span>}
                    {this.state.curPage + 1 <= this.state.nPages && <span onClick={(e) => this.setPage(this.state.curPage + 1)}>{this.state.curPage + 1}</span>}
                    {this.state.curPage + 2 <= this.state.nPages && <span onClick={(e) => this.setPage(this.state.curPage + 2)}>{this.state.curPage + 2}</span>}
                    {this.state.curPage + 2 < this.state.nPages &&
                        <>
                            <span onClick={(e) => this.setPage(Math.ceil((this.state.nPages + this.state.curPage)/2))} >...</span>
                            <span onClick={(e) => this.setPage(this.state.nPages)}>{this.state.nPages}</span>
                        </>
                    }
                    {this.state.curPage + 1 < this.state.nPages && <button onClick={(e) => this.nextPage(this)}>Next</button>}
                </div>
                <div className="pokeContainer">
                    {list}
                </div>
                <div className="pagination">
                    {this.state.curPage - 1 > 0 && <button onClick={(e) => this.previousPage()}>Prev</button>}
                    {this.state.curPage - 3 > 0 &&
                        <>
                            <span onClick={(e) => this.setPage(1)}>{1}</span> 
                            <span onClick={(e) => this.setPage(Math.floor((1 + this.state.curPage)/2))}> ...</span>
                        </>
                    }
                    {this.state.curPage - 2 > 0 && <span onClick={(e) => this.setPage(this.state.curPage - 2)}>{this.state.curPage - 2}</span>}
                    {this.state.curPage - 1 > 0 && <span onClick={(e) => this.setPage(this.state.curPage - 1)}>{this.state.curPage - 1}</span>}
                    {<span className="active-page" onClick={(e) => this.setPage(this.state.curPage)}>{this.state.curPage}</span>}
                    {this.state.curPage + 1 <= this.state.nPages && <span onClick={(e) => this.setPage(this.state.curPage + 1)}>{this.state.curPage + 1}</span>}
                    {this.state.curPage + 2 <= this.state.nPages && <span onClick={(e) => this.setPage(this.state.curPage + 2)}>{this.state.curPage + 2}</span>}
                    {this.state.curPage + 2 < this.state.nPages &&
                        <>
                            <span onClick={(e) => this.setPage(Math.ceil((this.state.nPages + this.state.curPage)/2))} >...</span>
                            <span onClick={(e) => this.setPage(this.state.nPages)}>{this.state.nPages}</span>
                        </>
                    }
                    {this.state.curPage + 1 < this.state.nPages && <button onClick={(e) => this.nextPage(this)}>Next</button>}
                </div>
            </div>
        )
    }
}
