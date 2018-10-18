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
      <button onClick={this.handleSubmit}>Find another boba time</button>
    </div>
  )
}

handleSubmit(){
  console.log("You're going to the Bobatimes page");
}

cancel(){
  return(
    <div>
      <button onClick={console.log("Cancel this Bobatime")}>Cancel my Boba time spot</button>
    </div>
  )
}

eventsAttending(){
  return this.state.events.map( event => {
    return(
      <div key={event.id} className="profile-boba-event">
        <ul>
          <li className="date">{event.date}</li>
          <li className="time">{event.time}</li>
          <li className="address">{event.address}</li>
          <li className="host">Hosted by {event.host.name}</li>
          {this.cancel()}
        </ul>
        <br/>
      </div>

    );
  });

}


  render(){
    return(

      <div className="profile-container">
        <div className="profile-left">
          {this.welcomeHome()}
          <br/>
          {this.bobaTimesButton()}
        </div>

        <div className="profile-right">
          <h1>Boba Times you're attending</h1>
          {this.eventsAttending()}
        </div>

      </div>
    )
  }
}


export default Profile;
