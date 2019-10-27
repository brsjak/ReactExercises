import React from 'react'

function MainContent(){
        const date = new Date();
        const hours = date.getHours;

        let timeOfDay

        if(hours<12){
            timeOfDay="Morning";
        }else if(hours>12 && hours <=16){
            timeOfDay="Afternoon"
        } else{
            timeOfDay="Evening"
        }

    return(
        <div>
           <h2>Good {timeOfDay}</h2>
        </div>
    )
}

export default MainContent