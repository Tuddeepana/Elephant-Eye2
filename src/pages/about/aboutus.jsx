import LandingPage from "../../assets/subPages/LandingPage.jsx";
import React from "react";
import Footer from "../../utils/Footer.jsx";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import { Box, Typography, Button } from "@mui/material";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import Visiting from "../../assets/pdf/Visiting card.pdf";

function AboutUs() {
    return (
        <div className="overflow-x-hidden max-w-screen">
            <LandingPage />

            {/* About Us Header Section */}
            <div className="flex flex-col items-center justify-center px-4 max-w-full">
                <h1 className="text-center text-6xl md:text-8xl mt-24 font-bold" style={{ color: '#2a2a2a' }}>About Us</h1>
                <p className="mt-4 text-xl italic">Where Tranquility Embraces Elegance!</p>

                {/* Intro Text Section */}
                <div className="text-center max-w-2xl mt-4 text-lg leading-relaxed px-4">
                    <p>
                        It brings us great pleasure to introduce Elephant Eye Hotel, situated in close
                        proximity to the awe-inspiring Yala National Park at the heart of Sri Lanka. Our establishment
                        presents 15 tastefully appointed rooms, complete with essential amenities including air
                        conditioning, hot water, swimming pool, and Wi-Fi access, ensuring a delightful and comfortable stay
                        for our esteemed guests.
                    </p>
                    <p className="mt-4">
                        In our ongoing pursuit of service excellence and broadening our horizons, we are enthusiastic about
                        cultivating partnerships with distinguished organizations such as the TUI Group. By pooling our respective
                        strengths, we are confident that we can mutually enrich the hospitality landscape.
                    </p>
                    <p className="mt-4 font-semibold">
                        We extend a cordial invitation to explore potential collaboration opportunities with Elephant Eye Hotel.
                    </p>
                </div>

                {/* Contact Details */}
                <Box display="flex" flexDirection="column" alignItems="center" mt={6} className="px-4 max-w-full">
                    <Typography variant="h5" component="div" gutterBottom>
                        Contact Us
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<ContactPhoneIcon />}
                        href={Visiting}
                        download
                        sx={{ mt: 2, backgroundColor: '#0e6a11', '&:hover': { backgroundColor: '#0c5a0e' } }}
                    >
                        Download Our Visiting Card
                    </Button>
                </Box>

                {/* Social Media Section */}
                <Box display="flex" flexDirection="column" alignItems="center" mt={6} className="px-4 max-w-full">
                    <Typography variant="h5" component="div" gutterBottom>
                        Connect with Us
                    </Typography>
                    <Typography variant="body1" align="center" sx={{ mt: 1, color: "gray" }}>
                        For more information, please contact Dinindu.
                    </Typography>
                    {/*<div className="flex space-x-4 mt-4">*/}
                    {/*    <a href="https://www.facebook.com/elephanteyehotel" target="_blank" rel="noopener noreferrer">*/}
                    {/*        <FacebookIcon style={{ fontSize: 40, color: "#3b5998" }} />*/}
                    {/*    </a>*/}
                    {/*    <a href="https://www.instagram.com/elephanteyehotel" target="_blank" rel="noopener noreferrer">*/}
                    {/*        <InstagramIcon style={{ fontSize: 40, color: "#E1306C" }} />*/}
                    {/*    </a>*/}
                    {/*    <a href="https://www.google.com/search?q=elephant+eye+hotel+yala" target="_blank" rel="noopener noreferrer">*/}
                    {/*        <GoogleIcon style={{ fontSize: 40, color: "#DB4437" }} />*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                </Box>
            </div>

            {/* Footer */}
            <div className="mt-2.5 ">
                <Footer />
            </div>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/yourwhatsappnumber"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
                style={{ maxWidth: 'calc(100% - 16px)' }}
            >
                <WhatsAppIcon />
            </a>
        </div>
    );
}

export default AboutUs;
