import React from 'react';
import Card from './Card';

const Cardlist = ({ friendz }) => {

    return(
        <div>
            {
            friendz.map((user, i) =>{
                    return  (<Card 
                    key={i} 
                    id={friendz[i].id}
                    name={friendz[i].name}
                    email={friendz[i].email}
                    /> 
                    );
                })}

        </div>
    );
}

export default Cardlist;