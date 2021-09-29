import React from 'react'
import "./style.css"
import moneyFormat from '../../Helpers'
export default function Products({product, basket, setBasket, total, money}) {

    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)
        // console.log(checkBasket);
        // ürün dah önce eklenmiş
        if(checkBasket){
            checkBasket.amount += 1
			setBasket([...basket.filter(item => item.id !== product.id), checkBasket])

        }else{
            setBasket([...basket, {
                id:product.id,
                amount:1
            }])
        }
    }

    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id)
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
        currentBasket.amount -= 1
        if(currentBasket.amount === 0){
			setBasket([...basketWithoutCurrent])
        }else{
            setBasket([...basketWithoutCurrent, currentBasket])
        }
    }


    return (
        <div className="product">
            <img src={product.image} height="250px" alt="" />
            <div className="product-header" >
                <h6>{product.title}</h6>
                <span>{product.lb} lb</span>
            </div>
            <div className="price">$ {moneyFormat(product.price)}</div>
            <div className="actions">
                <button className="decrease" disabled={!basketItem} onClick={removeBasket}>-</button>
                <span className="amount">{(basketItem && basketItem.amount) || 0}</span>
                <button className="increase" disabled={total + product.price > money} onClick={addBasket} >+</button>
            </div>
        </div>
    )
}

