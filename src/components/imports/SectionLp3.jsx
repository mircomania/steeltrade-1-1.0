import styles from '../../styles/modules/sectionLp3.module.css';

import { itemsSectionLp3 } from '../utils/itemsSectionLp3';

export const SectionLp3 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h2 className="bold-text">PRODUCTOS</h2>

                <p className="light-text">
                    Nuestra especialidad es siempre la más alta calidad en productos de acero al carbón planos, largos y tubulares.
                </p>
            </header>

            <div className={styles.sectionContenido}>
                {itemsSectionLp3.map((item) => (
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
