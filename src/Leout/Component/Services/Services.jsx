import { useContext } from "react";
import { authContext } from "../../../UseContext/AuthProvider/AuthProvider";


const Services = () => {
    const { servicesDis } = useContext(authContext);

    // console.log(showdata)


    return (
        <div className="w-[90%] mx-auto">
            <div className="p-10 ">
                <h1 className="text-4xl font-extrabold underline ">Our Services <span><hr /></span></h1>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
                {
                    servicesDis.map(data => {
                        return <div key={data.id} className="card  bg-base-100 shadow-xl">
                            <figure><img className="w-full h-[250px]" src={data.thumbImg} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{data.title}</h2>
                                {
                                    data.description.length > 200 && <p className="ml-2">{data.description.slice(0, 100)} </p>
                                }

                                <div className="ml-3">
                                    <h1 className="text-green-500 font-semibold text-base">Benefits :</h1>
                                    <p>{data.benefits}</p>
                                </div>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-sm bg-red-500 text-white hover:bg-green-400">Booking Now</button>
                                </div>
                            </div>
                        </div>
                    })
                }

            </div>
        </div>
    );
};

export default Services;