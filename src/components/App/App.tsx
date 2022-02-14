import './App.css';
import React, { useState } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';
import { SearchResults } from '../SearchResults/SearchResults';
import { Playlist } from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

export function App() {
  const [term, setTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = (term) => {
    Spotify.getAccessToken();
    Spotify.search(term).then((results) => {
      setSearchResults(results);
    })
  }

  const addTrack = (track) => {
    if(playlistTracks.find(song => song.id === track.id))
    { return; }

    setPlaylistTracks([...playlistTracks, track])
  }

  const removeTrack = (track) => {
    setPlaylistTracks((prev) => {
      return prev.filter((item) => item !== track);
    });
  }

  const updatePlaylistName = (name) => {
    setPlaylistName(name)
  }

  const savePlaylist = () => {
    let trackURIs = playlistTracks.map(track => track.uri);

    Spotify.savePlaylist(playlistName, trackURIs);

    setTerm('');
    setPlaylistName('New Playlist');
    setPlaylistTracks([]);
    setSearchResults([]);
  }

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar 
           onSearch={search} 
           term={term} 
           setTerm={setTerm} 
          />
          <div className="App-playlist">
            <SearchResults 
              searchResults={searchResults} 
              onAdd={addTrack}
            />
             <Playlist 
               playlistName={playlistName} 
               playlistTracks={playlistTracks} 
               onRemove={removeTrack} 
               onNameChange={updatePlaylistName}
               onSave={savePlaylist}
           />
          </div>
        </div>
    </div>
  );
}