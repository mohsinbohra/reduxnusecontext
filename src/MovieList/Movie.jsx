import React from 'react';

const Movie = ({myname, myprice}) => {
    return (
        <div>
           <h3>{myname}</h3> 
           <p>{myprice}</p> 
          
        </div>
    );
};

export default Movie;