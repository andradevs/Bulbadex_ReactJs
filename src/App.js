import React from 'react';
import './App.css';
import "@fortawesome/fontawesome-free/css/all.css"
import PokeList from './components/PokeList'



function App() {
  return (
    <>
      <div className="container">
        <PokeList />
      </div>
    </>
  );
}

export default App;
