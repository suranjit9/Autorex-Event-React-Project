import { useContext } from "react";
import { authContext } from "../../../UseContext/AuthProvider/AuthProvider";
import HomeSERCard from "./HomeSER-Card";


const HomeServices = () => {
    const {servicesTitle} = useContext(authContext);
    // console.log(servicesTitle);
    return (
        <div className=" w-[80%] mx-auto grid grid-cols-3 gap-4 mt-4  ">
            {
               servicesTitle.map(res=> <HomeSERCard
               key={res.id}
               serTitle ={res}
               ></HomeSERCard>) 
            }

          
        </div>
    );
};

export default HomeServices;