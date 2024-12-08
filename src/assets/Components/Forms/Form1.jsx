import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid, Container, Typography, Card, CardContent, MenuItem } from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import Bg from '../../img/common/common.jpg';

const ReservationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        nic: '',
        passportNumber: '',
        nationality: 'Sri Lanka',
        countryCode: '',
        mobileNumber: '',
        checkinDate: '',
        checkoutDate: '',
        remarks: '' // Add remarks field
    });

    useEffect(() => {
        const today = new Date().toISOString().split('T')[0];
        setFormData((prevFormData) => ({
            ...prevFormData,
            checkinDate: today,
            checkoutDate: today
        }));

        const reservationDetails = JSON.parse(localStorage.getItem('reservationDetails'));
        if (reservationDetails) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                ...reservationDetails
            }));
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const reservationDetails = JSON.parse(localStorage.getItem('reservationDetails'));
        let selectedRoomsDetails = '';
        reservationDetails.selectedRooms.forEach((room, index) => {
            selectedRoomsDetails += `Room Category: ${room.type}%0ASelected Type: ${room.selectedType}%0ASelected Persons: ${room.selectedPersons}%0A`;
            if (index < reservationDetails.selectedRooms.length - 1) {
                selectedRoomsDetails += '%0A'; // Add a new line between room details
            }
        });

        const message = `Name: ${formData.name}%0AAddress: ${formData.address}%0ANIC: ${formData.nic}%0APassport Number: ${formData.passportNumber}%0ANationality: ${formData.nationality}%0ACountry Code: ${formData.countryCode}%0AMobile Number: ${formData.mobileNumber}%0ACheck-in Date: ${formData.checkinDate}%0ACheck-out Date: ${formData.checkoutDate}%0ARemarks: ${formData.remarks}%0ASelected :%0A${selectedRoomsDetails}`;
        const whatsappUrl = `https://wa.me/94707676750?text=${message}`;
        window.location.href = whatsappUrl;
    };

    return (
        <div style={{ marginTop: '2rem', backgroundImage: `url(${Bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Container maxWidth="sm">
                <Card elevation={3}>
                    <CardContent>
                        <Typography variant="h4" align="center" gutterBottom>
                            Elephant Eye Hotel Reservation Form
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        select
                                        label="Nationality"
                                        name="nationality"
                                        value={formData.nationality}
                                        onChange={handleChange}
                                        required
                                    >
                                        <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
                                        <MenuItem value="Other">Other</MenuItem>
                                    </TextField>
                                </Grid>
                                {formData.nationality === 'Sri Lanka' ? (
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            label="NIC"
                                            name="nic"
                                            value={formData.nic}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                ) : (
                                    <Grid item xs={6}>
                                        <TextField
                                            fullWidth
                                            label="Passport Number"
                                            name="passportNumber"
                                            value={formData.passportNumber}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Grid>
                                )}
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Country Code"
                                        name="countryCode"
                                        value={formData.countryCode}
                                        onChange={handleChange}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Mobile Number"
                                        name="mobileNumber"
                                        value={formData.mobileNumber}
                                        onChange={handleChange}
                                        required
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Check-in Date"
                                        name="checkinDate"
                                        type="date"
                                        value={formData.checkinDate}
                                        onChange={handleChange}
                                        required
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        fullWidth
                                        label="Check-out Date"
                                        name="checkoutDate"
                                        type="date"
                                        value={formData.checkoutDate}
                                        onChange={handleChange}
                                        required
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Remarks"
                                        name="remarks"
                                        value={formData.remarks}
                                        onChange={handleChange}
                                        multiline
                                        rows={4}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                        style={{
                                            backgroundColor: '#329946',
                                            color: '#fff',
                                            padding: '0.75rem',
                                            fontWeight: 'bold'
                                        }}
                                        startIcon={<BookIcon />}
                                    >
                                        Book Now
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
};

export default ReservationForm;