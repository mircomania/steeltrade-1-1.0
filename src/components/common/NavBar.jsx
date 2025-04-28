import LogoNavbar from '../../assets/images/logo-provisorio.webp';

import { navLinks } from '../utils/navBarMenu';

import { BurgerMenu } from './BurgerMenu';

import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

export const NavBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeLink, setActiveLink] = useState(navLinks[0].id); // Inicio como predeterminado

    const handleLinkClick = (e, item) => {
        e.preventDefault();
        setActiveLink(item.id); // Establecer el enlace actual como activo

        if (location.pathname === '/') {
            // Si ya estás en la landing page
            const targetElement = document.querySelector(item.to);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop, // Ajuste para compensar el navbar
                    behavior: 'smooth',
                });
            }
        } else {
            // Si estás en otra página, navega a la landing page con el hash
            navigate(`/${item.to}`);
        }
    };

    return (
        <header>
            <nav className="navbar" aria-label="Barra de navegación principal">
                {/* Logo */}
                <div className="logo-container">
                    <NavLink to="/" aria-label="Ir a la página principal">
                        <img src={LogoNavbar} alt="Logotipo de SteelTrade en la barra de navegación" className="logo-navbar" />
                    </NavLink>
                </div>

                {/* Menú de Navegación */}
                <ul className="menu-nav light-text">
                    {navLinks.map((item) => (
                        <li key={item.id}>
                            {item.to.startsWith('#') ? (
                                <a
                                    href={item.to}
                                    onClick={(e) => handleLinkClick(e, item)}
                                    title={item.title}
                                    className={activeLink === item.id ? 'active' : ''}
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <NavLink
                                    to={item.to}
                                    title={item.title}
                                    className={({ isActive }) => (isActive || activeLink === item.id ? 'active' : '')}
                                    onClick={() => setActiveLink(item.id)}
                                >
                                    {item.label}
                                </NavLink>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Menú Hamburguesa */}
            <BurgerMenu />
        </header>
    );
};
