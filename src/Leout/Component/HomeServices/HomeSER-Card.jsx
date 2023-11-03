import { BiArrowFromLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const HomeSERCard = ({ serTitle }) => {
    const { title, Img, id } = serTitle;
    
    return (
        <div className="card  bg-base-100 shadow-xl border-b-4 border-red-600">
            <div className="card-body">
            <h2 className='text-[10px]'>OUR SERVICES V1</h2>
                <h2 className="card-title">{title}</h2>
               
                <div className="card-actions justify-between items-center mt-4">
                <div className='flex items-center text-xl text-red-500 cursor-pointer'>
                 <Link to={`/Services/${id}`}><h3>Read More </h3></Link>
                <BiArrowFromLeft className='text-red-900'></BiArrowFromLeft>
                </div>
                <img className='w-25' src={Img} alt="" />  
                </div>
            </div>
        </div>
    );
};
HomeSERCard.propTypes = {
    serTitle:PropTypes.object.isRequired,
}
export default HomeSERCard;