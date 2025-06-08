import React from 'react';
import '../styles/Home.css';
import '../styles/App.css';

import slika9 from '../images/9.png';
import slika8 from '../images/bubanj.jpg';
import slika7 from '../images/ljudi.jpg';
import slika6 from '../images/back.jpg';
import slika5 from '../images/back2.jpg';
import slika4 from '../images/back3.jpg';
import slika3 from '../images/svirke.jpg';
import slika2 from '../images/rezervisano.jpg';



const Home = () => {
  return (
    <main className="home-container">

      <section className="hero-section">
        <div className="hero-text">
          <h1>Dobrodošli u Backstage Caffe!</h1>
          <p>Najbolja kafa u gradu, retro ambijent, live muzika i nezaboravne svirke.</p>
          <a href="/Pricing" className="button">Cjenovnik</a>
        </div>
        <div className="hero-image">
            <img src={slika9} alt="Kafa" />
  
        </div>
      </section>

      <section className="home-gallery-section">
        <h2>Backstage Kroz Objektiv</h2>
        <p>Doživite čaroliju Backstagea kroz fotografije vikend svirki i unutrašnji ugođaj.</p>
        <div className="carousel">
          <img src={slika3} alt="back" />
          <img src={slika4} alt=" back" />
          <img src={slika7} alt="back" />
          <img src={slika8} alt="back" />
          <img src={slika5} alt="back" />
          <img src={slika6} alt="back" />
        

        </div>
      </section>

      <section className="story-section">
        <div className="story-image">
          <img src= {slika6} alt="Backstage lokal" />
        </div>
        <div className="story-text">
          <h2>Naša Priča</h2>
          <p>
            Smješten u srcu Zenice, Backstage Caffe je više od običnog kafića – to je mjesto
            gdje se susreću ljubitelji dobre kafe, muzike i retro šarma. Naša topla i ugodna
            atmosfera privlači goste da ponovo osjete onaj osjećaj posebnosti.
          </p>
          <a href="/Contact" className="button">Kontakt</a>
        </div>
      </section>

    </main>
  );
};

export default Home;
