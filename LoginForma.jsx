import { useState } from 'react';
import './loginstil.css'; 

const LoginForma = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email.includes('@')) {
            setError('Email mora sadržati @ znak');
            return;
        }

        if (password.length < 6) {
            setError('Lozinka mora imati najmanje 6 znakova');
            return;
        }

        onLogin({ email, uloga: 'korisnik' });
    };

    return (
        <div className="prijava">
            <h2>Prijava</h2>

            {error && <div className="error-msg">{error}</div>}

            <form onSubmit={handleSubmit}>
                <div className="forma-razmak">
                    <label className="oznaka">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="forma-razmak">
                    <label className="oznaka">Lozinka:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">Prijavi se</button>
            </form>
        </div>
    );
};

export default LoginForma;