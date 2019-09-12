import React from 'react';

const Searchbox = (props) => {
    return(
    <div className="pa2"> 
        <input onChange={props.onSearchChange} className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="Search Friends" />
    </div>
    )
}

export default Searchbox;