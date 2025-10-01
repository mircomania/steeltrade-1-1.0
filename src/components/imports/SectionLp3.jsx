import { useLanguage } from '../../contexts/LanguageContext';
import { texts } from '../utils/texts';

import styles from '../../styles/modules/sectionLp3.module.css';

import { itemsSectionLp3 } from '../utils/itemsSectionLp3';

export const SectionLp3 = () => {
    const { language } = useLanguage();
    const { title, description } = texts[language].section3;
    const items = itemsSectionLp3[language];

    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h2 className="bold-text">{title}</h2>

                <p className="light-text">{description}</p>
            </header>

            <div className={styles.sectionContenido}>
                {items.map((item) => (
                    <div key={item.id} className={styles.itemContainer}>
                        <h3 className="bold-text">{item.title}</h3>
                        <img src={item.image} alt={item.title} />

                        <ul className={styles.productList}>
                            {item.products.map((prod) => (
                                <li key={prod} className="light-text">
                                    {prod}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};
