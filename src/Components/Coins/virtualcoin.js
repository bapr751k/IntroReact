import React from 'react'
import './Style.css'
const Monedas = ({monedas}) => {
    return (
        <div className='container'>
            <div className='row'>
                {
                    monedas.map((item, index) => (
                        <div key={index} className='col-lg-3 col-md-6 col-sm-12 mb-4'>
                            <div className='card' style={{minWidth: "250px"}}>
                                <h3 className="symbol-coin">
                                <img className='coin-images' src={item.image} alt='ico-vcoin'/>
                                {item.symbol}
                                </h3>
                        <div className='card-body'>
                            <h3 className="id-coin">
                                Id: {item.id}
                            </h3>
                            
                            <p className="price-coin">
                               Precio actual: {item.current_price}
                            </p>
                            <p className="volumen-coin">
                              Volumen Total:  {item.total_volume}
                            </p>
                            <p className="price-coin24h">
                               Precion de cambio 24 hrs: {item.price_change_24h}
                            </p>
                        </div>
                        </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Monedas;
