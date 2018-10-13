import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Redirect } from 'react-router-dom'



class BobaTimes extends React.Component{

constructor(props){
  super(props);
}

title(){
  return(
    <div className="boba-times-title">
      <div className="boba-times-title-text">
        <h3>Good Conversations</h3>
        <p>They're hard to find.</p>
      </div>
    </div>
  )
}

body(){
  return(
    <div className="boba-times-body">
      <div className="boba-times-body">
        <h4>Boba With Strangers is boba, with strangers.</h4>

        <p>For two hours, five-ish strangers sit at a boba shop
        (or some other public place) with a host to talk. Not about
         anything in particular. The circumstances are unsual, but
         that's the point.
         <br/>
         <br/>
         If none of these work for you, you can come back next month to see the
         boba times. You can create an event here!
        </p>
      </div>
    </div>
  )
}

cityListIndex(){
  return(
    <div className="city-list-container">
      <div className="city-list-title">
        <p>Jump To Your City's Boba Time!</p>
      </div>
      <div className="city-list">
        <ul className="cities">
          <li>SF/BAY AREA</li>
          <li>LONDON</li>
          <li>NEW YORK CITY</li>
          <li>LOS ANGELES</li>
        </ul>
      </div>
    </div>
  )
}

citiesList(){



  return(
    <div className="SF-List">
      <ul>
        <li>San Francisco/Bay Area</li>
        <li>{this.events()}</li>
      </ul>
    </div>
  )
}


events(){
    const tannca = {
      city: "San Francisco",
      event_data:[
        { id: 1,
          date: "Oct 13",
          time: "11:00AM",
          address: "a/A office: 825 Battery Street, San Francisco",
          host_id: 4,
          max_cap: 6,
          seat_taken: 1
        },
        { id: 2,
          date: "Oct 13",
          time: "11:00AM",
          address: "a/A office: 825 Battery Street, San Francisco",
          host_id: 4,
          max_cap: 6,
          seat_taken: 1
        },
        { id: 3,
          date: "Oct 13",
          time: "11:00AM",
          address: "a/A office: 825 Battery Street, San Francisco",
          host_id: 4,
          max_cap: 6,
          seat_taken: 1
        }
      ]
    }

    const mapovertannca =
      tannca.event_data.map( event => {
        return(
          <div className="SF-event" key = {event.id}>
            <ul>
              <li>{event.date}</li>
              <li>{event.time}</li>
              <li>{event.address}</li>
              <li>host: {event.host_id}</li>
              <li>{event.max_cap - event.seat_taken} seat left</li>
            </ul>
          </div>
        )
      })


  return (
    <div>
      {mapovertannca}
    </div>
  )
}


  render() {
    return(

      <div className="boba-times">
        {this.title()}
        {this.body()}
        <br/>
        <br/>
        {this.cityListIndex()}
        <br/>
        <br/>
        {this.citiesList()}
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    )
  }
}


export default BobaTimes;
