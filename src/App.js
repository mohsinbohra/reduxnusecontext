import React from 'react';
import './App.css';
//import Increanddecrement from './Component/Increanddecrement';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement } from './actions';
import MovieList from './MovieList/MovieList';
import Nav from './MovieList/Nav';
import MovieProvider from './MovieList/MovieContext';
import AddMovie from './MovieList/AddMovie';


function App() {
  const counter = useSelector(state => state.mycounter);
  const isLogged = useSelector(state => state.isLogged);
const dispatch = useDispatch();
  return (
    <MovieProvider>
    <div className="App">
    <AddMovie />
    <Nav />
    <MovieList />
     <h1>Counter {counter}</h1>
    <button onClick={() => dispatch(increment(3))}>+</button>
    <button onClick={() => dispatch(decrement())}>+</button>
    {isLogged ? <h3>Valuable Information I shouldn't see</h3> : ''}
    
    </div>
    </MovieProvider>
  );
}

export default App;
