import React from 'react';
import { useHistory } from 'react-router';
import "../../css/videopage/SearchContainer.css";

function SearchContainer({searchedVideos, setSearchValue}) {
//51:48
    const history = useHistory();

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

    const goToVideo = (search) => {

        const encryptedId = btoa(search.item.id)

        history.push(`/video?vid=${encryptedId}`);
        setSearchValue("");
    }

    return (
        <div className="searchContainer">
            {searchedVideos.map(search => <p onClick={() => goToVideo(search)} 
            key={search.item.id}>{truncate(search.item.title, 40)}</p>)}
            <span>Related Search Result</span>
        </div>
    );
}

export default SearchContainer;
