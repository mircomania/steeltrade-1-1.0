import styles from '../../styles/modules/sectionLp2.module.css';

import imgSectionLp2 from '../../assets/images/img-lp-section-2.webp';

export const SectionLp2 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionTitulo}>
                <h2 className="bold-text">NOSOTROS</h2>

                <p className="light-text">
                    Siendo una empresa en constante expansión, G Steel Trade, líder en el mercado, se ha adaptado a las exigentes dinámicas del
                    mercado, fortaleciendo su presencia desde su creación en el 2008, y permitiendo a sus aliados comerciales y clientes obtener la
                    mejor experiencia en términos de rentabilidad, eficiencia, flexibilidad y asistencia post venta exclusivo durante todos estos
                    años.
                </p>

                <p className="light-text">
                    Hoy día, estamos muy felices de ser mundialmente reconocidos como la mejor organización con la que puedes contar para asesorarte
                    en lo que necesites, gracias al esfuerzo de todos nuestros colaboradores que día a día se esfuerzan en hacer de tu tiempo y tu
                    negocio una vivencia placentera.
                </p>
            </header>

            <div className={styles.sectionContenido}>
                <div className={styles.contenido1}>
                    <img src={imgSectionLp2} alt="Fabrica distribuidora de acero, muy moderna, vista desde afuera" />

                    <div>
                        <h3 className="bold-text">Estrategia</h3>

                        <p className="light-text">
                            Nos enfocamos en entender tus necesidades y requerimientos para convertirnos en tu principal aliado, ofreciendote
                            respuestas oportunas, asesorandote con los productos correctos y brindandote la mejor experiencia personalizada de la
                            industria, con la transparencia, responsabilidad y experticia que mereces y que nos caracteriza.
                        </p>
                    </div>
                </div>

                <div className={styles.contenido2}>
                    <h3 className="bold-text">Operaciones</h3>

                    <p className="light-text">
                        Nuestra gestión comercial abarca un amplio número de proveedores y estamos muy comprometidos en continuar fortaleciendo
                        nuestra presencia comercial en todo Centro y Latinoamérica, ofreciendo las más innovadoras soluciones financieras y de
                        logística.
                    </p>

                    <p className="light-text">
                        Las sólidas alianzas estratégicas que mantenemos con muchos de los principales productores de acero en China, Turquía,
                        Vietnam, Tailandia, Malasia, entre otros, nos da una muy importante ventaja táctica, esto nos permite proporcionarle opciones
                        que no solo se enfoquen en obtener productos de alta calidad, sino también cumplir con los más altos estándares en el servicio
                        proporcionado.
                    </p>

                    <hr />
                </div>

                <div className={styles.contenido3}>
                    <div>
                        <h3 className="bold-text">Misión</h3>

                        <p className="light-text">
                            Obtener y entregar de la manera mas confiable productos de acero de alta calidad a nuestros clientes en todo el mundo,
                            fomentando asociaciones a largo plazo a través de la integridad, la eficiencia y los servicios personalizados.
                        </p>
                    </div>

                    <div>
                        <h3 className="bold-text">Visión</h3>

                        <p className="light-text">
                            Ser la empresa comercializadora de acero más confiable e innovadora del mercado global, ofreciendo siempre soluciones
                            sustentables y estableciendo el mejor punto de referencia en eficiencia, integridad y satisfacción del cliente.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
