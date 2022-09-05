import { useState } from "react";

import logo from "../../assets/logo.svg";
import introImg from "../../assets/intro.png";

const Header = () => {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__left">
                        <div className="header__logo">
                            <div className="logo__container">
                                <img
                                    src={logo}
                                    alt="logo"
                                    className="logo__img"
                                />
                            </div>

                            <div className="logo__name"> logo</div>
                        </div>

                        <div className="header__intro">
                            <div className="intro__info">
                                <h1 className="page__title">text_text_text</h1>
                                <div className="intro__text">
                                    text_text_text_text
                                </div>
                            </div>

                            <button className="intro__button">
                                text_text_text
                            </button>
                        </div>
                    </div>

                    <div className="header__right">
                        <nav className="header__nav">
                            <ul className="nav__list">
                                <li className="nav__item">text</li>
                                <li className="nav__item">text_text</li>
                                <li className="nav__item">text_text</li>
                            </ul>
                        </nav>

                        <button
                            className={
                                isOpened ? "burger burger--active" : "burger"
                            }
                            type="button"
                            onClick={() => {
                                setIsOpened(!isOpened);
                            }}
                        >
                            <span>Открыть навигацию</span>
                        </button>
                    </div>

                    <div className="intro__img-container">
                        <img
                            src={introImg}
                            alt="intro"
                            className="intro__img"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
