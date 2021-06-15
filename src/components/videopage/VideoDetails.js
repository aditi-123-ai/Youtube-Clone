import React, {useState} from 'react';
import "../../css/videopage/VideoDetails.css";
import ReactPlayer from 'react-player/youtube';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ReplyIcon from '@material-ui/icons/Reply';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Avatar } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { useSelector } from 'react-redux';
import {useAlert} from 'react-alert';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';


function VideoDetails() {
    const videoDetails = useSelector(state => state.video.video);
    const [notifications, setNotifications] = useState(false);

    const alert = useAlert();

    const copyToClipboard = () => {
        navigator.clipboard.writeText(`http://localhost:3000/video?vid=${videoDetails?.id}`);
        alert.show("Video Link Copied to clipboard");
    }


    return (
        <div className="videoDetails">
            <div className="vedioDetails__video">
                <ReactPlayer 
                width="1025px" 
                height="572px" 
                url={videoDetails?.videoUrl}
                controls
                playing
                />
            </div>
            <div className="videoDetails__details">
                <div className="videoDetails__left">
                <h5>{videoDetails?.title}</h5>
                <p>4,048,389 views • 8 Sept 2014</p>
                </div>
                <div className="videoDetails__right">
                   <div className="videoDetails__icon">
                        <ThumbUpIcon style={{marginRight: "5px"}}/>
                        10K
                    </div>
                    <div className="videoDetails__icon">
                        <ThumbDownIcon style={{marginRight: "5px"}}/>
                        231
                    </div>
                    <div onClick={copyToClipboard} className="videoDetails__icon">
                        <ReplyIcon style={{marginRight: "5px", transform: "scaleX(-1)"}}/>
                        SHARE
                    </div>
                    <div className="videoDetails__icon">
                        <PlaylistAddIcon style={{marginRight: "5px", marginLeft: "30px"}}/>
                        SAVE
                    </div>
                    <div className="videoDetails__icon">
                        <MoreHorizIcon/>
                    </div>
                </div>
            </div>
            <div className="videoAuthor__details">
                <div className="videoAuthor__Left">
                    <Avatar src={videoDetails?.profile} />
                    <div className="videoAuthorDetails">
                        <div className="videoProfile">
                        <h6>{videoDetails?.author}</h6>
                        <CheckCircleIcon style={{marginLeft: "5px", fontSize: 15, color: "#888"}}/>
                        </div>
                        <p>5.23M subscribers</p>
                    </div>
                </div>
                <div className="videoAuthor__right">
                    <button>SUBSCRIBED</button>
                    {notifications ? <NotificationsActiveIcon onclick={() => setNotifications(false)} /> : 
                    <NotificationsNoneIcon onClick={() => setNotifications(true)} style={{marginLeft: "5px", color:"#b6adad"}}/>}

                </div>
            </div>
        </div>
    )
}

export default VideoDetails;
