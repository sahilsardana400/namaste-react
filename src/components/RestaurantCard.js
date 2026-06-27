import { DEFAULT_RESTURANT_IMAGE_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    console.log(props.apiData);
    
    //one way to fetch each prop and then use destructuring
    //const {name,cuisines,costForTwo} = props.apiData?.data;

    //second way to fetch all  props using destructuring and then user destrucing again on its elements/values
    const {apiData} = props;//destructuring props
    const {name,cuisines,costForTwo,image,totalRating} = apiData?.data;//again destructuring

    return (
        <div className="restaurant-card" style={{ backgroundColor: "#ab353517", padding: "20px", borderRadius: "10px", width: "300px", margin: "10px" }}>
            <img src={image??DEFAULT_RESTURANT_IMAGE_URL} alt="restaurant" className='restaurant-image' style={{ width: "100%", height: "auto",padding: "0px" }} />
            <h3 className='restaurant-name'>{name}</h3>
            <p className='restaurant-cuisine'>{cuisines.join(',',' ')}</p>
            <p className='restaurant-rating'>{costForTwo/100}</p>
            <p className='resturant-star-rating'>{totalRating}</p>
        </div>
    );
}

export default RestaurantCard;