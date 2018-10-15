import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Redirect } from 'react-router-dom';




const SEED_EVENT_DATA =
  {
    id: 3,
    date: "Oct 13",
    time: "11:00AM",
    address: "a/A office: 825 Battery Street, New York",
    host_id: 4,
    max_cap: 6,
    seat_taken: 1,
    host:{
      name: "Danny da host",
      bio: "We talking about mayo and Pokemon",
      image: "this is an image of me"
    }
  };


const SEED_SESSION_DATA = { id: 7, name: "Danny da logged in person" };





class BobaTimesEvent extends React.Component{
  constructor(props){
    super(props);
    this.state = {event: SEED_EVENT_DATA, session: SEED_SESSION_DATA};
    this.handleSubmit = this.handleSubmit.bind(this);
  }


eventData(){
  return(
    <div>
      <ul>
        <li>{this.state.event.date}</li>
        <li>{this.state.event.time}</li>
        <li>This is the address: {this.state.event.address}</li>
        <li>There are {this.state.event.max_cap - this.state.event.seat_taken} seats left.</li>
      </ul>
    </div>
  );
}


signUpButton(){
  return(
    <div>
      <button onClick={this.handleSubmit}>SIGN ME UP</button>
    </div>
  );
}

handleSubmit(){
  //post request that creates join table between this.state.session.id and this.state.event.id
  console.log("Signed Up!");
}

hostBio(){
  return(
    <div>
      <ul>
        <li>Hi, my name is {this.state.event.host.name}.</li>
        <br/>
        <li>This is how I look! ({this.state.event.host.image}).</li>
        <br/>
        <li>{this.state.event.host.bio}.</li>
      </ul>
    </div>
  );
}



render(){
  return(
    //Event information
    <div>
      <div>
        {this.eventData()}
      </div>
      <br/>
      <div>
        {this.signUpButton()}
      </div>
      <br/>
      <div>
        {this.hostBio()}
      </div>
    </div>
  );
  }
}
export default BobaTimesEvent;
