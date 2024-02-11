import Link from "next/link";
import { useState, useEffect } from "react";
import CheckoutFuntion from "../components/CheckoutFuntion";
import MobileMenu from "./MobileMenu";
import { useRouter } from 'next/router';
import ConsumApi from '@/src/services_workers/consum_api';
import { apiUrlAsset } from '@/src/constants/apiUrl';
const Header = ({ extraClass }) => {
  const router = useRouter();
  const [allLocality, setAllallLocality] = useState([]);

  const [indexActive, setIndexActive] = useState(-1);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    if(router.pathname.indexOf('competitions') !== -1) {
      setIndexActive(1);
    } else if(router.pathname.indexOf('edition') !== -1) {
      setIndexActive(2);
    } else if(router.pathname.indexOf('community') !== -1) {
      setIndexActive(3);
    } else if(router.pathname.indexOf('games') !== -1) {
      setIndexActive(4);
    } else if(router.pathname.indexOf('live') !== -1) {
      setIndexActive(5);
    } else if(router.pathname.indexOf('404') !== -1) {
      setIndexActive(-1);
    } else {
      setIndexActive(0);
    }
    const {data:localities} = await ConsumApi.getAllLocality();
    setAllallLocality(localities);
  }

  const onClick = (e) => {
    const body = document.querySelector("body");
    body.classList.toggle("active");
    e.preventDefault();
  };
  // mobile menu
  const [mobileToggle, setMobileToggle] = useState(false);
  return (
    <header className={`header-banner ${extraClass}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-2">
            <div className="header-style">
              <Link href="/">
                <img alt="logo" src="/assets/img/logo.png" className="logo-header"/>
              </Link>
              <div className="extras bag">
                <div className="bar-menu" onClick={() => setMobileToggle(true)}>
                  <i className="fa-solid fa-bars" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-10">
            <nav className="navbar">
              <ul className="navbar-links">
                <li className={`navbar-dropdown ${indexActive === 0 && 'active'}`}>
                  <Link href="/">ACCUEIL</Link>
                </li>
                <li className={`navbar-dropdown ${indexActive === 1 && 'active'}`}>
                  <div className="flag-translate">
                    <Link href="#">COMPÉTITIONS</Link>
                  </div>
                  <div className="dropdown">
                    {
                      allLocality.map((locality) => (<Link key={locality.id} href={`/competitions/${locality.id}/${locality.nom_departement.toLocaleUpperCase()}`}><span><img src={`${apiUrlAsset.avatars}/${locality.gravatars}`} alt="fr" /> </span> {locality.nom_departement.toLocaleUpperCase()}</Link>))
                    }
                  </div>
                </li>
                <li className={`navbar-dropdown ${indexActive === 2 && 'active'}`}>
                  <Link href="/edition">EVENTS</Link>
                </li>
                <li className={`navbar-dropdown ${indexActive === 3 && 'active'}`}>
                  <Link href="/community">COMMUNAUTÉ</Link>
                </li>
                <li className={`navbar-dropdown ${indexActive === 4 && 'active'}`}>
                  <Link href="/games">JEUX</Link>
                </li>
                <li className={`navbar-dropdown ${indexActive === 5 && 'active'}`}>
                  <Link href="/live">WEBTV</Link>
                </li>
                <li className="navbar-dropdown without-style language">
                  <div className="flag-translate">
                    <img src="/assets/img/fr.png" alt="fr"/>
                    <span>FR</span>
                  </div>
                  <div className="dropdown">
                    <Link href="/competitions">ENG</Link>
                  </div>
                </li>
                
              </ul>
            </nav>
          </div>
          <div className="menu-wrap">
            <div className="menu-inner ps ps--active-x ps--active-y">
              <span className="menu-cls-btn" onClick={(e) => onClick(e)}>
                <i className="cls-leftright" />
                <i className="cls-rightleft" />
              </span>
              <CheckoutFuntion sidebar />
            </div>
          </div>
          <div
            className={`mobile-nav hmburger-menu ${mobileToggle ? "open" : ""}`}
            id="mobile-nav"
            style={{ display: "block" }}
          >
            <div className="res-log">
              <Link href="/">
                <img alt="logo" src="/assets/img/logo.png" className="logo-header"/>
              </Link>
            </div>
            <MobileMenu />
            <a href="#" id="res-cross" onClick={() => setMobileToggle(false)} />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
