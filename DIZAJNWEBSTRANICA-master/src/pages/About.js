import React from 'react';
import '../styles/About.css';
// Importiraj svoje slike ovdje
import aboutImage1 from '../images/back.jpg'; // Primjer, promijeni putanju
import aboutImage2 from '../images/ljudi.jpg'; // Primjer, promijeni putanju
import aboutImage3 from '../images/svirke.jpg'; // Primjer, promijeni putanju
import aboutImage4 from '../images/bubanj.jpg';
import back  from '../images/back.jpg';
import back2 from '../images/back2.jpg';

const About = () => {
  return (
    <div className="about-wrapper"> {/* Dodaj wrapper za cijelu stranicu ako About.js nije samostalna stranica */}
        <section className="about-content-section animate-fadein">
            <div className="about-text-container">
                <h2>O nama</h2>
                <p>
                    Backstage Caffe bar je stvoren iz ljubavi prema dobroj muzici i savršenoj šoljici kafe. 
                    Mi nismo samo kafić; mi smo utočište za sve ljubitelje autentičnog retro ambijenta, 
                    mesto gde se svaka nota i svaki gutljaj stapaju u jedinstveno iskustvo.
                </p>
                <p>
                    Naša misija je da oživimo duh starih vremena kroz brižno odabrane koncerte lokalnih 
                    talenata i gostujućih bendova, nudeći istovremeno vrhunsku selekciju napitaka. 
                    Svaki kutak Backstagea priča svoju priču, pozivajući vas da se opustite i prepustite 
                    čaroliji.
                </p>
                <p>
                    Tim entuzijasta, vođen strašću prema ugostiteljstvu i muzici, 
                    svakodnevno radi na stvaranju atmosfere u kojoj se osjećate kao kod kuće – 
                    mjesta gdje se stvaraju uspomene, gdje se smije i gdje se uživa u svakom trenutku.
                </p>
                <p>
  <img src= {back2} alt="Naš bend" className="inline-image" />
   Naš bend je osnovan sa idejom da spojimo ljubav prema muzici i
  nezaboravne nastupe. Naš cilj je da stvorimo atmosferu koja će
  se pamtiti, bilo da je riječ o vjenčanju, rođendanu ili korporativnoj zabavi.
</p>
            </div>
            <div className="about-image-gallery">
                <img src={aboutImage1} alt="Unutrašnjost kafića" className="gallery-img" />
                <img src={aboutImage2} alt="Koncertna atmosfera" className="gallery-img" />
                <img src={aboutImage3} alt="Detalj enterijera" className="gallery-img" />
                 <img src={aboutImage4} alt="Detalj enterijera" className="gallery-img" />

            </div>
        </section>
    </div>
  );
};

export default About;