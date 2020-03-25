import React from 'react'
import { Switch, Route } from "react-router-dom";
import App from "./App";
import PokeDetails from './components/PokeDetails';

const Routes = () =>{
    return(
        <Switch>
            <Route path="/" component={App} exact/>
            <Route path="/PokeDetails"  component={PokeDetails}/>
        </Switch>
    )
}
export default Routes
