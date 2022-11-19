import React from 'react';
import SerachItem from "./SerachItem";

const SearchList = ({data}) => {
    return (
        <div>
            {
                data.length ?
                    data.map(item=>{
                        return <SerachItem key={item.pageid} {...item} />
                    })
                    :
                    <h1>No Data Found</h1>
            }
        </div>
    );
};

export default SearchList;