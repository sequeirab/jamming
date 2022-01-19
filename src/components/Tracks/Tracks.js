import React from 'react';

class Tracks extends React.Component {
    constructor(props) {
      super(props);

      this.addTrack = this.addTrack.bind(this);
    }


    renderAction() {
        if(this.props.isRemoval) {
          return <button className='Track-action'>-</button>
        } else {
          return <button onClick={this.addTrack} className='Track-action'>+</button>
        }
    }

    addTrack() {
      this.props.onAdd(this.props.track)
    }

    render() {
        return (<div class="Track">
        <div className="Track-information">
          <h3></h3>
          <p></p>
        </div>
        {this.renderAction()}
      </div>)
    }
}

export default Tracks;