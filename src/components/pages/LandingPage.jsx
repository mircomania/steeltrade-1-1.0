import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { SectionLp1 } from '../imports/SectionLp1';
import { SectionLp2 } from '../imports/SectionLp2';
import { SectionLp3 } from '../imports/SectionLp3';
import { SectionLp4 } from '../imports/SectionLp4';

const LandingPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                const offsetTop = element.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth',
                });
            }
        }
    }, [location]);

    return (
        <main>
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
