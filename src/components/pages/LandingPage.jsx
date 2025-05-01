import { SectionLp1 } from '../imports/SectionLp1';
import { SectionLp2 } from '../imports/SectionLp2';
import { SectionLp3 } from '../imports/SectionLp3';
import { SectionLp4 } from '../imports/SectionLp4';

const LandingPage = () => {
    return (
        <main className="fondo1">
            <section>
                <SectionLp1 />
            </section>

            <section id="section2">
                <SectionLp2 />
            </section>

            <section id="section3">
                <SectionLp3 />
            </section>

            <section id="section4">
                <SectionLp4 />
            </section>
        </main>
    );
};

export default LandingPage;
