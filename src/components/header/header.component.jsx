import { Outlet, Link } from "react-router-dom";

import Logo from "../../assets/logo.svg";
import Line from "../../assets/line.svg";
import './header.styles.css'

function openSideBar(){
    console.log('Menu Open');

    let mobileNavigation = document.querySelector("#mobile-navigation")
    mobileNavigation.classList.add('open');
    // mobileNavigation.style.display = 'flex'
}

function closeSideBar(){
    console.log('Menu Closed');

    let mobileNavigation = document.querySelector("#mobile-navigation")
    mobileNavigation.classList.remove('open');
    // mobileNavigation.style.display = 'none'
}

function Header() {
  return (
    <>
      <header>
        <Link to="/" className="logo">
          <img src={Logo} alt="logo image" />
        </Link>

        <div className="line">
          <img src={Line} alt="" role="presentation" />
        </div>

        <div className="menu" onClick={openSideBar}>
          <svg
            width="24"
            height="21"
            viewBox="0 0 24 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="3" fill="#D0D6F9" />
            <rect y="9" width="24" height="3" fill="#D0D6F9" />
            <rect y="18" width="24" height="3" fill="#D0D6F9" />
          </svg>
        </div>

        <nav id="desktop-navigation">
          <menu>
        <Link to="/" className="text-preset-8"><span>00</span>Home</Link>
        <Link to="/destination" className="text-preset-8"><span>01</span> Destination</Link>
        <Link to="/crew" className="text-preset-8"><span>02</span>Crew</Link>
        <Link to="/technology" className="text-preset-8"><span>03</span>Technology </Link>
        </menu>
        </nav>
      </header>
      <nav id="mobile-navigation">
        <div className="menu-close" onClick={closeSideBar}>
          <svg
            width="24"
            height="21"
            viewBox="0 0 24 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="4.5752"
              y="0.954102"
              width="24"
              height="3"
              transform="rotate(45 4.5752 0.954102)"
              fill="#D0D6F9"
            />
            <rect
              x="2.4541"
              y="17.9246"
              width="24"
              height="3"
              transform="rotate(-45 2.4541 17.9246)"
              fill="#D0D6F9"
            />
          </svg>
        </div>
        

        <menu>
        <Link to="/" className="text-preset-8"><span>00</span>Home</Link>
        <Link to="/destination" className="text-preset-8"><span>01</span> Destination</Link>
        <Link to="/crew" className="text-preset-8"><span>02</span>Crew</Link>
        <Link to="/technology" className="text-preset-8"><span>03</span>Technology </Link>
        </menu>
      </nav>
    </>
  );
}

export default Header;
