import React from 'react'

 const DisplayComment = () => {
    return (
        <div className="card">
            <img src="image" alt="avator"/>
            <div className="container">
                <span>{name}</span>
                <span>{date}</span>
               <h1>{comment}</h1>
            </div>
        </div>
    )
}
export default DisplayComment