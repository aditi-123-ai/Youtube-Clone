import React from 'react';
import "../../css/videopage/VideoPage.css";
import Header from '../Header';
import VideoDetails from './VideoDetails';
import MoreVideo from './MoreVideos';
import { useLocation } from 'react-router-dom';
import {firstLayer, secondLayer, thirdLayer, fourthLayer} from '../../youtubeVideos';
import { useDispatch } from 'react-redux';
import { setVideo } from '../../redux/videos/videoAction';

function VideoPage() {

    const dispatch = useDispatch()

    const qurey = new URLSearchParams(useLocation().search);
    const encryptedId = qurey.get("vid");

    const videoId = atob(encryptedId)
    
    const mixedArray =[...firstLayer, ...secondLayer, ...thirdLayer, ...fourthLayer];
    
    const videoArray = mixedArray.filter(video => video.id === videoId);

    dispatch(setVideo(videoArray[0]));

    return (
        <div className="videoPage">
            <Header/>
            <div className="videoPage__container">
                <VideoDetails/>
                <MoreVideo videoId={videoId} mixedArray={mixedArray}/>
            </div>
        </div>
    )
}

export default VideoPage;
