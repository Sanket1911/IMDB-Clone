import React from 'react'
// import {useState,useEffect} from 'react'
import banner from '../banner.jpg'
// import axios from 'axios'
function Banner() {

    // let [Banner,setBanner] = useState();
    // useEffect(function(){
    //     axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=df33a4cef40f3f455876ddb8a5ccfe49").then((res) => {
    //         // console.log(res.data.results);
    //         setBanner(res.data.results[0]);
    //     })
    // },[])

    return (
        <div className={`bg-[url(${banner})] h-[40vh] lg:h-[50vh] bg-center bg-cover flex items-end `}>
            <div className='text-white text-4xl p-4 bg-gray-900 w-full flex align-center justify-center bg-opacity-50'>Spider Man: No Way Home
            </div>
        </div>
    )
}

export default Banner