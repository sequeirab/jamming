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
      this.state.playlistTracks.map(trackState => {
        if(trackState.id === track.id) {
          return;
        }
      })

      this.setState({playlistTracks: [...track]});
    }

    render() {
        return (
            <div>
            <h1>Ja<span className="highlight">mmm</span>ing</h1>
            <div className="App">
                <SearchBar />
              <div className="App-playlist">
                <SearchResults onAdd={this.addTrack} searchResults={this.state.searchResults}/>
                <Playlist name={this.state.playlistName} tracks={this.state.playlistTracks}/>
              </div>
            </div>
          </div>
            )
    }
}

export default App;