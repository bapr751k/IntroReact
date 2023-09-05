import { Component, useState } from 'react'

const {useState} = React;

const busqueda = () => {
  const [state, setState] = useState({
    monedaVirtual:''
  });
  
  const handleInputChange = (e) => {
    setState({
      // usamos el operador spread para propagar los estados de los demas atributos del objeto state
      ...state,
      [e.target.monedaVirtual]: e.target.value
    })
  }

  return (
    <form>
      <label for="moneda">busqueda de Moneda:</label>      
      <input
        type="text"
        name="moneda"
        onChange={handleInputChange}
      />
      <h2>Se ingreso el nombre: {state.monedaVirtual}</h2>
      <button type="submit">buscar</button>
    </form>    
  );
};

export default busqueda

//ReactDOM.render(<Formulario />, document.getElementById("app"));