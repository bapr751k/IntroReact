import React from 'react'

            // aquí hacemos uso de las props
const Navbar = ({brand}) => {
  return (
     <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand text-upercase" href="/">{brand}</a>
        </div>
     </nav>
  )
}

export default Navbar