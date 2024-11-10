import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";


const Main = () => {
    return (
        <div>
             <p className="text-5xl">MD MOMINUL ISLAM</p>
             <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
           
        </div>
    );
};

export default Main;