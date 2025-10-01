import LogoNavbar from '../../assets/images/test-logo2.png';

import { useLanguage } from '../../contexts/LanguageContext';
import { navLinks } from '../utils/navBarMenu';

import { BurgerMenu } from './BurgerMenu';

import { NavLink, useLocation, useNavigate } from 'react-router-dom';

export const NavBar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const { language, toggleLanguage } = useLanguage();
    const links = navLinks[language]; // elige idioma dinámicamente

    const handleLinkClick = (e, item) => {
        e.preventDefault();

        if (location.pathname === '/') {
            // Si ya estás en la landing page
            const targetElement = document.querySelector(item.to);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 78,
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
                    {links.map((item) => (
                        <li key={item.id}>
                            {item.to.startsWith('#') ? (
                                <a href={item.to} onClick={(e) => handleLinkClick(e, item)} title={item.title}>
                                    {item.label}
                                </a>
                            ) : (
                                <NavLink to={item.to} title={item.title} className={({ isActive }) => (isActive ? 'active' : '')}>
                                    {item.label}
                                </NavLink>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Botón cambio idioma */}
                <button onClick={toggleLanguage} className="btn-lang">
                    {language === 'es' ? 'EN' : 'ES'}
                </button>
            </nav>

            {/* Menú Hamburguesa */}
            <BurgerMenu />
        </header>
    );
};
