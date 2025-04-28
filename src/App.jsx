import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NavBar } from './components/common/NavBar';
import { Cargando } from './components/utils/Cargando';
import { Footer } from './components/common/Footer';
import { ScrollToTop } from './hooks/ScrollTop';

const LandingPage = lazy(() => import('./components/pages/LandingPage'));

const routes = [{ path: '/', id: 1, element: <LandingPage /> }];

function App() {
    return (
        <BrowserRouter basename="/steeltrade-1-1.0">
            <ScrollToTop />

            <NavBar />

            <Routes>
                {routes.map(({ path, element, id }) => (
                    <Route
                        key={id}
                        path={path}
                        element={
                            <Suspense
                                fallback={
                                    <div className="cargando">
                                        <Cargando />
                                    </div>
                                }
                            >
                                {element}
                            </Suspense>
                        }
                    />
                ))}
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
