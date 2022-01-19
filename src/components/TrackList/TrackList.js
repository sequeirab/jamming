import React from "react";
import Tracks from '../Tracks/Tracks';

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                <Tracks onAdd={this.props.onAdd} isRemoval={this.props.isRemoval} />
                <ul>
                {this.props.tracks.map(track => {
                    return(
                        <li key={track.id}>{track.name} <p>{track.album} | {track.artist}</p></li>
                        
                    )
                })}
                </ul>
            </div>
        )
    }
}

export default TrackList;