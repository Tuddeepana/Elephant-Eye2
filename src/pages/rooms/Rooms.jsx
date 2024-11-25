// src/pages/rooms/Rooms.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

import Img1 from "../../assets/img/gallery/rooms/family.jpg";
import Img2 from "../../assets/img/gallery/rooms/triple1.jpg";
import Img3 from "../../assets/img/gallery/rooms/double.jpg"; // New image import
import Img4 from "../../assets/img/gallery/rooms/Twin.jpg";

import LandingPage from "../../assets/subPages/LandingPage.jsx";
import Footer from "../../utils/Footer.jsx";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { FaRulerCombined, FaUserFriends } from "react-icons/fa";

const Rooms = () => {
    const navigate = useNavigate();

    const handleBookNow = () => {
        navigate("/roomtable");
    };

    const rooms = [
        {
            images: [Img3], // New room
            title: "Deluxe Double Room",
            size: "30 SQM",
            occupancy: "02",
            description: "A cozy room perfect for couples with modern amenities.",
            price: "$35 per night"
        },
        {
            images: [Img4],
            title: "Deluxe Twin Room",
            size: "32 SQM",
            occupancy: "02",
            description: "A comfortable room with all the essential facilities.",
            price: "$27 per night"
        },
        {
            images: [Img2],
            title: "Deluxe Triple Room",
            size: "32 SQM",
            occupancy: "03",
            description: "A comfortable room with all the essential facilities.",
            price: "$38 per night"
        },
        {
            images: [Img1],
            title: "Deluxe Family Room",
            size: "46 SQM",
            occupancy: "04 (With an extra bed)",
            description: "A luxurious room with a beautiful view and modern amenities.",
            price: "$50 per night"
        }
    ];

    return (
        <div className="overflow-x-hidden">
            <LandingPage />

            {/* Header Section */}
            <div className="flex flex-col items-center justify-center px-4">
                <h1 className="text-center text-6xl md:text-8xl mt-24 font-bold" style={{ color: '#2a2a2a' }}>Rooms</h1>
                <p className="text-center max-w-2xl mt-4 text-lg md:text-xl font-semibold">
                    Experience a perfect blend of adventure and relaxation for an unforgettable stay immersed in culture and tranquility.
                </p>
            </div>

            {/* Room Cards Section */}
            <div className="mt-24 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-screen-xl mx-auto">
                    {rooms.map((room, index) => (
                        <div
                            key={index}
                            className="relative bg-white shadow-lg rounded-xl overflow-hidden group transition-transform transform hover:scale-105 duration-300"
                            style={{ width: '90%', margin: 'auto' }}
                        >
                            {/* Image Wrapper */}
                            <div className="relative h-48 overflow-hidden">
                                {/* Single Image */}
                                <img
                                    src={room.images[0]}
                                    alt={room.title}
                                    className="absolute top-0 left-0 w-full h-full object-cover"
                                />
                            </div>
                            {/* Content */}
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2 text-gray-800">{room.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{room.description}</p>
                                <div className="flex items-center text-gray-600 text-sm mb-2">
                                    <FaRulerCombined className="mr-2" />
                                    {room.size}
                                </div>
                                <div className="flex items-center text-gray-600 text-sm mb-4">
                                    <FaUserFriends className="mr-2" />
                                    {room.occupancy}
                                </div>
                                <div className="text-lg font-semibold text-gray-800 mb-4">
                                    {room.price}
                                </div>
                                {/* Book Now Text */}
                                <div
                                    className="font-bold text-lg cursor-pointer hover:underline"
                                    style={{ color: '#0e6a11' }}
                                    onClick={handleBookNow}
                                >
                                    Book Now
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/+94707676750"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
                style={{ maxWidth: 'calc(100% - 16px)' }}
            >
                <WhatsAppIcon className="text-xl" />
            </a>

            {/* Footer */}
            <div className="mt-24">
                <Footer />
            </div>
        </div>
    );
};

export default Rooms;