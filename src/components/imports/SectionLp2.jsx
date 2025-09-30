import styles from '../../styles/modules/sectionLp2.module.css';

import imgSectionLp2 from '../../assets/images/img-lp-section-2.webp';

export const SectionLp2 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h2 className="bold-text">TRAYECTORIA</h2>

                <p className="light-text">
                    Siendo una empresa en constante expansión, Global Steel Trade - GST, líder en el mercado, se ha adaptado a las exigentes dinámicas
                    del mercado, fortaleciendo su presencia desde su creación en el 2008, y permitiendo a sus aliados comerciales y clientes obtener
                    la mejor experiencia en términos de rentabilidad, eficiencia, flexibilidad y asistencia post venta exclusivo durante todos estos
                    años.
                </p>

                <p className="light-text">
                    Hoy día, estamos felices de ser reconocidos como la mejor organización con la que puedes contar para asesorarte en lo que
                    necesites, gracias al esfuerzo de todos nuestros colaboradores que día a día se esfuerzan en hacer de tu tiempo y tu negocio una
                    vivencia placentera.
                </p>
            </header>

            <div className={styles.sectionContenido}>
                <div className={styles.contenido1}>
                    <img src={imgSectionLp2} alt="Fabrica distribuidora de acero, muy moderna, vista desde afuera" />

                    <div>
                        <h3 className="bold-text">La estrategia</h3>

                        <p className="light-text">
                            Nos enfocamos en entender tus necesidades y requerimientos para convertirnos en tu principal aliado, ofrecerte respuestas
                            oportunas, asesorarte con los productos correctos y brindarte la mejor experiencia personalizada de la industria, con la
                            transparencia, responsabilidad y experticia que mereces y que nos caracteriza.
                        </p>
                    </div>
                </div>

                <div className={styles.contenido2}>
                    <h3 className="bold-text">¿Cómo lo hacemos?</h3>

                    <p className="light-text">
                        Nuestra gestión comercial abarca un amplio número de proveedores y estamos comprometidos en continuar fortaleciendo nuestra
                        presencia en Centro y Latinoamérica, ofreciendo las más innovadoras soluciones de logística y financieras.
                    </p>

                    <p className="light-text">
                        Las sólidas alianzas estratégicas que mantenemos con muchos de los principales productores de acero en China, Turquía,
                        Vietnam, Tailandia, Malasia, entre otros, nos da una importante ventaja táctica, permitiéndonos proporcionarle opciones que no
                        solo se enfoquen en obtener productos de alta calidad, sino también cumplir con los más altos estándares en el servicio
                        proporcionado.
                    </p>

                    <hr />
                </div>

                <div className={styles.contenido3}>
                    <div>
                        <h3 className="bold-text">Nuestra misión es:</h3>

                        <p className="light-text">
                            Obtener y entregar de manera confiable productos de acero de alta calidad a nuestros clientes en todo el mundo, fomentando
                            asociaciones a largo plazo a través de la integridad, la eficiencia y los servicios personalizados.
                        </p>
                    </div>

                    <div>
                        <h3 className="bold-text">Nuestra visión es:</h3>

                        <p className="light-text">
                            Ser la empresa comercializadora de acero más confiable e innovadora del mercado global, ofreciendo soluciones sustentables
                            y estableciendo el punto de referencia en eficiencia, integridad y satisfacción del cliente.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
