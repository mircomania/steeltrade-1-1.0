import { useLanguage } from '../../contexts/LanguageContext';
import { texts } from '../utils/texts';

import styles from '../../styles/modules/sectionLp2.module.css';

import imgSectionLp2 from '../../assets/images/img-lp-section-2.webp';

export const SectionLp2 = () => {
    const { language } = useLanguage();
    const { title, p1, p2, t1, p3, t2, p4, p5, t3, p6, t4, p7 } = texts[language].section2;

    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h2 className="bold-text">{title}</h2>

                <p className="light-text">{p1}</p>

                <p className="light-text">{p2}</p>
            </header>

            <div className={styles.sectionContenido}>
                <div className={styles.contenido1}>
                    <img src={imgSectionLp2} alt="Fabrica distribuidora de acero, muy moderna, vista desde afuera" />

                    <div>
                        <h3 className="bold-text">{t1}</h3>

                        <p className="light-text">{p3}</p>
                    </div>
                </div>

                <div className={styles.contenido2}>
                    <h3 className="bold-text">{t2}</h3>

                    <p className="light-text">{p4}</p>

                    <p className="light-text">{p5}</p>

                    <hr />
                </div>

                <div className={styles.contenido3}>
                    <div>
                        <h3 className="bold-text">{t3}</h3>

                        <p className="light-text">{p6}</p>
                    </div>

                    <div>
                        <h3 className="bold-text">{t4}</h3>

                        <p className="light-text">{p7}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
