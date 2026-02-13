import React, { useState } from 'react';
import Link from 'next/link'; 
import style from './NavBar.module.css';
// Ajout des imports FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={style.navbar}>
            {/* Bouton Hamburger (visible quand le menu est fermé) */}
            {!isOpen && (
                <button 
                    className={style.hamburger} 
                    onClick={() => setIsOpen(true)}
                >
                    <div className={style.bar}></div>
                    <div className={style.bar}></div>
                    <div className={style.bar}></div>
                </button>
            )}
            
            <ul className={`${style.navMenu} ${isOpen ? style.navMenuVisible : ''}`}>
                {/* Header du menu avec la croix de fermeture */}
                <div className={style.menuHeader}>
                    <button 
                        className={style.closeButton}
                        onClick={() => setIsOpen(false)}
                        aria-label="Fermer le menu"
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>

                <li><Link href="/" onClick={() => setIsOpen(false)}>Accueil</Link></li>
                
                <li>
                    <span className={style.categoryTitle}>MES PROJETS</span>
                    <ul className={style.dropdownMenu}>
                        <li><Link href="/social-script" onClick={() => setIsOpen(false)}>SocialScript</Link></li>
                        <li><Link href="/paygap-quest" onClick={() => setIsOpen(false)}>PayGap Quest</Link></li>
                    </ul>
                </li>

                <li><Link href="/#section2" onClick={() => setIsOpen(false)}>À propos</Link></li>
                <li><Link href="/#section5" onClick={() => setIsOpen(false)}>Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;