import FirstBlock from "../FirstBlock/FirstBlock";
import Header from "../Header/Header";
import SecondBlock from "../SecondBlock/SecondBlock";
import Footer from "../Footer/Footer";

const App = () => {
    return (
        <div className="app">
            <Header />
            <FirstBlock />
            <SecondBlock />
            <Footer />
        </div>
    );
};

export default App;
