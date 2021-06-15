import React from 'react';
import "../../css/videopage/MoreVideos.css";
import SideVideo from  "./SideVideo";
import getRandom from '../../util/getRandom';

function MoreVideos({mixedArray, videoId}) {

    const filteredVideoArray = mixedArray.filter(video => video.id !== videoId);

    const filtered10 = getRandom(filteredVideoArray, 10);



    return (
        <div className = "noreVideos__container">
        {filtered10.map(video => <SideVideo video = {video}/>)}

        </div>
    )
}

export default MoreVideos;
