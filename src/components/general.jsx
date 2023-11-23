import React, { useState } from 'react';
import '../styles/general.css';

const GeneralInfoForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleEdit = () => {
        setSubmitted(false);
    };

    return (
        <div className='general-container'>
            <h2>General Information</h2>
            {submitted ? (
                <div>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input type="text" value={name} onChange={handleNameChange} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={handleEmailChange} />
                    </div>
                    <div>
                        <label>Phone:</label>
                        <input type="tel" value={phone} onChange={handlePhoneChange} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};

export default GeneralInfoForm;
