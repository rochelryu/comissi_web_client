import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) => (value === activeMenu ? "active" : "");
  return (
    <ul>
      <li>
        <Link href="/">ACCUEIL</Link>
      </li>
      <li>
        <Link href="/competitions">COMPÉTITIONS</Link>
      </li>
      <li>
        <Link href="/tikets">ÉVENTS ET TICKETS</Link>
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
