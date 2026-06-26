import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Swiggy App Layout:
 * Components we need to create:
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search Bar
 *  - Restaurant Container
 *    - Restaurant Card
 * Footer
 *  -copyright
 *  - links
 *  - Address
 *  - Contact
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logocontainer">
                <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="logo" width="50" className='logo' />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
};

const resturantData = {
  "cardType": "seeAllRestaurants",
  "layoutAlignmentType": "VERTICAL",
  "data": {
    "type": "seeAllRestaurants",
    "data": {
      "title": "SEE ALL",
      "totalOpenRestaurants": 1787,
      "cards": [
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "307050",
            "name": "Call Me Chow",
            "city": "Bangalore",
            "area": "Koramangala",
            "totalRatingsString": "1000+ ratings",
            "cuisines": [
              "Chinese",
              "Pan-Asian"
            ],
            "costForTwo": 40000,
            "costForTwoString": "₹400 FOR TWO",
            "deliveryTime": 29,
            "minDeliveryTime": 29,
            "maxDeliveryTime": 29,
            "slaString": "29 MINS",
            "lastMileTravel": 1.5,
            "slugs": {
              "restaurant": "call-me-chow-koramangala",
              "city": "bangalore"
            },
            "image":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png"
          }
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "307051",
            "name": "Burger Junction",
            "city": "Bangalore",
            "area": "Indiranagar",
            "totalRatingsString": "5000+ ratings",
            "cuisines": [
              "Burgers",
              "Fast Food"
            ],
            "costForTwo": 35000,
            "costForTwoString": "₹350 FOR TWO",
            "deliveryTime": 25,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 30,
            "slaString": "25 MINS",
            "lastMileTravel": 2.1,
            "slugs": {
              "restaurant": "burger-junction-indiranagar",
              "city": "bangalore"
            },
            "image":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/South%20Indian.png"
          }
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "307052",
            "name": "Pizza World",
            "city": "Bangalore",
            "area": "HSR Layout",
            "totalRatingsString": "2000+ ratings",
            "cuisines": [
              "Pizza",
              "Italian"
            ],
            "costForTwo": 60000,
            "costForTwoString": "₹600 FOR TWO",
            "deliveryTime": 35,
            "minDeliveryTime": 30,
            "maxDeliveryTime": 40,
            "slaString": "35 MINS",
            "lastMileTravel": 3.2,
            "slugs": {
              "restaurant": "pizza-world-hsr-layout",
              "city": "bangalore"
            },
            "image":"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png"
          }
        },
        {
          "type": "restaurant",
          "data": {
            "type": "F",
            "id": "307053",
            "name": "Biryani House",
            "city": "Bangalore",
            "area": "BTM Layout",
            "totalRatingsString": "10000+ ratings",
            "cuisines": [
              "Biryani",
              "North Indian"
            ],
            "costForTwo": 50000,
            "costForTwoString": "₹500 FOR TWO",
            "deliveryTime": 32,
            "minDeliveryTime": 30,
            "maxDeliveryTime": 35,
            "slaString": "32 MINS",
            "lastMileTravel": 4.0,
            "slugs": {
              "restaurant": "biryani-house-btm-layout",
              "city": "bangalore"
            }
          }
        }
      ]
    }
  }
};



const Body = () => {
    return (
        <div className="body">
                <div className="searchbar">
                    <input type="text" placeholder="Search for restaurant, cuisine or a dish" className='search-input' />
                </div>
                <div className="restaurant-container">
                    {
                        resturantData?.data?.data?.cards.map((resturant,index) => 
                            <RestaurantCard apiData={resturant} key={resturant?.data?.id??index}/>
                        )
                    }
                </div>
        </div>
    );
};

const RestaurantCard = (props) => {
    console.log(props.apiData);
    
    //one way to fetch each prop and then use destructuring
    //const {name,cuisines,costForTwo} = props.apiData?.data;

    //second way to fetch all  props using destructuring and then user destrucing again on its elements/values
    const {apiData} = props;//destructuring props
    const {name,cuisines,costForTwo,image} = apiData?.data;//again destructuring

    return (
        <div className="restaurant-card" style={{ backgroundColor: "#ab353517", padding: "20px", borderRadius: "10px", width: "300px", margin: "10px" }}>
            <img src={image??'https://cdn.brandfetch.io/ideeTxiKQK/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B'} alt="restaurant" className='restaurant-image' style={{ width: "100%", height: "auto",padding: "0px" }} />
            <h3 className='restaurant-name'>{name}</h3>
            <p className='restaurant-cuisine'>{cuisines.join(',',' ')}</p>
            <p className='restaurant-rating'>{costForTwo/100}</p>
        </div>
    );
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root    = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);