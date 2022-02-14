import React from "react";
import './Track.css';

export const Track = (props) => {

    const { track, onAdd, onRemove, isRemoval } = props;

    const addTrack = () => {
        onAdd(track);
    }

    const removeTrack = () => {
        onRemove(track);
    }

    const render = () => {
        if(isRemoval){
            return  <button className="Track-action" onClick={removeTrack} >-</button>
        } else {
            return <button className="Track-action" onClick={addTrack}>+</button>
        }
    }

    return(
        <div className="Track">
            <div className="Track-information">
                <h3> {track.name} </h3>
                <p> {track.artist} {track.album} </p>
            </div>
            {render()}
        </div>
    )
}