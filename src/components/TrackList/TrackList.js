import React from "react";
import Tracks from '../Tracks/Tracks';

class TrackList extends React.Component {
    render() {
        
        return (
            <div className="TrackList">
               {this.props.tracks.map(track => <Tracks onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} onAdd={this.props.onAdd} track={track} key={track.id}/>)}
            </div>
        )
    }
}

export default TrackList;

/*
<div class="TrackList">
    <!-- You will add a map method that renders a set of Track components  -->
</div>
*/