import { useEffect, useState } from "react";

const CheckoutFuntion = ({ sidebar }) => {
  const [cartData, setCartData] = useState([
    "Être de nationalité ivoirienne",
    "Avoir entre 17 ans révolus et 25 ans",
    "Avoir au minimum le niveau Terminale",
    "Mesurer plus de 1 mètre 68 centimètres pieds nus",
    "Être sans enfants et n'avoir jamais été enceinte",
    "Avoir toutes ses facultés et être de bonne moralité",
    "Avoir le certificat de nationalité ou la carte d'identité CNI",
    "Avoir son certificat de scolarité",
    "Avoir un résultat négatif au test de covid-19 datant de moins de 48h",
    "Pour les moins de 21 ans, avoir son attestation de candidature signée par le père ou la mère.",
    "Les frais d'inscription sont fixés à 50 000 FCFA et payables au bureau du COMICI ou auprès des Comités Régionaux, par MTN MOBILE MONEY et depuis l'Application AYOBA",
    
  ]);
  return (
    <div className="checkout-order">
      <div className="title-checkout">
        <h2>Les critères :</h2>
        {!sidebar && <h6>{cartData.length}</h6>}
      </div>
    
      <ul>
        {cartData.map((item, i) => (
          <li className="price-list" key={`price-list${i}`}>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="totel-price">
        <h5>N.B : Frais d'inscription non-remboursables</h5>
      </div>
      
    </div>
  );
};
export default CheckoutFuntion;
