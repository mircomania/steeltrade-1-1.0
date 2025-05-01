import { navLinks } from '../utils/navBarMenu';

import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (e, link) => {
        e.preventDefault();

        if (location.pathname === '/') {
            // Si ya estás en la página principal, realiza el scroll a la sección
            const targetElement = document.querySelector(link.to);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 55, // Ajuste para compensar el navbar
                    behavior: 'smooth',
                });
            }
        } else {
            // Si estás en otra página, navega a la landing page con el hash
            navigate(`/${link.to}`);
        }

        toggleMenu(); // Cerrar el menú hamburguesa
    };

    const handleInicioClick = (e) => {
        e.preventDefault();

        if (location.pathname === '/') {
            // Ya estás en la página principal, scroll al top
            const topElement = document.querySelector('#inicio') || document.body;
            topElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Navegar a la página principal
            navigate('/#inicio');
        }

        toggleMenu(); // Cerrar el menú hamburguesa
    };

    return (
        <div className="burger-menu">
            {/* Icono de barras para abrir el menú */}
            <FontAwesomeIcon icon={faBars} className="burger-menu-icon" onClick={toggleMenu} />

            {/* Contenedor del menú móvil */}
            <div className={`mobile-nav-menu ${isOpen ? 'open' : ''}`}>
                {/* Opciones del menú */}
                <ul className="burger-menu-nav bold-text">
                    {navLinks.map((link, index) => (
                        <div className="link-container" key={link.id}>
                            <li>
                                {(() => {
                                    if (link.id === 'inicio') {
                                        return (
                                            <a href="/" onClick={handleInicioClick} title={link.title}>
                                                {link.label}
                                            </a>
                                        );
                                    } else if (link.to.startsWith('#')) {
                                        return (
                                            <a href={link.to} onClick={(e) => handleLinkClick(e, link)} title={link.title}>
                                                {link.label}
                                            </a>
                                        );
                                    } else {
                                        return (
                                            <NavLink to={link.to} onClick={toggleMenu} title={link.title}>
                                                {link.label}
                                            </NavLink>
                                        );
                                    }
                                })()}
                            </li>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};
