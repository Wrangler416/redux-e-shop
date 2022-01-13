import React from 'react'
import './menu-items.styles.scss'

export default function MenuItems({title}) {
    return (    
    <div className="menu-item">
        <div className="content">
            <h1 className="title"> {title.toUpperCase()} </h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

