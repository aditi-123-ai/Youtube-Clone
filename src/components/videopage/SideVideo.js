import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import ReactPlayer from "react-player/youtube";

function SideVideo({video}) {
    const history = useHistory();
    const [timestamp, setTimestamp] = useState(null);

    const playThisVideo = () => {
        const encryptedId = btoa(video?.id);
        history.push(`/video?vid=${encryptedId}`);
        document.title = video?.title;
    };

    const getTime = (time) => {
        var sec_num = parseInt(time, 10);
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor(sec_num / 60) % 60;
        var seconds = sec_num % 60;

        return [hours, minutes, seconds]
        .map((v) => (v < 10 ? "0" + v : v))
        .filter((v, i) => v !== "00" || i > 0 )
        .join(":");
    };

    return (
            <div onClick={playThisVideo} className="moreVideos">
                <ReactPlayer
                onDuration={(time) => setTimestamp(time)}
                style={{ display: "none" }}
                url={video?.videoUrl}
                />
                <div className="moreVideos__video">
                    <div className="moreVideos__tumbnail">
                        <p className="moreVideos__timestamp">
                            {timestamp && getTime(timestamp)}
                        </p>
                        <img src={video?.thumbnail} alt="video__tag" />
                    </div> 

                    <div className="moreVideos__details">
                        <h5>{video?.title}</h5>
                        <p>{video?.author}</p>
                        <p>658 Views * 3 Months Ago</p>
                    </div>
                </div>
            </div>                    
                
    )
}

export default SideVideo;
