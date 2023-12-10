import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.css'

function Header({appName}) {

    const [isTop, setIstop] = useState(true)
    const [transparent, setTransparent] = useState(true)

    const handleNavLinkClick = (e) => {
        const path = e.target.getAttribute('href')
        
        if (path === "/") {
            setTransparent(true)
        } else {
            setTransparent(false)
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            setIstop(document.documentElement.scrollTop === 0)
        }
        
        window.addEventListener('scroll', handleScroll)
        

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        const handleLoad = () => {
            if (window.location.pathname === "/") {
                setTransparent(true)
            } else {
                setTransparent(false)
            }
        }

        window.addEventListener('load', handleLoad)

        return () => {
            window.removeEventListener('load', handleLoad)
        }
    }, [])

    return (
        <header className={`${styles.Header} ${isTop && transparent ? styles.HeaderTransparent : '' } ${!isTop ? styles.HeaderTranslucid : ''}`}>
            <h3>
                <Link to="/">{appName}</Link>
            </h3>
            <nav>
                <ul>
                    <li>
                        <Link to="/" onClick={handleNavLinkClick}>PÁGINA INICIAL</Link>
                    </li>
                    <li>
                        <Link to="/servicos" onClick={handleNavLinkClick}>SERVIÇOS</Link>
                    </li>
                    <li>
                        <Link to="/contato" onClick={handleNavLinkClick}>CONTATO</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header