import React, { useState } from 'react';
import { Route  } from "react-router-dom"; 


import SavedList from './Movies/SavedList';
import Movie from "./Movies/Movie.js";
import MovieList from "./Movies/MovieList.js"; 



const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
        {/* Home Route  */}
      <Route exact path='/' component={MovieList} />
        {/* You wouldn't render this ^^^, because its' for the home page, don't need any props. */}

        {/* Movies Route  */}  
      <Route path="/movies:id" render={(props) => <Movie {...props} pickMovie={addToSavedList} /> } />
        {/* Have to add the state/props */}

    </div>
  );
};

export default App;
