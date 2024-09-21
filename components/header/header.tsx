"use client"

import Image from 'next/image';
import './header.css'
import { useState } from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className='header'>
            <div className='header_container container'>
                <div className='header_logo'>
                    <Image src={'/logo.png'} height={29} width={131} alt='Logo' />
                </div>
                <div className='header_hamburger' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ?
                        <Image src={'/cross.svg'} height={15} width={15} alt='Hamburger menu' /> :
                        <Image src={'/hamburger.svg'} height={24} width={24} alt='Hamburger menu' />
                    }
                </div>
                <div className={`header_list ${isOpen ? 'visible' : ''}`}>
                    <div className="header_list_item">
                        Features
                    </div>
                    <div className="header_list_item">
                        Pricing
                    </div>
                    <div className="header_list_item login">
                        <Image src={'/lock.svg'} height={14} width={14} alt='Lock' className='header_list_item_lock' /> Login
                    </div>
                    <div className="header_list_item header_cta">
                        Try For Free
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;