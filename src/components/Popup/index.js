import React from 'react'
import './style.css'
export default function Popup({setIsClicked, total, setBasket}) {
    const siparisVerildi = () => {
        setIsClicked(false)
        setBasket([])
    }
    return (
        <div className="popup">
            <div className="overlay"></div>
            <div className="popup-container">
                <button onClick={()=>{setIsClicked(false)}} className="close-button">
                        <i className="icon ion-close"></i>
                </button>
                <br/>
                <div className="popup-message">
                    <div>
                        Place the Order
                    </div>
                    <br/>
                    <div >
                        Total: <span>${total}</span>
                    </div>
                    <br/>
                    <br/>
                    <label onClick={()=>{setIsClicked(false)}} className="close-label">
                        Close
                    </label>
                    <label href="#top" onClick={siparisVerildi} className="continue-label">
                        Continue
                    </label>
                </div>
            </div>
        </div> 
    )
}