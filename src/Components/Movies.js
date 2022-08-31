import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Oval } from 'react-loader-spinner'
import Pagination from './Pagination';

function Movies() {

    let [movies, setMovies] = useState([]);  
    let [pageNum,setPage] = useState(1);
    let [hover,sethover] = useState('');
    let [favorites,setFavorites] = useState([]);


    // content of Pagination Component
    function goBack(){
        if(pageNum > 1){
            setPage(pageNum - 1);
        }
    }
    function goAhead(){
        setPage(pageNum + 1);
    }

    useEffect(function () { 
        let oldFav = localStorage.getItem("imdb");
        oldFav = JSON.parse(oldFav) || [];
        // console.log(oldFav);
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=df33a4cef40f3f455876ddb8a5ccfe49&page=${pageNum}`).then((res) => {
            // console.log(res.data.results);     
            setMovies(res.data.results);
            // setFavorites(...x);
        })
    },[pageNum])

    let add = (movie) => {
        let newArray = [...favorites,movie];
        setFavorites([...newArray]);
        // console.log(newArray);
        localStorage.setItem("imdb",JSON.stringify(newArray));
    }

    // let del = (movie) => {
    //     let newArray = favorites.filter((m)=> m.id !== movie.id);
    //     setFavorites(...newArray);
    //     localStorage.setItem("imdb",JSON.stringify(newArray));
    // }
    
    
    
    let remove = (movie) => {
        let newArray = favorites.filter((m) => m.id !== movie.id)
        setFavorites([...newArray]);
        localStorage.setItem("imdb",JSON.stringify(newArray));
        // console.log(newArray);
    }
    
    return (
        <>
            <div className='cursor-pointer'>

                <div className='mt-6 text-2xl font-bold text-pink-500 text-center cursor-pointer'>
                    Trending Movies
                </div>

                {
                    movies.length === 0 ?
                        <div className='flex justify-center'>
                            <Oval
                                height="100"
                                width="100"
                                color="gray"
                                ariaLabel='loading'
                            />
                        </div>
                        :
                        <div className='flex justify-center flex-wrap'>
                            {
                                movies.map((movie) => (
                                    <div className={`bg-[url(${"https://image.tmdb.org/t/p/w500" + movie.backdrop_path})] bg-cover h-[25vh] w-[150px] lg:h-[35vh] lg:w-[250px] bg-center flex items-end justify-center m-4 
                rounded-lg  hover:scale-110 easeout duration-150 m-4 relative`} onMouseEnter={()=>sethover(movie.id)} onMouseLeave={()=>sethover("")}>

                                        {
                                            hover === movie.id && //if we want to write only if the use && instead of :
                                            <>
                                                {
                                                    favorites.find((m) => m.id === movie.id) ?
                                                        <div className='absolute top-2 right-2 p-2 bg-gray-800 rounded-xl
                                                        text-xl' onClick={() => {
                                                            remove(movie);
                                                        }}>❌</div>
                                                    :    
                                                        <div className='absolute top-2 right-2 p-2 bg-gray-800 rounded-xl
                                                        text-xl' onClick={() => {
                                                            add(movie);
                                                        }}>😍</div>
                                                }                                                
                                            </>
                                        }
                                        <div className='text-white bg-gray-900 bg-opacity-50 flex justify-center w-full rounded-lg p-4'>{movie.title}</div>
                                    </div>
                                ))
                            }
                        </div>
                }
            </div>
            <Pagination pageNumber={pageNum} goAhead={goAhead} goBack={goBack}></Pagination>
        </>
    )
}

export default Movies