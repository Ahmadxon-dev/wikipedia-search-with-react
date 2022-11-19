import React  from 'react';

const SerachItem = ({title, pageid, snippet}) => {
    let link = `https://en.wikipedia.org/?curid=${pageid}`
    return (
        <div className={`searchitem`}>
            <a href={link} target={`blank`}>{title}</a><br/>
            <a className={`a2`} target='blank' href={link}>{link}</a>
            <h4 dangerouslySetInnerHTML={{__html: snippet}}></h4>
        </div>
    );
};

export default SerachItem;