import { useContext } from "react";
import { authContext } from "../../../UseContext/AuthProvider/AuthProvider";
import { Link, useParams } from "react-router-dom";
import bg from '../../../assets/img/bg-1 (1).jpg';



const ServicesCard = () => {
    const { id } = useParams();
    const { servicesDis } = useContext(authContext);
    const showdata = servicesDis?.find(hello => hello.id == id);
    return (
        <div>
            <div className="w-full mx-auto mb-5">
                <div className="relative ">
                    <img src={bg} alt="" />
                    <div className="absolute -mt-[21%] ml-[10%]">
                        <h2 className="text-2xl text-red-600">Our services</h2>
                        <h1 className="text-white text-5xl font-medium">{showdata.title}</h1>
                    </div>
                </div>
                <div className="w-10/12 mx-auto">

                    <h1 className="text-3xl font-semibold mt-3 mb-2">{showdata.title}</h1>
                    <p className="text-base ml-7 text-justify">{showdata?.description}</p>
                    <div className="grid grid-cols-4 mt-5 gap-5">
                        <div className="col-span-2">
                            <img src={showdata?.thumbImg} alt="" />
                        </div>
                        <div className="col-span-2">
                            <h1 className="text-3xl font-semibold mb-4">Benefits</h1>
                            <p>{showdata?.benefits}</p>
                            <p>
                            Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself.
                            </p>
                            <ul className="text-base ml-5 font-bold mt-5 ">
                                <li>* Those who do not know how to pursue</li>
                                <li>* Pleasure rationally encounter</li>
                                <li>* Consequences that are extremely painful.</li>
                                <li>* Nor again is there anyone who loves or pursues</li>
                            </ul>
                            <div className=" mt-5 text-center">
                                <Link to={'/Booking'}><h1 className="btn bg-red-500 text-white">Booking Now</h1></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServicesCard;