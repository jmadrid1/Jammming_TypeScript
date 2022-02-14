import React from "react";
import './SearchBar.css';

export const SearchBar = (props) => {

    const { term, setTerm, onSearch } = props;

    const handleTermChange = (e) => {
        let newTerm = e.target.value;
        setTerm(newTerm);
    }

    const search = () => {
        onSearch(term)
    }

    return(
        <div className="SearchBar">
            <input value={term} onChange={handleTermChange} placeholder="Enter A Song, Album, or Artist" />
            <button className="SearchButton"  onClick={search}>SEARCH</button>
        </div>
    );
};