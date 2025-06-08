import React, { useState } from 'react';
import './Shows.css';
import back from '../images/back.jpg';
import back2 from '../images/back2.jpg';
import bubanj from '../images/bubanj.jpg';
import ljudi from '../images/ljudi.jpg';
import rezervisano from '../images/rezervisano.jpg';
import svirke from '../images/svirke.jpg';
import heroImage from '../images/bubnjevii.png'; // Slika za hero sekciju (pretpostavljam da ćeš ovdje staviti svoj PNG)
import descriptionImage from '../images/rezervisano.jpg'; // Slika za opisnu sekciju

const showsData = [
  {
    date: "Petak, 15.6.",
    band: "Rock Band XYZ",
    images: [bubanj, back2, back]
  },
  {
    date: "Subota, 16.6.",
    band: "Jazz Night sa Markom",
    images: [ljudi, rezervisano, back2]
  },
  {
    date: "Nedelja, 17.6.",
    band: "Akustični koncert",
    images: [svirke, ljudi, rezervisano]
  }
];

const Shows = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="shows-wrapper">
      {/* HERO SEKCIJA */}
      <section className="hero-section">
        {/* Novi div za sadržaj hero sekcije - omogućava nam flexbox kontrolu */}
        <div className="hero-content">
          <h1 className="hero-title">SVIRKE <br></br>Backstage Caffe bar</h1>
          {/* Slika desno od naslova */}
          <img src={heroImage} alt="Pozadinska slika svirki" className="hero-image-side" />
        </div>
      </section>

      {/* SEKCIJA NAJAVA */}
      <section className="gallery-section">
        <h2 className="section-title">Najave koncerata</h2>
        <ul className="show-list">
          {showsData.map((show, index) => (
            <li
              key={index}
              className="show-item"
              onClick={() => setSelectedIndex(index === selectedIndex ? null : index)}
            >
              <strong>{show.date}</strong> - {show.band}
              {selectedIndex === index && (
                <div className="gallery">
                  {show.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="Svirka"
                      className="gallery-image animate-scaleup"
                    />
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* OPISNA SEKCIJA */}
      <section className="description-section">
        <div className="description-text">
          <h3>Atmosfera koju ne propuštate</h3>
          <p>
            Backstage Caffe bar je poznat po živim svirkama, opuštenoj atmosferi i energiji koju bendovi prenose na publiku. Svaka noć donosi novu priču, a vi ste uvek deo nje!
          </p>
        </div>
        <img src={descriptionImage} alt="Publika u Backstageu" className="description-image" />
      </section>
    </div>
  );
};

export default Shows;