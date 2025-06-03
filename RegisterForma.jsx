import { useState } from 'react';
import './loginstil.css'; 

const RegisterForma = ({ onRegister }) => {
    const [formData, setFormData] = useState({
        ime: '',
        email: '',
        password: '',
        confirmPassword: '',
        uloga: 'korisnik' 
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { ime, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [ime]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            
            const response = await fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ime: formData.ime,
                    email: formData.email,
                    password: formData.password,
                    uloga: formData.uloga
                })
            });

            if (!response.ok) throw new Error('Greška pri registraciji');

            const newUser = await response.json();
            onRegister(newUser);

        } catch (error) {
            setError(error.message);
        }

    
        if (formData.password !== formData.confirmPassword) {
            setError('Lozinke se ne podudaraju');
            return;
        }

        
        const users = JSON.parse(localStorage.getItem('users') || '[]');

        
        if (users.some(user => user.email === formData.email)) {
            setError('Email već postoji');
            return;
        }

        
        const newUser = {
            id: Date.now(),
            ...formData
        };

       
        localStorage.setItem('users', JSON.stringify([...users, newUser]));

        
        onRegister(newUser);
    };

    return (
        <div className="prijava">
            <h2>Registracija</h2>
            
            {error && <div className="error-msg">{error}</div>}

            <form onSubmit={handleSubmit}>
                <div className="forma-razmak">
                    <label className="oznaka">Ime i prezime:</label>
                    <input
                        type="text"
                        name="ime"
                        value={formData.ime}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="forma-razmak">
                    <label className="oznaka">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="forma-razmak">
                    <label className="oznaka">Lozinka:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="forma-razmak">
                    <label className="oznaka">Potvrdi lozinku:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="forma-razmak">
                    <label className="oznaka">Uloga:</label>
                    <select 
                        name="uloga" 
                        value={formData.uloga}
                        onChange={handleChange}
                    >
                        <option value="korisnik">Obični korisnik</option>
                        <option value="admin">Administrator</option>
                    </select>
                </div>

                <button type="submit">Registruj se</button>
            </form>
        </div>
    );
};

export default RegisterForma;