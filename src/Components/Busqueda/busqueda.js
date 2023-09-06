import React, {useState} from 'react'
import Bitcoins from '../Assets/Coin.png'
import '../Coins/Style.css'

export default function Busqueda({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  }

  return (
    <>
      <img className="imagenBit" src={Bitcoins} alt="logo"/>
      <h2>Buscar moneda virtual</h2> 
      <div className="input-group row">
        <form className="d-flex" onSubmit={handleSearch}>
          <input
            className="form-control me-4"
            type="search"
            placeholder="Busqueda"
            aria-label="Search"
            value={searchTerm}
            onChange={(e)=> setSearchTerm(e.target.value)}
          />
          <button className="btn btn-success" type="submit">
            buscar
          </button>
        </form>
      </div>    
    </>
  
  );

};

