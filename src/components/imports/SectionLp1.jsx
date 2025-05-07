import styles from '../../styles/modules/sectionLp1.module.css';

export const SectionLp1 = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sectionTitulo}>
                <h1 className="bold-text">LIDER GLOBAL</h1>

                <p className="light-text">
                    Más de 30 años de práctica en el manejo de soluciones logísticas y suministro de acero en el mercado global nos permite afirmar
                    que el éxito en las operaciones y servicios que brindamos está garantizado
                </p>
            </div>

            {/* Fondo animado */}
            <div className={`${styles.bg} ${styles.bg1}`}></div>
        </section>
    );
};
