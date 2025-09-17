import { NavLink } from 'react-router-dom';

import LogoNavbar from '../../assets/images/test-logo3.png';

export const Footer = () => {
    return (
        <footer className="footer">
            <div>
                {/* Logo */}
                <section>
                    <div className="img-logo-footer">
                        <NavLink to="/" aria-label="Ir a la página de inicio">
                            <img src={LogoNavbar} alt="Logo de SteelTrade en el pie de página" loading="lazy" decoding="async" />
                        </NavLink>
                    </div>
                </section>

                {/* Copyright */}
                <section className="utiles-footer light-text">
                    <p>© STEELTRADE | contacto@steeltrade.cl</p>
                </section>
            </div>
        </footer>
    );
};
