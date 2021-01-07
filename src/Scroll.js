import React from 'react';
const Scroll = (props) => {
    return(
        <div style={{overflowY:'scroll', border:'3px solid green', height:'800px'}}>
            {props.children}
        </div>
    );
};
export default Scroll;