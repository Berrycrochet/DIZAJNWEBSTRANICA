import React from 'react';
import '../styles/Pricing.css';

const pricingData = {
  "Topli i hladni napitci": [
    { name: "Kafa", price: "2.00 KM" },
    { name: "Čaj", price: "2.00 KM" },
    { name: "Ness", price: "2.50 KM" },
    { name: "Cappucino", price: "2.50 KM" },
    { name: "Topla čokolada", price: "3.50 KM" },
    { name: "Ledena kafa", price: "4.00 KM" },
    { name: "Mineralna voda", price: "2.00 KM" },
    { name: "Prirodna voda", price: "1.50 KM" },
    { name: "Exotic", price: "2.50 KM" },
    { name: "Limunada", price: "2.50 KM" },
    { name: "Juicy Vita", price: "2.50 KM" },
    { name: "Gazirani sokovi", price: "3.00 KM" },
    { name: "Prirodni sokovi", price: "3.00 KM" },
    { name: "Ledeni čaj", price: "2.50 KM" },
    { name: "Burn", price: "3.50 KM" }
  ],
  "Pivo": [
    { name: "Točeno 0.50 Tuborg", price: "3.00 KM" },
    { name: "Točeno 0.33 Tuborg", price: "2.50 KM" },
    { name: "Točeno 0.50 Blanc", price: "3.00 KM" },
    { name: "Točeno 0.33 Blanc", price: "2.50 KM" },
    { name: "Erdinger Weisse", price: "4.00 KM" },
    { name: "Erdinger Alc. Free", price: "3.00 KM" },
    { name: "Grinbergen", price: "4.00 KM" },
    { name: "Carlsberg", price: "3.50 KM" },
    { name: "Budweiser", price: "3.50 KM" },
    { name: "Tuborg", price: "3.00 KM" },
    { name: "Blanc", price: "3.00 KM" },
    { name: "Radler", price: "2.50 KM" },
    { name: "Pan", price: "2.00 KM" }
  ],
  "Vino": [
    { name: "Vino 1L", price: "25.00 KM" },
    { name: "Vino 1dl", price: "2.50 KM" }
  ],
  "Alkoholna pića": [
    { name: "Somersby", price: "3.50 KM" },
    { name: "Somersby 0%", price: "3.00 KM" },
    { name: "Whiskey", price: "5.00 KM" },
    { name: "Gin", price: "2.50 KM" },
    { name: "Vodka", price: "2.50 KM" },
    { name: "Pelinkovac", price: "2.50 KM" },
    { name: "Aperol Spritz", price: "5.00 KM" },
    { name: "Campari", price: "5.00 KM" },
    { name: "Tequila", price: "3.00 KM" },
    { name: "Višnja", price: "2.50 KM" },
    { name: "Rakija", price: "2.50 KM" },
    { name: "Rum", price: "2.50 KM" }
  ]
};

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h1>BACKSTAGE CAFFE - MENI</h1>

      {Object.entries(pricingData).map(([category, items]) => (
        <section key={category} className="pricing-category">
          <h2>{category}</h2>
          <ul>
            {items.map(({ name, price }) => (
              <li key={name} className="pricing-item">
                <span className="item-name">{name}</span>
                <span className="item-price">{price}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default Pricing;
