import React, {useEffect, useState} from 'react';
import './Style.css'
import search_icon from '../Assets/search.png'
import Monedas from './virtualcoin';
import Navbar from '../Navbar/Navbar';

import virtualCoin from '../Assets/Coin.png'

function CoinApp () {
     {/* TODA LA LOGICA DE LA PROGRAMACIÓN*/ }

  //LE INDICO QUE MI ESTADO ESTÁ VACIO Y QUE SE VA A LLENAR/POBLAR DE LOS DATOS QUE VIENEN DE LA API
  const [monedas, setResults] = useState([])

  // indico la ruta o el endpoint de la api 
  const URI = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=es'
  
  const getMonedas = (URI) => {
    fetch(URI)
    //esta respuesta la tenemos que convertir a un objeto de javascript
    .then((response) => response.json())
    .then((data) => {
      setResults(data)
    })
    .catch((error) => console.log(error))
  }

// CON DEPENDENCIA VACIA, LA LLAMADA SE EJECUTA UNA VEZ EN LO QUE SE CARGA MI COMPONENTE
// Y SE RENDERIZA.
useEffect(() => {
  getMonedas(URI)//CUANDO SE CARGUE EL COMPONENTE, LLAMA AL METODO Y EJECUTA LA FUNCIÓN ANTERIOR
}, [])

const search = async () => {
  const element = document.getElementsByClassName("coinInput")
      if(element[0].value===''){
          return 0
      }
      
    }

{/* TODA NUESTRA ESTRUCTURA HTML*/}
        return (
            <div className="container">
                <div className="top-bar">
                  <input type="text" className="coinInput" placeholder="Buscar"/>
                    <div className="search-icon" onClick={ () => {search()} }>
                      <img src={search_icon} alt="search_icon"/>
                    </div>
                </div>
                
                <hr/>
                <div className='row'>
                <Monedas monedas={monedas}/>
                </div>
                
                <hr/>
            </div>
        );
    }

export default CoinApp;