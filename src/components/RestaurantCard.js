import { DEFAULT_RESTURANT_IMAGE_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    //one way to fetch each prop and then use destructuring
    //const {name,cuisines,costForTwo} = props.apiData?.data;

    //second way to fetch all  props using destructuring and then user destrucing again on its elements/values
    const {apiData} = props;//destructuring props
    const {name,cuisines,costForTwo,cloudinaryImageId,avgRating} = apiData?.info;//again destructuring
    
    return (
        <div className="restaurant-card" style={{ backgroundColor: "#ab353517", padding: "20px", borderRadius: "10px", width: "300px", margin: "10px" }}>
            <img src={cloudinaryImageId?`https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`:DEFAULT_RESTURANT_IMAGE_URL} alt="restaurant" className='restaurant-image' style={{ width: "100%", height: "auto",padding: "0px" }} />
            <h3 className='restaurant-name'>{name}</h3>
            <p className='restaurant-cuisine'>{cuisines.join(',',' ')}</p>
            <p className='restaurant-rating'>{costForTwo}</p>
            <p className='resturant-star-rating'>{avgRating}</p>
        </div>
    );
}

export default RestaurantCard;