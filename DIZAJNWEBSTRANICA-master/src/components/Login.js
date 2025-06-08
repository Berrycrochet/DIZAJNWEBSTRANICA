import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/loginstil.css';

const LoginForma = ({ onLogin }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        const user = users.find(
            u => u.email === formData.email && u.password === formData.password
        );

        if (user) {
            setSuccess('Uspješna prijava!');
            setError('');
            if (onLogin) onLogin(user);
            setTimeout(() => navigate('/'), 1500); // preusmjeravanje na početnu
        } else {
            setError('Pogrešan email ili lozinka');
            setSuccess('');
        }
    };

    return (
        <div className="prijava">
            <h2>Prijava</h2>
            {error && <div className="error-msg">{error}</div>}
            {success && <div className="success-msg">{success}</div>}

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Lozinka:</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Prijavi se</button>
            </form>
        </div>
    );
};

export default LoginForma;