import React, { useState, useEffect } from 'react';
import supabase from '../../../service/supabaseClient';

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
        remarks: '',
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
        if (!formData.remarks) newErrors.remarks = 'Remarks are required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const { error } = await supabase
            .from('bookings')
            .insert([{
                guest_name: formData.guestName,
                mobile_number: formData.mobileNumber,
                confirmation: formData.confirmation,
                check_in_date: formData.checkInDate,
                check_out_date: formData.checkOutDate,
                room_number: formData.roomNumber,
                booked_on: formData.bookedOn,
                booking_prize: parseFloat(formData.bookingPrize),
                remarks: formData.remarks,
            }]);

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
                remarks: '',
            });
        }
    };

    const handleDelete = async (id) => {
        const { error } = await supabase
            .from('bookings')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Error deleting data: ', error);
        } else {
            setRows((prevRows) => prevRows.filter((row) => row.id !== id));
        }
    };

    const totalPrize = rows.reduce((total, row) => total + parseFloat(row.booking_prize), 0);

    return (
        <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-8 text-green-800">Booking Table</h1>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mb-8 bg-white shadow-md rounded p-6">
                <div className="grid grid-cols-4 gap-4">
                    {[
                        { id: "guestName", label: "Guest Name", type: "text" },
                        { id: "mobileNumber", label: "Mobile Number", type: "tel", pattern: "[0-9]{10}", maxLength: "10" },
                        { id: "confirmation", label: "Confirmation Status", type: "select", options: ["Yes", "No"] },
                        { id: "checkInDate", label: "Check-in Date", type: "date" },
                        { id: "checkOutDate", label: "Check-out Date", type: "date" },
                        { id: "roomNumber", label: "Room Number", type: "text" },
                        { id: "bookedOn", label: "Booked On", type: "date" },
                        { id: "bookingPrize", label: "Booking Prize", type: "number", step: "0.01" },
                    ].map((field) => (
                        <div key={field.id}>
                            <label htmlFor={field.id} className="block mb-1 font-medium">{field.label}</label>
                            {field.type === "select" ? (
                                <select
                                    id={field.id}
                                    name={field.id}
                                    value={formData[field.id]}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
                                >
                                    <option value="">Select</option>
                                    {field.options.map((option) => (
                                        <option key={option} value={option}>{option}</option>
                                    ))}
                                </select>
                            ) : (
                                <input
                                    type={field.type}
                                    id={field.id}
                                    name={field.id}
                                    value={formData[field.id]}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
                                    {...(field.pattern && { pattern: field.pattern })}
                                    {...(field.maxLength && { maxLength: field.maxLength })}
                                    {...(field.step && { step: field.step })}
                                />
                            )}
                            {errors[field.id] && <p className="text-red-500 text-sm">{errors[field.id]}</p>}
                        </div>
                    ))}
                </div>
                <div>
                    <label htmlFor="remarks" className="block mb-1 font-medium">Remarks</label>
                    <textarea
                        id="remarks"
                        name="remarks"
                        value={formData.remarks}
                        onChange={handleInputChange}
                        placeholder="Remarks"
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-500"
                        rows="3"
                    />
                    {errors.remarks && <p className="text-red-500 text-sm">{errors.remarks}</p>}
                </div>
                <button
                    type="submit"
                    className="mt-4 w-full bg-green-600 text-white font-medium p-2 rounded hover:bg-green-700"
                >
                    Add Booking
                </button>
            </form>

            {/* Table */}
            <div className="overflow-auto bg-white shadow-md rounded">
                <table className="w-full text-sm border-collapse border border-gray-300">
                    <thead className="bg-gray-100">
                    <tr>
                        {["Guest Name", "Mobile Number", "Confirmation", "Check-in", "Check-out", "Room", "Booked On", "Prize $", "Remarks", "Actions"].map((header) => (
                            <th key={header} className="border border-gray-300 p-2 text-left">{header}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {rows.length > 0 ? (
                        rows.map((row) => (
                            <tr key={row.id} className="hover:bg-gray-50">
                                <td className="border border-gray-300 p-2">{row.guest_name}</td>
                                <td className="border border-gray-300 p-2">{row.mobile_number}</td>
                                <td className="border border-gray-300 p-2">{row.confirmation}</td>
                                <td className="border border-gray-300 p-2">{row.check_in_date}</td>
                                <td className="border border-gray-300 p-2">{row.check_out_date}</td>
                                <td className="border border-gray-300 p-2">{row.room_number}</td>
                                <td className="border border-gray-300 p-2">{row.booked_on}</td>
                                <td className="border border-gray-300 p-2">{row.booking_prize}</td>
                                <td className="border border-gray-300 p-2">{row.remarks}</td>
                                <td className="border border-gray-300 p-2">
                                    <button
                                        onClick={() => handleDelete(row.id)}
                                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="10" className="text-center p-4">No data available</td>
                        </tr>
                    )}
                    <tr className="bg-gray-100">
                        <td colSpan="7" className="border border-gray-300 p-2 text-right font-bold">Total Prize $:</td>
                        <td className="border border-gray-300 p-2 font-bold">{totalPrize.toFixed(2)}</td>
                        <td colSpan="2" className="border border-gray-300 p-2"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookingTable;