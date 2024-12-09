import React, { useState, useEffect } from "react";
import Footer from "../../utils/Footer.jsx";
import LandingPage from "../../assets/subPages/LandingPage.jsx";
import HomeCover from "../../assets/subPages/HomeCover.jsx";
import Card from "../../assets/Components/Cards/Card1/Card.jsx";
import CenteredLine from "../../assets/Components/Divider/CenteredLine.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import Reviews from "../../assets/subPages/Reviews.jsx";
import Chinees from "../../assets/img/cardImages/chinese.jpg";
import Srilanka from '../../assets/img/cardImages/srilanka.jpg';
import Western from '../../assets/img/cardImages/western.jpg';
import Kirind from '../../assets/img/cardImages/kirirnda.jpg';
import Nine from '../../assets/img/cardImages/nine.jpg';

import Kataragama from '../../assets/img/cardImages/kataragama.jpg';
import Thissamaharama from '../../assets/img/cardImages/thissamahara.jpg';
import Bundala from '../../assets/img/cardImages/Bundala.jpg';
import Ridiyagama from '../../assets/img/cardImages/ridiyagama.jpg';
import Kururlu from '../../assets/img/cardImages/kururlu.jpg';
import Dry from '../../assets/img/cardImages/Dry.jpg';
import Ridi from '../../assets/img/cardImages/ridi.jpg';
import Offer from '../../assets/img/common/Offer.jpg';

import '../../style/main.css';
import RoomCategories from "../../assets/subPages/RoomCategories.jsx";

const Popup = ({ imageUrl, onClose, isMinimized, onMinimize, isVisible }) => (
    <div className={`popup-overlay ${isMinimized ? "minimized" : ""} ${!isVisible ? "popup-hidden" : ""}`} onClick={onMinimize}>
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-icon" onClick={onClose}>&times;</span>
            <img src={imageUrl} alt="Popup" className="popup-image" />
        </div>
    </div>
);

const Home = () => {
    const active = 0; // Added constant

    const [isPopupVisible, setIsPopupVisible] = useState(true);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isMinimizedVisible, setIsMinimizedVisible] = useState(true);

    useEffect(() => {
        if (active === 1) {
            setIsPopupVisible(true);
        } else {
            setIsPopupVisible(false);
            setIsMinimizedVisible(false);
        }
    }, [active]);

    const handleClosePopup = () => {
        setIsPopupVisible(false);
        setIsMinimizedVisible(false);
    };

    const handleMinimizePopup = () => {
        setIsMinimized(true);
        setIsMinimizedVisible(true);
    };

    const handleTogglePopup = () => {
        setIsMinimized(false);
        setIsPopupVisible(true);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 769,
                settings: "unslick"
            }
        ]
    };

    const slides = [
        {
            imageUrl: Ridiyagama,
            title: "Yala National Park",
            location: "Elephant eye to Yala - 34Min",
            description: "A beautiful place to visit"
        },
        {
            imageUrl: Kirind,
            title: " Kirinda Temple & Beach",
            location: "Elephant eye to Kirinda - 23 min",
            description: "A beautiful place to visit"
        },
        {
            imageUrl: Kataragama,
            title: "Kataragama",
            location: "Elephant eye to kataragama - 28Min",
            description: "A beautiful place to visit"
        },
        {
            imageUrl: Thissamaharama,
            title: "Tissamaharama Temple",
            location: "Elephant eye to Tissamaharama - 7min",
            description: "A beautiful place to visit"
        },
        {
            imageUrl: Bundala,
            title: "Bunadala Birds Paradise",
            location: "Elephant eye to Bundala - 23 min",
            description: "A beautiful place to visit"
        },
        {
            imageUrl: Ridi,
            title: "Ridiyagama",
            location: "Elephant eye to Ridiyagama - 50 min",
            description: "A beautiful place to visit"
        },
        {
            imageUrl: Nine,
            title: "Ella",
            location: "Elephant eye to Ella - 1hr 49 min",
            description: "A beautiful place to visit"
        },
        {
            imageUrl: Dry,
            title: "Mirijjawila Botanical Garden",
            location: "Elephant eye to Mirijjawila - 37 min",
            description: "A beautiful place to visit"
        },
        {
            imageUrl: Kururlu,
            title: "Birds Park Hambantota",
            location: "Elephant eye to Kurulu Uyana - 50 min",
            description: "A bird sanctuary with diverse species"
        },
    ];

    const unbeatableOffers = [
        {
            imageUrl: Srilanka,
            title: "Sri Lankan Delicacies",
            location: "",
            description: ""
        },
        {
            imageUrl: Chinees,
            title: "Chinese Cuisines ",
            location: "",
            description: ""
        },
        {
            imageUrl: Western,
            title: "Western Dishes ",
            location: "",
            description: ""
        }
    ];

    return (
        <>
            <div className="overflow-hidden">
                <LandingPage />
            </div>
            {isPopupVisible && (
                <Popup
                    imageUrl={Offer}
                    onClose={handleClosePopup}
                    isMinimized={isMinimized}
                    onMinimize={handleMinimizePopup}
                    isVisible={isMinimizedVisible}
                />
            )}

            <div className={isPopupVisible && !isMinimized ? "blur-background" : ""}>
                <div className="overflow-hidden">
                    <div className="flex flex-col items-center justify-center px-4">
                        <h1 className="text-center text-8xl mt-24 font-bold" style={{color: '#2a2a2a'}}>Elephant
                            Eye</h1>
                        <p className="mt-6 font-semibold text-base">Where Tranquility Embraces Elegance!</p>
                        <p className="text-center max-w-2xl mt-4 text-xl font-semibold">
                            Experience a perfect blend of adventure and relaxation for an unforgettable stay immersed in
                            culture and tranquility.
                        </p>
                        <h1 className="text-center text-3xl mt-16 font-bold" style={{color: '#2a2a2a'}}>-Why Book Direct
                            with us-</h1>
                        <p className="text-center max-w-2xl mt-4 text-xl font-semibold">
                            Through Book with us get Discount
                        </p>

                    </div>

                    <div className="mt-24">
                        <HomeCover/>
                    </div>

                    <h1 className="text-center text-7xl mt-24 font-bold" style={{color: '#2a2a2a'}}>Trunk Cafe And
                        Restaurant</h1>
                    <div className="mt-8 flex justify-center w-full overflow-hidden">
                        <div className="w-full max-w-full md:max-w-6xl">
                            <div className="block md:hidden">
                                <Slider {...settings}>
                                    {unbeatableOffers.map((slide, index) => (
                                        <Card
                                            key={index}
                                            imageUrl={slide.imageUrl}
                                            title={slide.title}
                                            location={slide.location}
                                            description={slide.description}
                                        />
                                    ))}
                                </Slider>
                            </div>
                            <div className="hidden md:flex justify-between space-x-4">
                                {unbeatableOffers.map((slide, index) => (
                                    <Card
                                        key={index}
                                        imageUrl={slide.imageUrl}
                                        title={slide.title}
                                        location={slide.location}
                                        description={slide.description}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <RoomCategories />

                    <h1 className="text-center text-7xl mt-24 font-bold" style={{ color: '#2a2a2a' }}>Conventional Location</h1>
                    <div className="mt-8 flex justify-center w-full overflow-hidden">
                        <div className="w-full max-w-full md:max-w-6xl">
                            <div className="block md:hidden">
                                <Slider {...settings}>
                                    {slides.map((slide, index) => (
                                        <Card
                                            key={index}
                                            imageUrl={slide.imageUrl}
                                            title={slide.title}
                                            location={slide.location}
                                            description={slide.description}
                                        />
                                    ))}
                                </Slider>
                            </div>
                            <div className="hidden md:grid grid-cols-3 gap-4">
                                {slides.map((slide, index) => (
                                    <Card
                                        key={index}
                                        imageUrl={slide.imageUrl}
                                        title={slide.title}
                                        location={slide.location}
                                        description={slide.description}
                                    />
                                ))}
                            </div>
                            <CenteredLine />
                        </div>
                    </div>

                    <div className='mt-24'>
                        <Reviews />
                    </div>
                </div>

                <Footer />

                <a
                    href="https://wa.me/+94707676750"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
                    style={{ maxWidth: 'calc(100% - 16px)' }}
                >
                    <WhatsAppIcon />
                </a>
            </div>
            {active === 1 && isMinimized && isMinimizedVisible && (
                <button className="toggle-button" onClick={handleTogglePopup}>
                    Show Offer
                </button>
            )}
            {active === 1 && !isMinimized && (
                <button className="toggle-button" onClick={handleMinimizePopup}>
                    Offer
                </button>
            )}
        </>
    );
};

export default Home;