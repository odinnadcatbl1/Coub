import logo from "../../assets/logo.svg";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__logo">
                        <div className="logo__container">
                            <img src={logo} alt="logo" className="logo__img" />
                        </div>

                        <div className="logo-name"> logo</div>
                    </div>

                    <nav className="header__nav">
                        <ul className="nav__list">
                            <li className="nav__item">text</li>
                            <li className="nav__item">text_text</li>
                            <li className="nav__item">text_text</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
