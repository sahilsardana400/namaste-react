import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import { SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
//import resturantData from "../utils/mockData";//mock data for resturants

const Body = () => {
    const [resturantList, setresturantList] = useState([]);//this is array destructuring
    const [originalResturantList, setoriginalResturantList] = useState([]);

    const [searchedInput,setsearchedInput] = useState('');
    //we can also write it like this
    // const arr = useState(resturantData);
    // const resturantList= arr[0];
    // const setresturantList= arr[1];
    useEffect(() => {
        fetchResturants();
    },[]);

    const fetchResturants = async() => {
        let resturants = await fetch(SWIGGY_API_URL);
        let res = await resturants.json();
        setresturantList(res?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);//optional chaiming
        setoriginalResturantList(res?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);//optional chaiming
    };
    return (resturantList.length === 0)?<Shimmer />:(
            <div className="body">
                <div className="searchbar">
                    <input type="text" placeholder="Search for restaurant, cuisine or a dish" className='search-input' value={searchedInput} onChange={(e) => {
                       setsearchedInput(e.target.value); 
                    }} />
                    <button className='search-btn' onClick={() => {
                        //filter the resturantss based on the name
                        let filteredRes = originalResturantList.filter((resturant) => {
                            return resturant?.info?.name?.toLowerCase().includes(searchedInput.toLowerCase());
                        });
                        setresturantList(filteredRes);
                    }}>Search</button>
                    
                    <button className='filter_btn_resturant' onClick={() => {
                    let resturantFiltered = resturantList.filter((resturant) => {
                        return resturant?.info?.avgRating >= 4.5;
                    });
                    setresturantList(resturantFiltered);
                }}>Filter top rated resturant</button>
                </div>
                
                <div className="restaurant-container">
                    {
                        // resturantList?.data?.data?.cards.map((resturant,index) => 
                        //     <RestaurantCard apiData={resturant} key={resturant?.data?.id??index}/>
                        // )
                        resturantList.map((resturant,index) => 
                            <RestaurantCard apiData={resturant} key={resturant?.info?.id??index}/>
                        )
                    }
                </div>
            </div>
        );
};

export default Body;