import React from "react";

export const SearchBar = (props) =>  {

    return (
        <div className="SearchBarContainer">
            <div className="">
                <input type="text" placeholder="Category" className="searchBarContainer__row__input"></input>
                <i className="fas fa-search SearchBarContainer--icon"></i>
            </div>
        </div>
    );
    
}


