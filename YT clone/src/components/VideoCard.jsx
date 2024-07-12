// import React from "react";
// import thumbnail from './public/thumbnail.png';

// export function VideoCard(){
//     return <div Class="flex justify-center">
//         <img src= {thumbnail} alt="" />
//     </div>
// }

import thumbnail from '../assets/thumbnail.png';

export function VideoCard(){
    return (<div>
            <img src={thumbnail} alt="" />
            <div className='grid grid-cols-12'>
                <div className='col-span-2'>
                    <img className="rounded-full w-20 h-20"src={thumbnail} alt="" />
                </div>
            </div>
        </div>

    );
}
