import img1 from "../../assets/second-block1.svg";
import img2 from "../../assets/second-block2.svg";
import img3 from "../../assets/second-block3.svg";
import img4 from "../../assets/second-block4.svg";

const SecondBlockItems = [
    {
        id: 1,
        img: img1,
        text: "TEXT_TEXT_TEXT_TEXT_ TEXT_TEXT_TEXT_TEXT_ TEXT_TEXT_TEXT_TEXT",
    },
    {
        id: 2,
        img: img2,
        text: "TEXT_TEXT_TEXT_TEXT_ TEXT_TEXT_TEXT_TEXT_ TEXT_TEXT_TEXT_TEXT",
    },
    {
        id: 3,
        img: img3,
        text: "TEXT_TEXT_TEXT_TEXT_ TEXT_TEXT_TEXT_TEXT_ TEXT_TEXT_TEXT_TEXT",
    },
    {
        id: 4,
        img: img4,
        text: "TEXT_TEXT_TEXT_TEXT_ TEXT_TEXT_TEXT_TEXT_ TEXT_TEXT_TEXT_TEXT",
    },
];

const SecondBlock = () => {
    return (
        <section className="second__block">
            <div className="container">
                <h2 className="second__block-title page__title">text-text</h2>
                <div className="second__block-inner">
                    <ul className="second__block-list">
                        {SecondBlockItems.map((item) => {
                            return (
                                <li
                                    key={item.id}
                                    className="second__block-item"
                                >
                                    <div className="second__img-container">
                                        <img
                                            src={item.img}
                                            alt=""
                                            className="second__item-img"
                                        />
                                    </div>

                                    <div className="second__item-text">
                                        {item.text}
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

export default SecondBlock;
