import React from 'react';

// 
const Img = props => ( 
        <div className="background" width={props.width}>
                <img  className="background-image" src={props.url} alt={props.alt} />
        </div>     
);

export default Img;