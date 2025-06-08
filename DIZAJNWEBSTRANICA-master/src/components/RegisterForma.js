import { useState } from 'react';
import '../styles/loginstil.css';

const RegisterForma = ({ onRegister }) => {
    const [formData, setFormData] = useState({
        ime: '',
        email: '',
        password: '',
        confirmPassword: '',
        uloga: 'korisnik'
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError('Lozinke se ne podudaraju');
            setSuccess('');
            return;
        }

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        if (users.some(user => user.email === formData.email)) {
            setError('Email već postoji');
            setSuccess('');
            return;
        }

        const newUser = {
            ime: formData.ime,
            email: formData.email,
            password: formData.password,
            uloga: formData.uloga
        };

        localStorage.setItem('users', JSON.stringify([...users, newUser]));

        setSuccess('Registracija uspješna!');
        setError('');
        setFormData({
            ime: '',
            email: '',
            password: '',
            confirmPassword: '',
            uloga: 'korisnik'
        });

        if (onRegister) onRegister(newUser);
    };

    return (
        <div className="prijava">
            <h2>Registracija</h2>
            {error && <div className="error-msg">{error}</div>}
            {success && <div className="success-msg">{success}</div>}

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Ime i prezime:</label>
                    <input type="text" name="ime" value={formData.ime} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Lozinka:</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <div>
                    <label>Potvrdi lozinku:</label>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                </div>
                <div>
                    <label>Uloga:</label>
                    <select name="uloga" value={formData.uloga} onChange={handleChange}>
                        <option value="korisnik">Korisnik</option>
                        <option value="admin">Administrator</option>
                    </select>
                </div>
                <button type="submit">Registruj se</button>
            </form>
        </div>
    );
};

export default RegisterForma;
