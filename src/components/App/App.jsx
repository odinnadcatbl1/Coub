import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainPage from "../Pages/MainPage/MainPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
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
                </Routes>

                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
