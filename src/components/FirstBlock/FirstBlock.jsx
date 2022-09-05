import img1 from "../../assets/first-block1.svg";
import img2 from "../../assets/first-block2.svg";
import arrow from "../../assets/arrow-right.svg";
import { Link } from "react-router-dom";

const FirstBlockItems = [
    {
        id: 1,
        logo: img1,
        title: "TEXT_TEXT",
        text: "TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_ TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_ TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT",
        link: "firstBlock-link-1",
    },
    {
        id: 2,
        logo: img2,
        title: "TEXT_TEXT",
        text: "TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_ TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_ TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT",
        link: "firstBlock-link-2",
    },
];

const FirstBlock = () => {
    return (
        <section className="first__block">
            <div className="container">
                <div className="first__block-inner">
                    <ul className="first__block-list">
                        {FirstBlockItems.map((item) => {
                            return (
                                <li key={item.id} className="first__block-item">
                                    <div className="first__item-inner">
                                        <div className="first__img-container">
                                            <img
                                                src={item.logo}
                                                alt=""
                                                className="first__img"
                                            />
                                        </div>
                                        <div className="first__item-title">
                                            {item.title}
                                        </div>

                                        <div className="first__item-text">
                                            {item.text}
                                        </div>
                                        <Link
                                            to={item.link}
                                            className="first__item-link"
                                        >
                                            TEXT
                                            <img src={arrow} alt="to" />
                                        </Link>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FirstBlock;
