import React from 'react';

const Form = ({submithandler, input,setInput, searchHandler}) => {
    return (
        <form onSubmit={submithandler}>
            <input
                className={ `input`}
                type="search"
                placeholder={`type whatever you want to search`}
                value={input}
                onChange={(e)=>setInput(e.target.value)}

            />

            <button onClick={()=>searchHandler(input)} type="submit"> Search</button>
        </form>
    );
};

export default Form;