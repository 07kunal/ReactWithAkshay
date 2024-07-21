import React, { useEffect, useState } from 'react'
import { Restaurant_Data } from '../../config/mockData';
import RestrauntCart from '../../component/RestrauntCart';
import './body.css';




//config driven UI ( which is build by Backend developer)



// console.log(Restaurant_Data)



const filerData = (searchTxt, restrauList) => {

    return restrauList?.filter((restrau) => restrau?.data?.name?.toLowerCase().includes(searchTxt.toLowerCase()))
}

const filterRated = (restrauList) => {

    return restrauList?.filter((restrau) => restrau?.data?.avgRating > 4)
}

function Body() {
    let keysearch = "hello test" // writing  local variable in JS 

    // creating the local state variable in React using useState hooks ( which is nothing but the Normal JS function which provide specific functionality.)
    // changes occur here.

    const [searchTxt, setSearchTxt] = useState('');
    const [restrau_data, setRestrau_data] = useState(Restaurant_Data)
    let tittle = "kunal";
    // useEffect(()=>{
    //     const data = filerData(searchTxt, Restaurant_Data)
    //     console.log(data)
    //     setRestrau_data(data)
    // },[searchTxt])

    // useEffect(()=>{
    //     fetchData();
    // },[]);
    // const fetchData = async()=>{
    //     const data = await fetch("https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/");
    //     const json = await data.json();
    //     console.log('json',json); 
    //     // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.509548&lng=78.40595&page_type=DESKTOP_WEB_LISTING"); 
    //     // const json = await data.json(); 
    //     // console.log(json);
        
        
    // }
    console.log("changes occur", searchTxt.length);

    return (
        <div className='Body_section'>
            <div className="filter">
                <div className="filterRated">
                <button className='filter-btn' onClick={()=> {const dataRated=filterRated(Restaurant_Data);setRestrau_data(dataRated)}} >Top Rated Rastaurant</button>
                </div>
                <div className="search_bar" >
                    <input type="text" className='search-input' placeholder='search' value={searchTxt}
                        onChange={(e) => {
                            setSearchTxt(e.target.value)
                        }
                        }
                    />
                    <button className="search-btn" onClick={() => {
                        // need filter data , and pass into updated restrau list
                        const data = filerData(searchTxt, Restaurant_Data)
                        console.log(data)
                        setRestrau_data(data)
                    }}

                    >search</button>
                </div>
            </div>

            <div className='Body_main'>
                {
                    // Restaurant_Data?.filter((restrau) => restrau?.data?.name?.toLowerCase().includes(searchTxt.toLowerCase()))?.map((restaurant) 
                    restrau_data?.map((restaurant) => <RestrauntCart key={restaurant?.data?.id} {...restaurant.data} />)
                    //data pass as destructing form
                }

            </div>
        </div>

    )
}

export default Body