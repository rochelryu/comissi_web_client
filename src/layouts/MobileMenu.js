import Link from "next/link";
import { useEffect, useState } from "react";
import ConsumApi from '@/src/services_workers/consum_api';

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const [allLocality, setAllallLocality] = useState([]);

  const activeMenuSet = (value) => setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) => (value === activeMenu ? "active" : "");

    useEffect(() => {
      loadData();
    }, []);

    const loadData = async () => {
      const {data:localities} = await ConsumApi.getAllLocality();
      setAllallLocality(localities);
    }
  return (
    <ul>
      <li>
        <Link href="/">ACCUEIL</Link>
      </li>
      <li className={`menu-item-has-children ${activeLi("language")}`}>
        <a href="#" onClick={() => activeMenuSet("language")}>
          COMPÉTITIONS
        </a>
        <ul className="sub-menu">
          {allLocality.map((locality) => (<li key={locality.id}><Link href={`/competitions/${locality.id}/${locality.nom_departement.toLocaleUpperCase()}`}>{locality.nom_departement.toLocaleUpperCase()}</Link></li>))}
        </ul>
      </li>
      <li>
        <Link href="/edition">ÉVENTS</Link>
      </li>
      <li>
        <Link href="/community">COMMUNAUTÉ</Link>
      </li>
      <li>
        <Link href="/games">JEUX</Link>
      </li>
      <li>
        <Link href="/live">WEBTV</Link>
      </li>
      <li className={`menu-item-has-children ${activeLi("language")}`}>
        <a href="#" onClick={() => activeMenuSet("language")}>
          Français
        </a>
        <ul className="sub-menu">
          <li>
            <Link href="english-sub">Anglais</Link>
          </li>
        </ul>
      </li>

    </ul>
  );
};
export default MobileMenu;
