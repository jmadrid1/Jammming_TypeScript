import React from "react";
import './Playlist.css';
import  {TrackList} from '../TrackList/TrackList';

export const Playlist = (props) =>{

    const { onNameChange, playlistName, playlistTracks, onRemove, onSave } = props;

    const handleNameChange = (e) => {
        let newName = e.target.value;
        onNameChange(newName);
    }

    return(
        <div className="Playlist">
            <input value={playlistName} defaultValue={'New Playlist'} onChange={handleNameChange} />
            <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
            <button className="Playlist-save" onClick={onSave}>SAVE TO SPOTIFY</button>
        </div>
    );
}