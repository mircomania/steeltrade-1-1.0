import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const BotonNav = ({
    to = '/',
    ariaLabel = 'Ir a la página de inicio',
    className = 'boton-1 bold-text',
    title = 'Haz clic para ir a la página de inicio',
    children = 'IR AL INICIO',
    dataCta,
    dataLink,
}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();

        const esAncla = to.startsWith('#');
        const idDestino = to.replace('#', '');

        if (location.pathname === '/' && esAncla) {
            const targetElement = document.getElementById(idDestino);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth',
                });
            }
        } else if (esAncla) {
            navigate(`/#${idDestino}`);
        } else {
            navigate(to);
        }
    };

    return (
        <button
            onClick={handleClick}
            className={className}
            title={title}
            aria-label={ariaLabel}
            {...(dataCta ? { 'data-cta': dataCta } : {})}
            {...(dataLink ? { 'data-link': dataLink } : {})}
        >
            {children}
        </button>
    );
};

BotonNav.propTypes = {
    to: PropTypes.string,
    ariaLabel: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node,
    dataCta: PropTypes.any,
    dataLink: PropTypes.any,
};
