import React, { Component } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import './JokeList.css';
import Joke from './Joke';

class JokeList extends Component {
  static deafultProps = {
    numJokesToGet: 10
  };
  constructor(props) {
    super( props );
    this.state = {
      jokes: JSON.parse(window.localStorage.getItem('jokes') || '[]' )
    };
  }
  async componentDidMount() {
    let jokes = [];
    while ( jokes.length < this.props.numJokesToGet ) {
      //if we use while loop, then we don't have to call this.setState
      //over and over again! 
      let response = await axios.get( 'https://icanhazdadjoke.com/',
        { headers: { Accept: 'application/json' } } );
      //form API, get only json format 
      jokes.push( { id: uuidv4(), text: response.data.joke, votes: 0 } );
      //pushing the data fetched from API into the empty array in jokes
       }    
    this.setState( { jokes: jokes } );
    window.localStorage.setItem( 'jokes', JSON.stringify( jokes ) );
  }
  handleVote( id, delta ) {
    this.setState( st => ( {
      jokes: st.jokes.map( j =>
        j.id === id ? { ...j, votes: j.votes + delta } : j )
    } )
    );
  }
  render() { 
    return ( 
      <div className='JokeList'>
        <div className='JokeList-sidebar'>
          <h1 className='JokeList-title'>
            <span>Dad</span> Jokes
          </h1>
          <img
src='https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2
-433a-bfc8-23d9c99b3647.svg' alt='laughing' />
          <button className='JokeList-getMore'>New Jokes</button>
        </div>
        
        <div className='JokeList-jokes'>
          {this.state.jokes.map( j =>(
            <Joke
              key={j.id}
              votes={j.votes}
              text={j.text}
              upvote={()=> this.handleVote(j.id, 1)}
              downvote={()=> this.handleVote(j.id, -1)}
            />
          ) )}
        </div>
      </div>
     );
  }
}
 
export default JokeList ;