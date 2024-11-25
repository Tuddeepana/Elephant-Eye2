// src/utils/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import hotel_logo from "../assets/img/common/hotel_logo.png";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import BookingModal from '../assets/Components/modal/BookingModal..jsx';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getLinkClass = (path) => {
        return window.location.pathname === path ? "text-[#0e6a11]" : "hover:text-[#0e6a11]";
    };

    const handleModalOpen = () => {
        navigate('/roomtable');
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 p-1 transition-colors duration-300 ${
                    isScrolled ? "bg-white  text-black" : "bg-black bg-opacity-70 text-white"
                }`}
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <button onClick={toggleMenu} className="lg:hidden p-2 focus:outline-none">
                        {isOpen ? (
                            <CloseIcon fontSize="large" className="text-slate-500" />
                        ) : (
                            <MenuIcon fontSize="large" className="text-slate-500" />
                        )}
                    </button>

                    <div className={`hidden lg:flex space-x-6`}>
                        <Link to="/" className={getLinkClass("/")}>Home</Link>
                        <Link to="/rooms" className={getLinkClass("/rooms")}>Rooms</Link>
                    </div>

                    <div className="flex-1 flex justify-center">
                        <img src={hotel_logo} alt="Hotel Logo" className="h-18 w-44" />
                    </div>

                    <div className={`hidden lg:flex space-x-6 items-center`}>
                        <Link to="/gallery" className={getLinkClass("/gallery")}>Gallery</Link>
                        <Link to="/aboutus" className={getLinkClass("/aboutus")}>About us</Link>
                        <button
                            onClick={handleModalOpen}
                            className="px-4 py-2 bg-[#0e6a11] text-white font-semibold rounded hover:bg-[#0c5a0e]"
                        >
                            Book Now
                        </button>
                    </div>

                    <div className="lg:hidden">
                        <button
                            onClick={handleModalOpen}
                            className="px-4 py-2 bg-yellow-700 text-white font-semibold rounded hover:bg-yellow-800"
                        >
                            Book Now
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="lg:hidden mt-4 text-center py-4 rounded-lg space-y-4">
                        <Link to="/" className="block hover:text-[#0e6a11]">Home</Link>
                        <Link to="/rooms" className="block hover:text-[#0e6a11]">Rooms</Link>
                        <Link to="/gallery" className="block hover:text-[#0e6a11]">Gallery</Link>
                        <Link to="/aboutus" className="block hover:text-[#0e6a11]">About us</Link>
                    </div>
                )}
            </nav>

            <BookingModal open={isModalOpen} handleClose={handleModalClose} />
        </>
    );
};

export default Navbar;