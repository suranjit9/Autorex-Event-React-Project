import { Outlet } from "react-router-dom";
import Header from "../Leout/Header/Header";


const Root = () => {
    return (
        <div className="max-w-full mx-auto">
            <Header/>
            <Outlet/>
            
        </div>
    );
};

export default Root;