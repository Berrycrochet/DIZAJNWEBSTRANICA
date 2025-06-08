import React, { useEffect, useState } from 'react';
import ContactForm from '../components/ContactForm';


function Contact() {
  const [ulogovani, setUlogovani] = useState(null);

  useEffect(() => {
    const spremljen = localStorage.getItem('ulogovaniKorisnik');
    if (spremljen) {
      setUlogovani(JSON.parse(spremljen));
    }
  }, []);


  // Provjera da li je korisnik ulogovan

  
  if (!ulogovani) {
    return (
      <div style={{ 
              backgroundImage: 'url("/images/pozadina.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              minHeight: '100vh',
              padding: '40px 20px',
              color: 'white',
              fontFamily: 'Pathway Extreme',
              textAlign: 'center'
      }}>
        <h2 style={{ color: '#CD3333'
           }}>Pristup odbijen</h2>
        <p style={{ color: '#CD3333'
           }}>Molimo Vas da se prijavite kako biste pristupili kontakt formi.</p>
        <div>
        <p style={{ color: '#CD3333'
           }}> <strong> Pronađite nas: Maršala Tita 10 (u prolazu), Zenica </strong> </p>
           <div style={{flex: '1', minWidth: '300px'}}>
          <iframe
            title="Google mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d715.091837380984!2d17.90525019922535!3d44.199500010873585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ee241871a5215%3A0xff2ee46ceef5d4d8!2sBackstage%20Caffe!5e0!3m2!1sen!2sba!4v1748977834950!5m2!1sen!2sba"
              width="100%"
              height="400"
              style={{
                border: '2px solid #EAA44F',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          </div>
      </div>
      </div>
    );
  }
return (
  <div
    style={{
      backgroundImage: 'url("/images/pozadina.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      padding: '40px 20px',
      fontFamily: 'Pathway Extreme',
    }}
  >
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      backgroundColor: 'transparent',
      borderRadius: '10px',
      padding: '40px',
      color: '#72231C',
    }}>
      <h1 style={{ textAlign: 'center', color: '#CD3333' }}>KONTAKTIRAJTE NAS</h1>
      <ContactForm />
      <br />
      <p style={{ textAlign: 'center', color: '#CD3333' }}>
        <strong>Pronađite nas: Maršala Tita 10 (u prolazu), Zenica</strong>
      </p>
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '10px', border: '2px solid #EAA44F', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
  <iframe
    title="Google mapa"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d715.091837380984!2d17.90525019922535!3d44.199500010873585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ee241871a5215%3A0xff2ee46ceef5d4d8!2sBackstage%20Caffe!5e0!3m2!1sen!2sba!4v1748977834950!5m2!1sen!2sba"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: 0,
    }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
    </div>
  </div>
);
}


export default Contact;