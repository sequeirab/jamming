import React from "react";
import './App.css';
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        searchResults:[{
          name: 'Tiny Dancer',
          artist: 'Elton John',
          album: 'Madman Across The Water',
          id: 3
        },
        {
          name: 'Tiny Dancer',
          artist: 'Tim McGraw',
          album: 'Love Story',
          id: 4
        },
        {
          name: 'Tiny Dancer',
          artist: 'Rockabye Baby!',
          album: 'Lullaby Renditions of Elton John',
          id: 5
        },
        ],
        playlistName: '',
        playlistTracks: [{
          name: 'Good for you',
          artist: 'Olivia Rodrigo',
          album: 'Sour',
          id: 1
        },
        
        ],
      }

      this.addTrack = this.addTrack.bind(this);
      this.removeTrack = this.removeTrack.bind(this);
      this.updatePlaylistName = this.updatePlaylistName.bind(this);
      this.savePlaylist = this.savePlaylist.bind(this);
      this.search = this.search.bind(this);
    }

    addTrack(track) {
      if(this.state.playlistTracks.find(trackState => trackState.id === track.id)){
        return;
      } 
        
      const arrayToUpdateState = this.state.playlistTracks;
      arrayToUpdateState.push(track);
      this.setState({playlistTracks: arrayToUpdateState});
    }

    removeTrack(track) {
      let arrayToUpdateState = this.state.playlistTracks;

      arrayToUpdateState = arrayToUpdateState.filter(trackState => trackState.id !== track.id);
      

      this.setState({playlistTracks: arrayToUpdateState});
    }

    updatePlaylistName(name) {
      this.setState({playlistName: name});
    }

    savePlaylist() {
      const trackURIs = this.state.playlistTracks.map(track => track.uri);
    }

    search(term) {
      Spotify.search(term).then(searchResults => this.setState({searchResults: searchResults}))
      
    }
    render() {
      
        return (
            <div>
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
                <SearchBar onSearch={this.search} />
              <div className="App-playlist">
                <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults}/>
                <Playlist onSave={this.savePlaylist} updatePlaylistName={this.updatePlaylistName} onRemove={this.removeTrack} playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
              </div>
            </div>
          </div>
            )
    }
}

export default App;

/*
<div>
  <h1>Ja<span class="highlight">mmm</span>ing</h1>
  <div class="App">
    <!-- Add a SearchBar component -->
    <div class="App-playlist">
      <!-- Add a SearchResults component -->
      <!-- Add a Playlist component -->
    </div>
  </div>
</div>
*/