import styles from '../../styles/modules/sectionLp2.module.css';

import imgSectionLp2 from '../../assets/images/img-lp-section-2.webp';

import { itemsSectionLp2 } from '../utils/itemsSectionLp2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SectionLp2 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h2 className="bold-text">¿QUIENES SOMOS?</h2>

                <p className="light-text">
                    G Steel Trade nació en 2008 y, gracias al esfuerzo conjunto de todos nuestros colaboradores, se ha consolidado como una de las
                    empresas líder en soluciones logísticas y suministro de acero para el mercado global. Siempre adaptados a las exigentes politicas
                    y dinámicas internacionales, te brindamos nuestra rentabilidad, eficiencia y flexibilidad, cuenta siempre con la transparencia y
                    la responsabilidad que nos caracteriza.
                </p>
            </header>

            <section className={styles.sectionContenido}>
                <img src={imgSectionLp2} alt="Fabrica distribuidora de acero, muy moderna, vista desde afuera" />

                <div className={styles.itemsContainer}>
                    {itemsSectionLp2.map((item) => (
                        <div key={item.id} className={styles.itemContainer}>
                            <div className={styles.itemHeader}>
                                <FontAwesomeIcon icon={item.icono} className={styles.itemIcon} />

                                <h3 className="bold-text">{item.title}</h3>
                            </div>

                            <p className="light-text">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </section>
    );
};
