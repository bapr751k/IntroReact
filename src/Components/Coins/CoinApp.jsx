import React, {useEffect, useState} from 'react';
import './Style.css'
/*import search_icon from '../Assets/search.png'*/
import Monedas from './virtualcoin';
import Busqueda from '../Busqueda/busqueda'


function CoinApp () {

  const [monedas, setResults] = useState([])
  const [buscaDatos, setBuscar] = useState([]);

  const URI = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=es'
  
  const getMonedas = (URI) => {
    fetch(URI)
    .then((response) => response.json())
    .then((data) => {
      setResults(data)
      setBuscar(data)
    })
    .catch((error) => console.log(error))
  }

useEffect(() => {
  getMonedas(URI)
}, [])

const buscarCoin = (searchTermino) => {
  const filtered = monedas.filter((monedas) =>
  monedas.name.toLowerCase().includes(searchTermino.toLowerCase()));

setBuscar(filtered);
}



        return (
            <div className="container col-sm-12">
                <Busqueda onSearch ={buscarCoin}/>                
                <hr/>
                <div className='row'>
                <Monedas monedas={buscaDatos}/>
                </div>
                
                <hr/>
            </div>
        );
    }

export default CoinApp;