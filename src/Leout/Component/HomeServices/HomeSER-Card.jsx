import { BiArrowFromLeft } from 'react-icons/bi';

const HomeSERCard = ({ serTitle }) => {
    const { title, Img } = serTitle;
    return (
        <div className="card  bg-base-100 shadow-xl border-b-4 border-red-600">
            <div className="card-body">
            <h2 className='text-[10px]'>OUR SERVICES V1</h2>
                <h2 className="card-title">{title}</h2>
               
                <div className="card-actions justify-between items-center mt-4">
                <div className='flex items-center text-xl text-red-500 cursor-pointer'>
                <h3>Read More </h3>
                <BiArrowFromLeft className='text-red-900'></BiArrowFromLeft>
                </div>
                <img className='w-25' src={Img} alt="" />  
                </div>
            </div>
        </div>
    );
};

export default HomeSERCard;