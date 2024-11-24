import React, { useState, useEffect } from 'react';
// import supabase from '../../../service/supabaseClient.js';

const BookingTable = () => {
    const [rows, setRows] = useState([]);
    const [formData, setFormData] = useState({
        guestName: '',
        mobileNumber: '',
        confirmation: '',
        checkInDate: '',
        checkOutDate: '',
        roomNumber: '',
        bookedOn: '',
        bookingPrize: '',
    });

    // Load data from Supabase when the component mounts
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const { data, error } = await supabase.from('bookings').select('*');
        if (error) {
            console.error('Error fetching data: ', error);
        } else {
            setRows(data);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Insert new row into Supabase
        const { error } = await supabase
            .from('bookings')
            .insert([
                {
                    guest_name: formData.guestName,
                    mobile_number: formData.mobileNumber,
                    confirmation: formData.confirmation,
                    check_in_date: formData.checkInDate,
                    check_out_date: formData.checkOutDate,
                    room_number: formData.roomNumber,
                    booked_on: formData.bookedOn,
                    booking_prize: parseFloat(formData.bookingPrize), // Ensure booking prize is numeric
                },
            ]);

        if (error) {
            console.error('Error inserting data: ', error);
        } else {
            // Fetch data again to update the table
            fetchData();
            setFormData({
                guestName: '',
                mobileNumber: '',
                confirmation: '',
                checkInDate: '',
                checkOutDate: '',
                roomNumber: '',
                bookedOn: '',
                bookingPrize: '',
            });
        }
    };

    const handleDeleteRow = async (id) => {
        // Delete row from Supabase
        const { error } = await supabase.from('bookings').delete().eq('id', id);
        if (error) {
            console.error('Error deleting data: ', error);
        } else {
            fetchData(); // Fetch data again to update the table
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Booking Table</h1>

            {/* Form to add a new booking */}
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="grid grid-cols-4 gap-2 mb-2">
                    <input
                        type="text"
                        name="guestName"
                        value={formData.guestName}
                        onChange={handleInputChange}
                        placeholder="Guest Name"
                        className="p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                        placeholder="Mobile Number"
                        className="p-2 border border-gray-300 rounded"
                        pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                        maxLength="10"
                    />
                    <select
                        name="confirmation"
                        value={formData.confirmation}
                        onChange={handleInputChange}
                        className="p-2 border border-gray-300 rounded"
                    >
                        <option value="">Confirmation Status</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <input
                        type="date"
                        name="checkInDate"
                        value={formData.checkInDate}
                        onChange={handleInputChange}
                        className="p-2 border border-gray-300 rounded"
                    />
                </div>
                <div className="grid grid-cols-4 gap-2 mb-2">
                    <input
                        type="date"
                        name="checkOutDate"
                        value={formData.checkOutDate}
                        onChange={handleInputChange}
                        className="p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="text"
                        name="roomNumber"
                        value={formData.roomNumber}
                        onChange={handleInputChange}
                        placeholder="Room Number"
                        className="p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="date"
                        name="bookedOn"
                        value={formData.bookedOn}
                        onChange={handleInputChange}
                        className="p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="number"
                        name="bookingPrize"
                        value={formData.bookingPrize}
                        onChange={handleInputChange}
                        placeholder="Booking Prize"
                        className="p-2 border border-gray-300 rounded"
                        step="0.01"
                    />
                </div>
                <button type="submit" className="p-2 bg-blue-500 text-white rounded mt-4">Add Booking</button>
            </form>

            {/* Displaying the table */}
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                <tr className="bg-gray-200">
                    <th className="border border-gray-300 p-2">Guest Name</th>
                    <th className="border border-gray-300 p-2">Mobile Number</th>
                    <th className="border border-gray-300 p-2">Confirmation</th>
                    <th className="border border-gray-300 p-2">Check-in Date</th>
                    <th className="border border-gray-300 p-2">Check-out Date</th>
                    <th className="border border-gray-300 p-2">Room Number</th>
                    <th className="border border-gray-300 p-2">Booked On</th>
                    <th className="border border-gray-300 p-2">Booking Prize</th>
                    <th className="border border-gray-300 p-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {rows.map((row) => (
                    <tr key={row.id}>
                        <td className="border border-gray-300 p-2">{row.guest_name}</td>
                        <td className="border border-gray-300 p-2">{row.mobile_number}</td>
                        <td className="border border-gray-300 p-2">{row.confirmation}</td>
                        <td className="border border-gray-300 p-2">{row.check_in_date}</td>
                        <td className="border border-gray-300 p-2">{row.check_out_date}</td>
                        <td className="border border-gray-300 p-2">{row.room_number}</td>
                        <td className="border border-gray-300 p-2">{row.booked_on}</td>
                        <td className="border border-gray-300 p-2">{row.booking_prize}</td>
                        <td className="border border-gray-300 p-2">
                            <button onClick={() => handleDeleteRow(row.id)}
                                    className="bg-red-500 text-white p-1 rounded">Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookingTable;
