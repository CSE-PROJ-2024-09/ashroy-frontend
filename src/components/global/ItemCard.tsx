import { Link } from 'react-router-dom';

interface ItemCardData {
  image: string;
  name: string;
  location: string;
  website: string;
}

/**
 * @param {*} {
 *   image,
 *   name,
 *   location,
 *   website,
 * }
 * @return {*}
 */
const ItemCard: React.FC<ItemCardData> = ({
  image,
  name,
  location,
  website,
}) => {
  return (
    <div className='card mb-3 h-full border-dark border-3'>
      <img height='250px' src={image} alt={name} />
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <p className='card-text'>Address: {location}</p>
      </div>
      <div className='card-footer d-flex justify-content-end pb-3 pt-3'>
        <Link to={website} className='btn btn-dark border-white'>
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default ItemCard;
