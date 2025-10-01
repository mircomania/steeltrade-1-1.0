import { useLanguage } from '../../contexts/LanguageContext';
import { texts } from '../utils/texts';

import styles from '../../styles/modules/sectionLp4.module.css';

import { itemsSectionLp4 } from '../utils/itemsSectionLp4';

export const SectionLp4 = () => {
    const { language } = useLanguage();
    const { title, description } = texts[language].section4;
    const items = itemsSectionLp4[language];

    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h2 className="bold-text">{title}</h2>

                <p className="light-text">{description}</p>
            </header>

            <div className={styles.sectionContenido}>
                {items.map((item) => (
                    <div key={item.id} className={styles.card} style={{ backgroundImage: `url(${item.image})` }}>
                        <h3 className="bold-text">{item.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};
