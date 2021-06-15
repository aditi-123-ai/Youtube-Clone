import React from 'react';
import Header from '../Header';
import '../../css/mainpage/VideoContainer.css';
import VideoColumn from './VideoColumn';
import {firstLayer, secondLayer, thirdLayer, fourthLayer} from '../../youtubeVideos';
import getRandom from '../../util/getRandom';


function VideoContainers() {

    const firstLayerRandom = getRandom(firstLayer, 5);
    const secondLayerRandom = getRandom(secondLayer, 5);
    const thirdLayerRandom = getRandom(thirdLayer, 5);
    const fourthLayerRandom = getRandom(fourthLayer, 5);

    const MixArray = [...firstLayer, ...secondLayer, ...thirdLayer, ...fourthLayer];

    const randomMixArray = getRandom(MixArray, 5);

    return (
        <div className="videoContainer">
            <Header />
            <div className="videoContainer__row">
                {firstLayerRandom.map(video => 
                <VideoColumn 
                key = {video?.id}
                randomViews={Math.floor(Math.random() * 1000) + 1} 
                randomMonths={Math.floor(Math.random() * +11) + 1} 
                video={video}
                />
                )}
            </div>
            <div className="videoContainer__row">
                {secondLayerRandom.map(video => 
                <VideoColumn 
                key = {video?.id}
                randomViews={Math.floor(Math.random() * 1000) + 1} 
                randomMonths={Math.floor(Math.random() * +11) + 1}  
                video={video}
                />
                )}
            </div>
            <div className="videoContainer__row">
               {thirdLayerRandom.map(video => 
               <VideoColumn 
               key = {video?.id}
               randomViews={Math.floor(Math.random() * 1000) + 1} 
               randomMonths={Math.floor(Math.random() * +11) + 1}  
               video={video}
               />
               )}
            </div>
            <div className="videoContainer__row">
               {fourthLayerRandom.map(video =>
                <VideoColumn 
                key = {video?.id}
                randomViews={Math.floor(Math.random() * 1000) + 1} 
                randomMonths={Math.floor(Math.random() * +11) + 1}  
                video={video}
                />
                )}
            </div>
            <div className="videoContainer__row">
               {randomMixArray.map(video =>
                <VideoColumn 
                key = {video?.id}
                randomViews={Math.floor(Math.random() * 1000) + 1} 
                randomMonths={Math.floor(Math.random() * +11) + 1}  
                video={video}
                />
                )}
            </div>
        </div>
    );
}

export default VideoContainers;
