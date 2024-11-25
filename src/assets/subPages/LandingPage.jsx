import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import room from "../img/Lndpg_Imgs/h1.jpg";
import beach from "../img/Lndpg_Imgs/h2.jpg";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Navbar from "../../utils/Navbar.jsx";

const images = [room, beach];
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














{/* Overlay for White Box */}
          {/*<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 bg-white bg-opacity-70 px-4 py-6 rounded-lg shadow-lg w-full max-w-xl sm:px-10 sm:py-6 md:max-w-2xl lg:max-w-4xl">*/}
          {/*  <form className="space-y-4" onSubmit={handleSubmit}>*/}
          {/*    <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4 lg:space-x-8">*/}
          {/*      <LocalizationProvider dateAdapter={AdapterDayjs}>*/}
          {/*        <DatePicker*/}
          {/*          label="Check-in"*/}
          {/*          value={checkInDate}*/}
          {/*          onChange={(newValue) => setCheckInDate(newValue)}*/}
          {/*          minDate={dayjs()}*/}
          {/*          renderInput={(props) => (*/}
          {/*            <div>*/}
          {/*              {props}*/}
          {/*              {errors.checkInDate && (*/}
          {/*                <span className="text-red-500 text-sm">{errors.checkInDate}</span>*/}
          {/*              )}*/}
          {/*            </div>*/}
          {/*          )}*/}
          {/*        />*/}
          {/*      </LocalizationProvider>*/}

          {/*      <LocalizationProvider dateAdapter={AdapterDayjs}>*/}
          {/*        <DatePicker*/}
          {/*          label="Check-out"*/}
          {/*          value={checkOutDate}*/}
          {/*          onChange={(newValue) => setCheckOutDate(newValue)}*/}
          {/*          minDate={checkInDate}*/}
          {/*          renderInput={(props) => (*/}
          {/*            <div>*/}
          {/*              {props}*/}
          {/*              {errors.checkOutDate && (*/}
          {/*                <span className="text-red-500 text-sm">{errors.checkOutDate}</span>*/}
          {/*              )}*/}
          {/*            </div>*/}
          {/*          )}*/}
          {/*        />*/}
          {/*      </LocalizationProvider>*/}

          {/*      <div className="w-full md:w-1/3 mt-4 md:mt-0">*/}
          {/*        <Select*/}
          {/*          labelId="nationality-select-label"*/}
          {/*          id="nationality-select"*/}
          {/*          value={Nationality}*/}
          {/*          onChange={handleNationalityChange}*/}
          {/*          className="border rounded w-full h-13 text-sm"*/}
          {/*        >*/}
          {/*          {nationalityOptions.map((option, index) => (*/}
          {/*            <MenuItem key={index} value={option}>*/}
          {/*              {option}*/}
          {/*            </MenuItem>*/}
          {/*          ))}*/}
          {/*        </Select>*/}
          {/*        {errors.nationality && (*/}
          {/*          <span className="text-red-500 text-sm">{errors.nationality}</span>*/}
          {/*        )}*/}
          {/*      </div>*/}

          {/*      <div className="mt-4 md:mt-0 md:w-auto w-full">*/}
          {/*        <button*/}
          {/*          type="submit"*/}
          {/*          className="bg-yellow-700 w-full md:w-36 px-6 py-4 text-white font-semibold rounded hover:bg-yellow-800"*/}
          {/*        >*/}
          {/*          Book Now*/}
          {/*        </button>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </form>*/}
          {/*</div>*/}