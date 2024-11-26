import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import room from "../img/Lndpg_Imgs/Hero Section 1.jpg";
import beach from "../img/Lndpg_Imgs/Hero section 2.jpg";
import property from "../img/Lndpg_Imgs/h3.jpg"; // Correctly import the property image
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Navbar from "../../utils/Navbar.jsx";

const images = [room, beach, property]; // Add property image to the array
const nationalityOptions = ["Nationality", "Sri Lankan", "Non Sri Lankan"];

const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [Nationality, setNationality] = useState("Nationality");
    const [checkInDate, setCheckInDate] = useState(dayjs());
    const [checkOutDate, setCheckOutDate] = useState(dayjs().add(1, "day"));
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleNationalityChange = (event) => {
        setNationality(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = {};

        if (!checkInDate) {
            validationErrors.checkInDate = "Check-in date must be today or a future date.";
        }

        if (checkOutDate == null) {
            validationErrors.checkOutDate = "Check-out date must be after the check-in date.";
        }

        if (Nationality === "Nationality") {
            validationErrors.nationality = "Please select a nationality.";
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // Submit form if there are no errors
            console.log("Form submitted");
        }
    };

    return (
        <div className="flex flex-col h-screen w-screen overflow-hidden">
            <Navbar />
            <div className="relative flex-grow w-screen h-screen">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                            index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slideshow;