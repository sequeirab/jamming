import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import './App.css';

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
        playlistName: 'Bruno',
        playlistTracks: [{
          name: 'Good for you',
          artist: 'Olivia Rodrigo',
          album: 'Sour',
          id: 1
        },
        
        ],
      }

      this.addTrack = this.addTrack.bind(this);
    }

    addTrack(track) {
      if(this.state.playlistTracks.find(trackState => trackState.id === track.id)){
        return;
      } 
        
      const arrayToUpdateState = this.state.playlistTracks;
      arrayToUpdateState.push(track);
      this.setState({playlistTracks: arrayToUpdateState});
    }

    render() {
        return (
            <div>
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
                <SearchBar />
              <div className="App-playlist">
                <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults}/>
                <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
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