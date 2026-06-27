import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resturantData from "../utils/mockData";//mock data for resturants

const Body = () => {
    const [resturantList, setresturantList] = useState(resturantData);//this is array destructuring
    //we can also write it like this
    // const arr = useState(resturantData);
    // const resturantList= arr[0];
    // const setresturantList= arr[1];

    return (
        <div className="body">
                <div className="searchbar">
                    <input type="text" placeholder="Search for restaurant, cuisine or a dish" className='search-input' />
                </div>
                <button className='filter_btn_resturant' onClick={() => {
                    let resturantFiltered = resturantList.filter((resturant) => {
                        return resturant?.data?.totalRating > 4;
                    });
                    setresturantList(resturantFiltered);
                }}>Filter top rated resturant</button>
                <div className="restaurant-container">
                    {
                        // resturantList?.data?.data?.cards.map((resturant,index) => 
                        //     <RestaurantCard apiData={resturant} key={resturant?.data?.id??index}/>
                        // )
                        resturantList.map((resturant,index) => 
                            <RestaurantCard apiData={resturant} key={resturant?.data?.id??index}/>
                        )
                    }
                </div>
        </div>
    );
};

export default Body;