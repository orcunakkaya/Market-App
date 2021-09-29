import React from 'react'
import moneyFormat from '../../Helpers'
import "./style.css"
function Header({total, money}) {
    return (
        <div className="header">
            <div className="app-name">
                    <a href="/">Market App</a>
            </div>
            {total > 0 && (
                    <div className="money">Available Balance <span>${moneyFormat(money - total)}</span></div>
            )}
            {total === 0 && (
                    <div className="money">Your Balance <span>${moneyFormat(money)}</span></div>
            )}
        </div>
    )
}

export default React.memo(Header);
