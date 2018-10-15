import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


  const SEED_EVENT_DATA = [
    {
      id: 3,
      date: "Oct 13",
      time: "11:00AM",
      address: "a/A office: 825 Battery Street, San Francisco",
      host_id: 4,
      max_cap: 6,
      seat_taken: 1,
      host:{
        name: "Danny da host",
        bio: "We talking about mayo and Pokemon",
        image: "this is an image of me"
      }
    },
    {
      id: 4,
      date: "Oct 14",
      time: "11:00AM",
      address: "a/A office: 825 Battery Street, New York",
      host_id: 4,
      max_cap: 6,
      seat_taken: 1,
      host:{
        name: "Danny da second best host",
        bio: "We talking about mayo and Pokemon",
        image: "this is an image of me"
      }

    }

  ]


  const SEED_SESSION_DATA = { id: 7, name: "Danny da logged in person" };


  class Profile extends React.Component {
    constructor(){
      super();
      this.state = {events: SEED_EVENT_DATA, session: SEED_SESSION_DATA };
      this.handleSubmit = this.handleSubmit.bind(this)
    }

  welcomeHome(){
    return(
      <div>
        <h1>Welcome Home, {this.state.session.name}</h1>
        <br/>
        <p>What are you grateful for?</p>
      </div>
    );
  }

bobaTimesButton(){
  return(
    <div>
      <button onClick={this.handleSubmit}>Go to Bobatimes</button>
    </div>
  )
}

handleSubmit(){
  console.log("You're going to the Bobatimes page");
}

eventsAttending(){

  return this.state.events.map( event => {
    return(
      <div>
        <ul>
          <li>{event.date}</li>
          <li>{event.time}</li>
          <li>{event.address}</li>
          <li>{event.host.name}</li>
        </ul>
        <br/>
      </div>

    );
  });

}


  render(){
    return(

      <div>
        {this.welcomeHome()}
        <br/>
        {this.bobaTimesButton()}
        <br/>
        {this.eventsAttending()}
      </div>
    )
  }
}


export default Profile;
