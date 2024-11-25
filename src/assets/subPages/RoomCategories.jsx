import React, { useState, useEffect } from 'react';
import Deluxe_Twin from "../img/gallery/rooms/Twin.jpg";
import Triple_room from "../img/gallery/rooms/Triple.jpg";
import Deluxe_family from "../img/gallery/rooms/family.jpg";
import Double_room from "../img/gallery/rooms/double.jpg"; // New added image

const ImageSwitcher = () => {
    const images = {
        "Deluxe Double room": Double_room, // New added room
        "Deluxe Twin room": Deluxe_Twin,
        "Deluxe Triple room": Triple_room,
        "Deluxe family room": Deluxe_family,
    };

    const [selectedImage, setSelectedImage] = useState(images["Deluxe Double room"]); // Default to the new room
    const [activeRoom, setActiveRoom] = useState("Deluxe Double room");
    const [fade, setFade] = useState(false);

    const handleNavClick = (imageKey) => {
        setFade(true);
        setTimeout(() => {
            setSelectedImage(images[imageKey]);
            setActiveRoom(imageKey);
            setFade(false);
        }, 300); // Duration of the fade-out animation
    };

    return (
        <div className="flex flex-col items-center w-full mt-10 px-4">
            {/* Room Description Section */}
            <div className="text-center p-4 md:p-8">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                    Discover Our Elegant Rooms
                </h1>
                <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                    Each room is thoughtfully designed to provide you with unparalleled comfort and relaxation. Enjoy breathtaking views, modern amenities, and the finest hospitality in an atmosphere that blends luxury and warmth.
                </p>
            </div>

            {/* Navigation bar */}
            <nav className="flex flex-wrap justify-center space-x-4 md:space-x-6 text-sm md:text-lg font-semibold mt-4">
                {Object.keys(images).map((key) => (
                    <button
                        key={key}
                        onClick={() => handleNavClick(key)}
                        className={`${
                            activeRoom === key ? "underline" : ""
                        } hover:underline`}
                    >
                        {key}
                    </button>
                ))}
            </nav>

            {/* Display selected image */}
            <div className="w-full md:w-11/12 mt-6">
                <img
                    src={selectedImage}
                    alt="Selected hotel view"
                    className={`w-full h-64 md:h-[75vh] object-cover rounded-2xl transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}
                />
            </div>
        </div>
    );
};

export default ImageSwitcher;