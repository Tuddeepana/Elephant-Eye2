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
    const [errors, setErrors] = useState({});

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

    const validateForm = () => {
        const newErrors = {};
        if (!formData.guestName) newErrors.guestName = 'Guest Name is required';
        if (!formData.mobileNumber) newErrors.mobileNumber = 'Mobile Number is required';
        if (!/^\d{10}$/.test(formData.mobileNumber)) newErrors.mobileNumber = 'Mobile Number must be 10 digits';
        if (!formData.confirmation) newErrors.confirmation = 'Confirmation Status is required';
        if (!formData.checkInDate) newErrors.checkInDate = 'Check-in Date is required';
        if (!formData.checkOutDate) newErrors.checkOutDate = 'Check-out Date is required';
        if (!formData.roomNumber) newErrors.roomNumber = 'Room Number is required';
        if (!formData.bookedOn) newErrors.bookedOn = 'Booked On date is required';
        if (!formData.bookingPrize) newErrors.bookingPrize = 'Booking Prize is required';
        if (isNaN(parseFloat(formData.bookingPrize))) newErrors.bookingPrize = 'Booking Prize must be a number';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

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
                    booking_prize: parseFloat(formData.bookingPrize),
                },
            ]);

        if (error) {
            console.error('Error inserting data: ', error);
        } else {
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
        const { error } = await supabase.from('bookings').delete().eq('id', id);
        if (error) {
            console.error('Error deleting data: ', error);
        } else {
            fetchData();
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Booking Table</h1>

            <form onSubmit={handleSubmit} className="mb-4">
                <div className="grid grid-cols-4 gap-2 mb-2">
                    <div>
                        <label htmlFor="guestName" className="block mb-1">Guest Name</label>
                        <input
                            type="text"
                            id="guestName"
                            name="guestName"
                            value={formData.guestName}
                            onChange={handleInputChange}
                            placeholder="Guest Name"
                            className="p-2 border border-gray-300 rounded"
                        />
                        {errors.guestName && <p className="text-red-500 text-sm">{errors.guestName}</p>}
                    </div>
                    <div>
                        <label htmlFor="mobileNumber" className="block mb-1">Mobile Number</label>
                        <input
                            type="tel"
                            id="mobileNumber"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleInputChange}
                            placeholder="Mobile Number"
                            className="p-2 border border-gray-300 rounded"
                            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                            maxLength="10"
                        />
                        {errors.mobileNumber && <p className="text-red-500 text-sm">{errors.mobileNumber}</p>}
                    </div>
                    <div>
                        <label htmlFor="confirmation" className="block mb-1">Confirmation Status</label>
                        <select
                            id="confirmation"
                            name="confirmation"
                            value={formData.confirmation}
                            onChange={handleInputChange}
                            className="p-2 border border-gray-300 rounded"
                        >
                            <option value="">Confirmation Status</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        {errors.confirmation && <p className="text-red-500 text-sm">{errors.confirmation}</p>}
                    </div>
                    <div>
                        <label htmlFor="checkInDate" className="block mb-1">Check-in Date</label>
                        <input
                            type="date"
                            id="checkInDate"
                            name="checkInDate"
                            value={formData.checkInDate}
                            onChange={handleInputChange}
                            className="p-2 border border-gray-300 rounded"
                        />
                        {errors.checkInDate && <p className="text-red-500 text-sm">{errors.checkInDate}</p>}
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-2 mb-2">
                    <div>
                        <label htmlFor="checkOutDate" className="block mb-1">Check-out Date</label>
                        <input
                            type="date"
                            id="checkOutDate"
                            name="checkOutDate"
                            value={formData.checkOutDate}
                            onChange={handleInputChange}
                            className="p-2 border border-gray-300 rounded"
                        />
                        {errors.checkOutDate && <p className="text-red-500 text-sm">{errors.checkOutDate}</p>}
                    </div>
                    <div>
                        <label htmlFor="roomNumber" className="block mb-1">Room Number</label>
                        <input
                            type="text"
                            id="roomNumber"
                            name="roomNumber"
                            value={formData.roomNumber}
                            onChange={handleInputChange}
                            placeholder="Room Number"
                            className="p-2 border border-gray-300 rounded"
                        />
                        {errors.roomNumber && <p className="text-red-500 text-sm">{errors.roomNumber}</p>}
                    </div>
                    <div>
                        <label htmlFor="bookedOn" className="block mb-1">Booked On</label>
                        <input
                            type="date"
                            id="bookedOn"
                            name="bookedOn"
                            value={formData.bookedOn}
                            onChange={handleInputChange}
                            className="p-2 border border-gray-300 rounded"
                        />
                        {errors.bookedOn && <p className="text-red-500 text-sm">{errors.bookedOn}</p>}
                    </div>
                    <div>
                        <label htmlFor="bookingPrize" className="block mb-1">Booking Prize</label>
                        <input
                            type="number"
                            id="bookingPrize"
                            name="bookingPrize"
                            value={formData.bookingPrize}
                            onChange={handleInputChange}
                            placeholder="Booking Prize"
                            className="p-2 border border-gray-300 rounded"
                            step="0.01"
                        />
                        {errors.bookingPrize && <p className="text-red-500 text-sm">{errors.bookingPrize}</p>}
                    </div>
                </div>
                <button type="submit" className="p-2 bg-blue-500 text-white rounded mt-4">Add Booking</button>
            </form>

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