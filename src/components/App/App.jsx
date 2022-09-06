import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainPage from "../Pages/MainPage/MainPage";

import { HashRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <div className="app">
            <HashRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route
                        path="text"
                        element={
                            <div className="container">
                                <h2 className="page__title">
                                    THIS IS THE PAGE WITH TEXT
                                </h2>
                            </div>
                        }
                    />
                    <Route
                        path="text_text"
                        element={
                            <div className="container">
                                <h2 className="page__title">
                                    THIS IS THE PAGE WITH TEXT_TEXT
                                </h2>
                            </div>
                        }
                    />
                    <Route
                        path="text_text_text"
                        element={
                            <div className="container">
                                <h2 className="page__title">
                                    THIS IS THE PAGE WITH TEXT_TEXT_TEXT
                                </h2>
                            </div>
                        }
                    />
                    <Route
                        path="firstblock-link-1"
                        element={
                            <div className="container">
                                <h2 className="page__title">
                                    THIS IS THE PAGE FROM FIRST LINK
                                </h2>
                            </div>
                        }
                    />
                    <Route
                        path="firstblock-link-2"
                        element={
                            <div className="container">
                                <h2 className="page__title">
                                    THIS IS THE PAGE FROM SECOND LINK
                                </h2>
                            </div>
                        }
                    />
                </Routes>

                <Footer />
            </HashRouter>
        </div>
    );
};

export default App;
