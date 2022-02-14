import React from "react";
import './SearchResults.css';
import  {TrackList} from '../TrackList/TrackList';

export const SearchResults = (props) => {

    const { searchResults, onAdd } = props;

    return(
        <div className="SearchResults">
             <h2>Results</h2>
             <TrackList 
                tracks={searchResults} 
                onAdd={onAdd} 
                isRemoval={false} 
             />
        </div>
    );
};