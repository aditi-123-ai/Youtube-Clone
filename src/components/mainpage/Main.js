import React, {useEffect} from 'react';
import "../../css/mainpage/Main.css";
import Sidebar from './Sidebar';
import VideoContainers from './VideoContainers';


function Main() {
//1:09:57

    useEffect(() => {
        document.title = "Youtube Clone";
    }, [])

    return (
        <div className="main">
           <Sidebar/>
           <VideoContainers/>
        </div>
    );
}

export default Main;
