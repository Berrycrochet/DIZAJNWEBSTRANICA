import React, { useState } from 'react';

function ContactForm() {
  const [ime, setIme] = useState('');
  const [email, setEmail] = useState('');
  const [poruka, setPoruka] = useState('');
  const [obavijest, setObavijest] = useState('');


  // Funkcija za slanje podataka
  // Ovdje možemo slati podatke na json-server
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!ime || !email || !poruka) {
      setObavijest('Sva polja su obavezna.');
      return;
    }

    // Ispis na konzolu
    // Ovo je samo za testiranje
    console.log('Kontakt forma:', { ime, email, poruka });

      const novaPoruka = {
        ime,
        email,
        poruka,
        datum: new Date().toLocaleString()
      };

      try {
    const res = await fetch('http://localhost:5000/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(novaPoruka)
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
    // Resetiraj formu
    setObavijest('Poruka je uspješno poslana!');
    setIme('');
    setEmail('');
    setPoruka('');
  };




  // Renderiranje tj. prikaz forme
  // Ovdje možemo dodati stilove
  return (
    <div style={{
        backgroundImage: 'url(images/pozadina.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#72231C',
        fontFamily: '"Pathway Extreme", sans-serif',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
        padding: '100px 20px',
        textAlign: 'left'
        }}>

    
    

    <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto' }}>
      <label>Ime i prezime:</label>
      <input
        type="text"
        value={ime}
        onChange={(e) => setIme(e.target.value)}
        required

        style={{
                backgroundColor: '#FAF0D7',
                border: '2px solid #EAA44F',
                padding: '10px',
                borderRadius: '5px',
                color: '#72231C', // da se slaže s ostalim tekstom
                fontFamily: '"Pathway Extreme", sans-serif',
              }}
      />

      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required

        style={{
                backgroundColor: '#FAF0D7',
                border: '2px solid #EAA44F',
                padding: '10px',
                borderRadius: '5px',
                color: '#72231C', // da se slaže s ostalim tekstom
                fontFamily: '"Pathway Extreme", sans-serif'
              }}
      />

      <label>Poruka:</label>
      <textarea
        value={poruka}
        onChange={(e) => setPoruka(e.target.value)}
        required
        rows="4"

        style={{
              backgroundColor: '#FAF0D7',
              border: '2px solid #EAA44F',
              padding: '10px',
              borderRadius: '5px',
              color: '#72231C', // da se slaže s ostalim tekstom
              fontFamily: '"Pathway Extreme", sans-serif'
            }}
      ></textarea>

      <button type="submit"
       style={{
              backgroundColor: '#036977',
              color: 'white', // Tekst na tamnoj podlozi
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontFamily: '"Pathway Extreme", sans-serif',
              fontSize: '16px'
            }}
            >POŠALJI</button>
      {obavijest && <p style={{ color: 'green' }}>{obavijest}</p>}
    </form>
    </div>
  );
}

export default ContactForm;
