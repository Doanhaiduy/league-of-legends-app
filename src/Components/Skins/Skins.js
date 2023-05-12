import React, { Fragment, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SkinItem from "./SkinItem";
import ModalSkin from "../ModalSkin/ModalSkin";

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1350,
            settings: {
                slidesToShow: 5,
            },
        },
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

function Skin({ skins, name }) {
    const [showModal, setShowModal] = useState(false);
    const [currentSkin, setCurrentSkin] = useState({});
    const handleClick = (skin) => {
        setCurrentSkin(skin);
    };
    return (
        <Fragment>
            {showModal ? (
                <ModalSkin
                    img={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_${currentSkin.num}.jpg`}
                    setShowModal={setShowModal}
                />
            ) : null}
            <Slider className="mt-5 px-5 [" {...settings}>
                {skins?.map((data) => (
                    <SkinItem skin={data} name={name} key={data.id} setShowModal={setShowModal} onClick={handleClick} />
                ))}
            </Slider>
        </Fragment>
    );
}

export default Skin;
