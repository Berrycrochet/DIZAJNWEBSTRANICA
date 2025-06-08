import React, { useState } from 'react';

function ContactForm() {
  const [ime, setIme] = useState('');
  const [email, setEmail] = useState('');
  const [poruka, setPoruka] = useState('');
  const [obavijest, setObavijest] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!ime || !email || !poruka) {
      setObavijest('Sva polja su obavezna.');
      return;
    }

    const novaPoruka = {
      ime,
      email,
      poruka,
      datum: new Date().toLocaleString(),
    };

    try {
      const res = await fetch('http://localhost:5000/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novaPoruka),
      });

      if (res.ok) {
        setObavijest('Poruka je uspješno poslana!');
        setIme('');
        setEmail('');
        setPoruka('');
      } else {
        setObavijest('Greška prilikom slanja poruke.');
      }
    } catch (err) {
      setObavijest('Server nije dostupan.');
    }
  };

  const inputStyle = {
    backgroundColor: '#FAF0D7',
    border: '2px solid #EAA44F',
    padding: '10px',
    borderRadius: '5px',
    color: '#72231C',
    fontFamily: '"Pathway Extreme", sans-serif',
    width: '100%',
  };
return (
  <div
    style={{
      backgroundImage: 'url(images/pozadina.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#72231C',
      fontFamily: '"Pathway Extreme", sans-serif',
      padding: '80px 20px',
    }}
  >
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '50px',
      backgroundColor: 'transparent',
      padding: '40px',
      borderRadius: '10px',
    }}>
      {/* Forma */}
      <form
        onSubmit={handleSubmit}
        style={{
          flex: '1 1 500px',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}
      >
        <label><b>Ime i prezime:</b></label>
        <input type="text" value={ime} onChange={(e) => setIme(e.target.value)} required style={inputStyle} />

        <label><b>Email:</b></label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={inputStyle} />

        <label><b>Poruka:</b></label>
        <textarea value={poruka} onChange={(e) => setPoruka(e.target.value)} required rows="4" style={inputStyle}></textarea>

        <button
          type="submit"
          style={{
            backgroundColor: '#036977',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontFamily: '"Pathway Extreme", sans-serif',
            fontSize: '16px',
            width: 'fit-content',
          }}
        >
          POŠALJI
        </button>

        {obavijest && (
          <p style={{ color: obavijest.includes('uspješno') ? 'green' : 'red' }}>{obavijest}</p>
        )}
      </form>

      {/* Kontakt info */}
      <div style={{ flex: '1 1 300px', textAlign: 'left' }}>
        <h3><u>Kontakt informacije:</u></h3>
        <p><strong>Email:</strong> backstage@info.ba</p>
        <p><strong>Broj telefona:</strong> +387 64 40 01 634</p>
        <p><strong>Pronađite nas: </strong> Maršala Tita 10 (u prolazu), Zenica</p>
      </div>
    </div>
  </div>
);

}

export default ContactForm;