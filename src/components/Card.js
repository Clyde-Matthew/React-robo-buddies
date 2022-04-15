import React from 'react';

class Card extends React.Component {
  render() {
    return (
    <div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-3'>
        <img src={`https://robohash.org/${this.props.id}?100x100`} alt="Robots" />
    <div className='tc'>
    <h2>{this.props.name} {this.props.id}</h2>    
    <p>{this.props.username}</p>
    <p>{this.props.email}</p>    
    </div>
    </div>
    );
  }
}

export default Card;