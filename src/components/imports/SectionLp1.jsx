import { useLanguage } from '../../contexts/LanguageContext';
import { texts } from '../utils/texts';

import styles from '../../styles/modules/sectionLp1.module.css';

export const SectionLp1 = () => {
    const { language } = useLanguage();
    const { title, description } = texts[language].section1;

    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sectionTitulo}>
                <h1 className="bold-text">{title}</h1>
                <p className="light-text">{description}</p>
            </div>

            {/* Fondo animado */}
            <div className={`${styles.bg} ${styles.bg1}`}></div>
        </section>
    );
};
