import { Outlet } from "react-router-dom";
import Header from "../Leout/Header/Header";
import Footer from "../Leout/Component/Footer/Footer";


const Root = () => {
    return (
        <div className="max-w-full mx-auto">
            <Header/>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default Root;