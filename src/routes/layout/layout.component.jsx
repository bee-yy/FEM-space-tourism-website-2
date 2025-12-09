import {Outlet, Link, useLocation} from "react-router-dom"

import Header from '../../components/header/header.component.jsx'


function Layout(){



    
const { pathname } = useLocation();

function getPageClass() {
    console.log(pathname);

        if (pathname === "/") return "home";
        if (pathname === "/destination") return "destination";
        if (pathname === "/crew") return "crew";
        if (pathname === "/technology") return "technology";
        return "home";
    }

return(
    <div className={`page-wrapper ${getPageClass()}-page page-background`}>
        <Header />
    <main>
        <Outlet />
    </main>
    </div>
)

}


export default Layout;