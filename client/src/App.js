import React, { useState } from 'react';
import SavedList from './Movies/SavedList';
import { Route } from "react-router-dom"; 


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MoveList} />
      <Route path="/movies:id" component={Movie} />
    </div>
  );
};

export default App;
