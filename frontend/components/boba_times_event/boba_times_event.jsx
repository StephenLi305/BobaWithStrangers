import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { requestEvent } from '../../actions/event_actions'
import Time from 'react-time-format'


const mapStateToProps = (state, ownProps) => {
  return({
    thisEvent: state.entities.events[ownProps.match.params.eventId],
    currentUser: state.entities.users[state.session.id]
  })
}

const mapDispatchToProps = dispatch => {
  return({
    requestEvent: (id) => dispatch(requestEvent(id))
  })
}


const SEED_EVENT_DATA =
  {
    id: 3,
    date: "Oct 13",
    time: "11:00AM",
    address: "a/A office: 825 Battery Street",
    city: "New York City",
    max_cap: 6,
    seat_taken: 1,
    host:{
      name: "DWebz da host",
      bio: "We talking about mayo and Pokemon",
      host_image: "https://i.imgur.com/nYxqinx.jpg",
    }
  };

const SEED_SESSION_DATA = { id: 7, name: "Danny da logged in person" };





class BobaTimesEvent extends React.Component{
  constructor(props){
    super(props);

    this.state = {event: SEED_EVENT_DATA, session: SEED_SESSION_DATA,};
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.props.requestEvent(this.props.match.params.eventId)

  }



componentDidMount(){

  this.props.requestEvent(this.props.match.params.eventId)
}


eventData(){
  return(
    <div className="boba-times-event-data">
      <ul>
        <li className="event-card-host">Join {this.props.currentUser.name} for Boba Time</li>
        <li className="event-card-datetime">📅 <Time value={this.props.thisEvent.date} format="MM/DD/YYYY"/></li>
        <li className="event-card-datetime">⏰ <Time value={this.props.thisEvent.time} format="HH:MM"/></li>
        <li className="event-card-location">📍 {this.props.thisEvent.address}</li>
        <li className="event-card-location">🗺 {this.props.thisEvent.city}</li>
        <li className="event-card-seats">There are {this.props.thisEvent.max_cap - this.state.event.seat_taken} seats left!</li>
      </ul>
    </div>
  );
}


signUpButton(){
  return(
    <div className="boba-times-event-signup">
      <button onClick={this.handleSubmit}>SIGN ME UP</button>
    </div>
  );
}

handleSubmit(){
  //post request that creates join table between this.state.session.id and this.state.event.id
  console.log(this.props.currentUser);
  console.log("Signed Up!");
}

hostBio(){
  return(
    <div className="boba-times-event-host">
      <ul>
        <li className="boba-times-event-host-title">Meet your host, {this.props.currentUser.name}.</li>
        <li className="event-card-location">(It'll be helpful to know what they look like when you're looking for a group of confused strangers at the boba shop.).</li>
        <li className="boba-times-event-host-image"><img src={this.props.currentUser.image} /></li>
        <br/>
        <li className="boba-times-event-bio">
        <h1>What's my story and what we might talk about?</h1>
        {this.props.currentUser.bio}.</li>
      </ul>
    </div>
  );
}



render(){
  if(!this.props.thisEvent){
    return null
  }
  return(
    //Event information
    <div className="boba-times-event-page-background">
      <div className="boba-times-event-container">
        <div className="boba-times-event-left">
          {this.eventData()}
          <br/>
          {this.signUpButton()}
        </div>
        <div className="boba-times-event-right">
          {this.hostBio()}
        </div>
      </div>
    </div>
  );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BobaTimesEvent);
