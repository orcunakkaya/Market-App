import React, {useState} from 'react'
import BasketItem from '../BasketItem'
import Popup from '../Popup';
import "./style.css";
export default function Basket({basket, products, total, setBasket}) {
    const resetBasket = () => {
        setBasket([])
      }
      const [isClicked, setIsClicked] = useState(false);

    return (
        <div className="basket-container container">
            <h3>Shopping Details</h3>
            <ul className="basket-detail">
                {basket.map(item => (
                    <BasketItem key={item.id} item={item} product={products.find(p=> p.id === item.id)} />
                ))}
            </ul>
            <div className="total">
                Toplam: ${total}
            </div>
            <div className="basket-buttons">
                <button className="basket-reset-btn" onClick={resetBasket}>Reset Cart</button>
                <button onClick={()=>setIsClicked(true)} className="basket-buy-btn">Buy</button>
            </div>
            {
                isClicked && (
                    <Popup setIsClicked={setIsClicked} total={total} setBasket={setBasket} />
                )
            }
        </div>
    )
}
