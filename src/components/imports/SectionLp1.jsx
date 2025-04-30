import styles from '../../styles/modules/sectionLp1.module.css';

export const SectionLp1 = () => {
    return (
        <section className={styles.sectionContainer}>
            <div className={styles.sectionTitulo}>
                <h1 className="bold-text">LIDER GLOBAL</h1>

                <p className="light-text">
                    Contamos con más de 30 años de experiencia, en G Steel Trade te garantizamos soluciones logísticas eficientes y el suministro
                    confiable de acero de alta calidad para todo el mercado internacional. Nuestro compromiso con la rentabilidad, la flexibilidad y
                    el servicio post venta sin duda nos posiciona como un aliado estratégico para tu negocio.
                </p>
            </div>

            {/* Fondo animado */}
            <div className={`${styles.bg} ${styles.bg1}`}></div>
        </section>
    );
};
