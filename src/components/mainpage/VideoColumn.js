import React, { useState } from 'react';
import { Avatar } from '@material-ui/core'; 
import { useHistory } from 'react-router-dom';
import ReactPlayer from 'react-player';

function VideoColumn({video, randomMonths, randomViews}) {
    const [playGif, setPlayGif] = useState(false);
    const history = useHistory();

    const [videoTime, setVideoTime] = useState(null);
    
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

    const moveToVideoPage = () => {

        const encryptedId = btoa(video?.id)
        history.push(`/video?vid=${encryptedId}`);
        document.title = video?.title;
    }

    const getTime = (time) => {
        var sec_num = parseInt(time, 10)
        var hours = Math.floor(sec_num / 3600)
        var minutes = Math.floor(sec_num / 60) % 60
        var seconds = sec_num % 60

        return [hours, minutes, seconds]
            .map(v => 10 ? "" + v : v)
            .filter((v,i) => v !== "00" || i > 0)
            .join(":")
    }

    return (
    <div onClick={moveToVideoPage} className="videoContainer__cloumn">

    <ReactPlayer onDuration= {(time) => setVideoTime(time)} style={{display: "none"}} url={video?.videoUrl} />

        <div className="video__thumbnailContainer">
            <div className="video__thumbnail">
                <div className="video__thumbnail"
                onMouseEnter={() => setPlayGif(true)}
                onMouseLeave={() => setPlayGif(false)}
                >
                {!playGif && videoTime && <p>{getTime(videoTime)}</p>}
                
                <img 
                style={{width: "270px"}}
                src={playGif ? video?.gif : video?.thumbnail}
                alt="thumbnail"/>
                </div>
            </div>
        </div>
        <div className="video__details">
            <div className="video__profile">
                <Avatar src={video.profile} alt="aditi"/>
            </div>
            <div className="video__description">
                <p style={{width: "250px"}}> {truncate(video?.title, 40)}</p>
                <div className="video__authorViewsContainer">
                    <p>{video?.author}</p>
                    <div className="video__viewsAndAgo">
                        <p>{`${randomViews}k • ${randomMonths} ${randomMonths===1 ? "Month" : "Months"} Ago`}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
}

export default VideoColumn;
