import React from 'react';
import "./index.css"
import Card from "./Components/Cards"
import CabecalhoHeader from "./images/bg-header-desktop.svg"

function App() {
  return (

    <div>

      <header>
        <img className='headerImg' src={CabecalhoHeader} alt="" />
      </header>


      <section>
        <Card />

      </section>

    </div>

  );
}

export default App;
