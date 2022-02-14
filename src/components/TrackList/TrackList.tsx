import React from "react";
import {Track} from '../Track/Track';
import './TrackList.css';

export const TrackList = (props) => {
    
    const { tracks, onAdd, onRemove, isRemoval } = props;

    let renderedTracks = tracks.map((track, index) => {
        return <Track 
         key={index} 
         track={track} 
         onAdd={onAdd}
         onRemove={onRemove}
         isRemoval={isRemoval} />
     })

    return(
        <div className="TrackList">
            {renderedTracks}
        </div>
    )
}