import React from 'react'

const Paginations = (props) => {
    const {setPage, limit} = props;
    let array = [];

    for (let index = 0; index < limit; index++) {
        array.push(index+1);
        
    }
    return (
        <div>
            {array.map((item)=>{
                return <button className="button" key={item} onClick={() => setPage(item)}>{item}</button>
            })}
        </div>
    )
}

export default Paginations
