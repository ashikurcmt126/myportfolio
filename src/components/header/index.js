
import React, { useState } from 'react'
import Mobile from './mobile'
import './style.css'
import Web from './web'

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="header">
            <div className="logo">
                Overreacted
            </div>
            <div className="menu">
                <div className="web-menu">
                    <Web />
                </div>
                <div className="mobile-menu">
                    <div onClick={()=> setIsOpen(!isOpen)}>
                        <i class="fi-rr-apps menu-icon"></i>
                    </div>
                </div>
                {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
            </div>
        </div>
    )
}

export default Header
