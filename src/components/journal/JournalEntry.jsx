import React from 'react'

export const JournalEntry = () => {

    return (
        <div className='journal__entry pointer'>
            <div 
                className='journal__entry-picture'
                style={{ 
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://ih1.redbubble.net/image.1118926180.0409/flat,750x,075,f-pad,750x1000,f8f8f8.jpg)'
                 }}
            ></div>

            <div className='journal__entry-body'>
                 <p className='journal__entry-title'>
                     Un nuevo día
                 </p>

                 <p className='journal__entry-content'>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 </p>
            </div>

            <div className='journal__etntry-date-box'>
                 <span>Monday</span>
                 <h4>28</h4>
            </div>
        </div>
    )
}
