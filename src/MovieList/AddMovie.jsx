import React, { useState, useContext } from 'react';
import { MovieContext } from './MovieContext';

const AddMovie = () => {
const [name, setName] = useState('');
const [price, setPrice] = useState('');
const [movies, setMovies] = useContext(MovieContext);

const updateName = (e) => {
    setName(e.target.value);
}
 
const updatePrice = (e) => {
    setPrice(e.target.value);
}


const addedMovie =(e) => {
    e.preventDefault();
    setMovies(prevMovies => [...prevMovies,{name:name, price:price}])
    
}
    return (
        <div>
            <form onSubmit={addedMovie}>
            <input name="name" type="text" value={name} onChange={updateName} />
            <input name="price" type="text" value={price} onChange={updatePrice} />
            <button>Submit</button>
            </form>
        </div>
    );
};

export default AddMovie;