import styles from '../../styles/modules/sectionLp4.module.css';

import { itemsSectionLp4 } from '../utils/itemsSectionLp4';

export const SectionLp4 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h2 className="bold-text">SERVICIOS</h2>

                <p className="light-text">
                    ofrecemos soluciones logísticas y apoyo operacional que garantiza la eficiencia, calidad y seguridad en cada etapa del proceso.
                </p>
            </header>

            <div className={styles.sectionContenido}>
                {itemsSectionLp4.map((item) => (
                    <div key={item.id} className={styles.card} style={{ backgroundImage: `url(${item.image})` }}>
                        <h3 className="bold-text">{item.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};
