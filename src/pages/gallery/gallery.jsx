import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import image1 from '../../assets/img/cardImages/Bundala.jpg';
import LandingPage from "../../assets/subPages/LandingPage.jsx";
import Footer from "../../utils/Footer.jsx";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import './gallery.css';


//import the gallery images
import img1 from '../../assets/img/gallery/1 (1).jpg';
import img2 from '../../assets/img/gallery/1 (2).jpg';
import Relaxation from '../../assets/img/gallery/Relaxation.jpg';
import Bird_Eye_View from '../../assets/img/gallery/Bird Eye View.jpg';
import Free_Cycling from '../../assets/img/gallery/Free Cycling.jpg';
import Property_Building from '../../assets/img/gallery/Property Building.jpeg';
import pool1 from '../../assets/img/gallery/pool1.jpeg';
import pool2 from '../../assets/img/gallery/pool2.jpeg';
import pool3 from '../../assets/img/gallery/pool3.jpeg';
import pool4 from '../../assets/img/gallery/pool4.jpeg';
import yala1 from '../../assets/img/gallery/yala1.JPG';
import yala2 from '../../assets/img/gallery/yala2.JPG';
import yala3 from '../../assets/img/gallery/yala3.JPG';
import yala4 from '../../assets/img/gallery/yala4.jpeg';
import Toiletries from '../../assets/img/gallery/Toiletries.jpeg';
import Toothbrushes_for_family_room from '../../assets/img/gallery/Toothbrushes_for_family_room.jpeg';
import Terrace_Balcony from '../../assets/img/gallery/Terrace___Balcony.jpeg';
import coffee_Making from '../../assets/img/gallery/coffee_Making.jpg';


const images = [
    {
        url: Relaxation,
        title: 'Relaxation',
        description: 'Experience the vibrant city life in the heart of Colombo.'
    },
    {
        url: Bird_Eye_View,
        title: 'Bird Eye View',
        description: 'A serene mountain retreat 2 hours from Kandy.'
    },
    {
        url: Free_Cycling,
        title: 'Free Cycling',
        description: 'Experience the vibrant city life in the heart of Colombo.'
    },
    
    {
        url: Property_Building,
        title: 'Building',
        description: 'Experience the vibrant city life in the heart of Colombo.'
    },
    
    {
        url: pool2,
        title: 'Pool',
        description: 'Experience the vibrant city life in the heart of Colombo.'
    },
    {
        url: pool1,
        title: 'Pool',
        description: 'Experience the vibrant city life in the heart of Colombo.'
    },
    {
        url: pool3,
        title: 'Pool',
        description: 'Experience the vibrant city life in the heart of Colombo.'
    },
    {
        url: pool4,
        title: 'Pool',
        description: 'Experience the vibrant city life in the heart of Colombo.'
    },
    {
        url: yala1,
        title: 'Safari',
        description: 'Experience the vibrant city life in the heart of Colombo.'
    },
    {
        url: yala2,
        title: 'Safari',
        description: 'Experience the vibrant city life in the heart of Colombo.'
    },
    {
        url: yala3,
        title: 'Safari',
        description: 'Experience the vibrant city life in the heart of Colombo.'
    },
    {
        url: yala4,
        title: 'Safari',
        description: 'Experience the vibrant city life in the heart of Colombo.'
    },
    {
        url: Toiletries,
        title: 'Toiletries',
        description: 'Experience the vibrant city life in the heart of Colombo.'
    },
    {
        url: Terrace_Balcony,
        title: 'Terrace alcony',
        description: 'Experience the vibrant city life in the heart of Colombo.'
    },
    {
        url: Toothbrushes_for_family_room,
        title: 'Toothbrushes for family room',
        description: 'Experience the vibrant city life in the heart of Colombo.'
    },
    {
        url: coffee_Making,
        title: 'coffee Making',
        description: 'Experience the vibrant city life in the heart of Colombo.'
    }
    // Add more images as needed
];

const Gallery = () => {
    return (
        <div className="w-full min-h-screen overflow-x-hidden">
            <LandingPage />
            
            {/* Header Section */}
            <div className="flex flex-col items-center justify-center w-full">
                <h1 className="text-center text-8xl mt-24 font-bold" style={{ color: '#2a2a2a' }}>Gallery</h1>
                <p className="mt-6 font-semibold text-base">Where Tranquility Embraces Elegance!</p>
                <p className="text-center max-w-2xl mt-4 text-xl font-semibold">
                    Experience a perfect blend of adventure and relaxation for an unforgettable stay immersed in
                    culture and tranquility.
                </p>
            </div>

            {/* Gallery Grid Section */}
            <div className="w-full mt-24 px-4">
                <Grid container spacing={4} justifyContent="center">
                    {images.map((image, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card className="w-full">
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={image.url}
                                    alt={image.title}
                                />
                                <CardContent>
                                    <Typography variant="h6" component="div">
                                        {image.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {image.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>

            {/* Footer Section */}
            <div className="w-full mt-12">
                <Footer />
            </div>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/+94707676750"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
            >
                <WhatsAppIcon />
            </a>
        </div>
    );
};

export default Gallery;
