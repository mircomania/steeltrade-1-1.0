import styles from '../../styles/modules/errorPage.module.css';

import { TitleSEO } from '../utils/TitleSEO';
import { BotonNav } from '../utils/BotonNav';

const ErrorPage = () => {
    return (
        <main>
            <TitleSEO title="Method Lab | Error" description="Lo sentimos, la página que buscas no existe." metaNoIndex={true} />

            <section className={styles.sectionContainer}>
                <header className={styles.sectionTitulo}>
                    <h1 className="bold-text">Error 404</h1>

                    <h2 className="light-text">Página no encontrada</h2>

                    <p className="light-text">Lo sentimos, la página que estás buscando no existe.</p>
                </header>

                <div className={styles.sectionContenido}>
                    <BotonNav dataLink="error-home-btn" />
                </div>
            </section>
        </main>
    );
};

export default ErrorPage;
