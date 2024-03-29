import React, { useState } from 'react';

function StudentForm() {
    const [student, setStudent] = useState({ name: '', email: '', phoneNumber: '', address: '' }); // Add 'address' field

    const handleChange = (event) => {
        const { name, value } = event.target;
        setStudent(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(student);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={student.name} onChange={handleChange} />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={student.email} onChange={handleChange} />
            </label>
            <label>
                Phone Number:
                <input type="text" name="phoneNumber" value={student.phoneNumber} onChange={handleChange} />
            </label>
            <label>
                Address: {/* New field label */}
                <input type="text" name="address" value={student.address} onChange={handleChange} /> {/* New input field */}
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default StudentForm;
