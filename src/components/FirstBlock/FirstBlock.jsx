import img1 from "../../assets/first-block1.svg";
import img2 from "../../assets/first-block2.svg";
import arrow from "../../assets/arrow-right.svg";

const FirstBlockItems = [
    {
        id: 1,
        logo: img1,
        title: "TEXT_TEXT",
        text: "TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT",
        link: "TEXT",
    },
    {
        id: 2,
        logo: img2,
        title: "TEXT_TEXT",
        text: "TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT_TEXT",
        link: "TEXT",
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
                                        <div className="first__item-caption">
                                            <div className="first__img-container">
                                                <img
                                                    src={item.logo}
                                                    alt=""
                                                    className="first__img"
                                                />
                                                <div className="first__item-title">
                                                    {item.title}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="first__item-text">
                                            {item.text}
                                        </div>
                                        <a
                                            href={item.link}
                                            className="first__item-link"
                                        >
                                            {item.link}
                                            <img src={arrow} alt="to" />
                                        </a>
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
