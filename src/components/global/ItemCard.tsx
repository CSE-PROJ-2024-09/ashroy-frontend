import { Link } from "react-router-dom";

interface ItemCardData {
  type: string;
  id: string;
  image: string;
  name: string;
  location: string;
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
  type,
  id,
  image,
  name,
  location,
}) => {
  return (
    <div className="card mb-3 h-full border-dark border-3">
      <img height="250px" src={image} alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Address: {location}</p>
      </div>
      <div className="card-footer d-flex justify-content-end pb-3 pt-3">
        <Link to={`/${type}/${id}`} className="btn btn-dark border-white">
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default ItemCard;
