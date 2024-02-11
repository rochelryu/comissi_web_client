import Link from "next/link";
import { useState, useEffect } from "react";
import CheckoutFuntion from "../components/CheckoutFuntion";
import MobileMenu from "./MobileMenu";
import { useRouter } from 'next/router';

const Header = ({ extraClass }) => {
  const router = useRouter();
  const [indexActive, setIndexActive] = useState(-1);

  useEffect(() => {
    // loadData();
  }, []);

  const loadData = async () => {
    if(router.pathname.indexOf('competitions') !== -1) {
      setIndexActive(1);
    } else if(router.pathname.indexOf('ticket') !== -1) {
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
  }

  const onClick = (e) => {
    const body = document.querySelector("body");
    body.classList.toggle("active");
    e.preventDefault();
  };
  // mobile menu
  const [mobileToggle, setMobileToggle] = useState(false);
  return (
  <header id="header">
    <div className="container">

      <div id="logo" className="pull-left">
        <Link href="/"><img src="/assets/img/logo.png" alt="" className="img-responsive img-fluid" style={{marginTop: -5, width: 150}} /></Link>
      </div>

      <div id="nav">
            <nav id="nav-menu-container">
                <ul className="nav-menu">
                    <li className="menu-active">
                        <Link href="/">Accueil</Link>
                    </li>
                

                    <li className="">
                        <Link href="/">Le comici</Link>
                    </li>

                    <li className="">
                    <Link href="/">Les éditions</Link>
                        
                    </li>
                    
                    <li className="">
                    <Link href="/">Les miss ci</Link>
                    </li>

                    <li className="">
                    <Link href="/">FAQ</Link>
                    </li>
                    
                    <li className="">
                    <Link href="/" className="btn btn-inscription26"><i className="fa fa-sign-in"></i>&nbsp;Connexion</Link>
                    </li>
                    <li className="">
                    <Link href="/" className="btn btn-inscription25"><i className="fa fa-lock"></i> Participer à miss ci</Link>
                    </li>
                    <li className="menu-has-children">
                    <Link href="/" className="" style={{fontSize: 13}}><img alt="fr" src="/assets/img/fr.png" style={{width: 18, borderRadius: 25}} /> FR</Link>
                        <ul>
                            <li><Link href="/" style={{ fontSize: 14}}><img alt="fr" src="/assets/img/fr.png" style={{width: 18, borderRadius: 25, marginTop: -2 }} />FR</Link></li>
                            <li><Link href="/" style={{ fontSize: 14}}><img alt="eng" src="/assets/img/eng.png" style={{width: 18, borderRadius: 25, marginTop: -2 }} /> EN</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
      </div>
      
    </div>
  </header>
  );
};
export default Header;
