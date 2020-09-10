import React, { useState, createContext } from 'react';
import Nav from './Nav';
import MovieList from './MovieList';

export const MovieContext = createContext();

const MovieProvider = (props) => {


    const [movies, setMovies] = useState([
        {
            name:'Spider Man 3',
            price:'$5',
            id:25410
        },
        {
            name:'Slumdog Millionare',
            price:'$5',
            id:25411
        },
        {
            name:'Fast and Furious 8',
            price:'$5',
            id:25699
        }
    ]);

    return (
        <div>
            <MovieContext.Provider value={[movies, setMovies]}>
           {props.children}
            </MovieContext.Provider>
        </div>
    );
};

export default MovieProvider;