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
  const seedData = [

    {city_name: "San Francisco",
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
    ]},
    {city_name: "Los Angeles",
    event_data:[
      { id: 1,
        date: "Oct 13",
        time: "11:00AM",
        address: "a/A office: 825 Battery Street, Los Angeles",
        host_id: 4,
        max_cap: 6,
        seat_taken: 1
      },
      { id: 2,
        date: "Oct 13",
        time: "11:00AM",
        address: "a/A office: 825 Battery Street, Los Angeles",
        host_id: 4,
        max_cap: 6,
        seat_taken: 1
      },
      { id: 3,
        date: "Oct 13",
        time: "11:00AM",
        address: "a/A office: 825 Battery Street, Los Angeles",
        host_id: 4,
        max_cap: 6,
        seat_taken: 1
      }
    ]},
    {city_name: "New York",
    event_data:[
      { id: 1,
        date: "Oct 13",
        time: "11:00AM",
        address: "a/A office: 825 Battery Street, New York",
        host_id: 4,
        max_cap: 6,
        seat_taken: 1
      },
      { id: 2,
        date: "Oct 13",
        time: "11:00AM",
        address: "a/A office: 825 Battery Street, New York",
        host_id: 4,
        max_cap: 6,
        seat_taken: 1
      },
      { id: 3,
        date: "Oct 13",
        time: "11:00AM",
        address: "a/A office: 825 Battery Street, New York",
        host_id: 4,
        max_cap: 6,
        seat_taken: 1
      }
    ]}
  ]


   const mapCities =
    seedData.map( city => {

      return(
        <div className="citys-container">
          <ul>
            <li>{city.city_name}</li>
            <li>{this.events(city)}</li>
          </ul>
        </div>
      )
    })

  return (
    <div>
      {mapCities}
    </div>
  )
 }


events(city){
  console.log(city)
  console.log(city.event_data)

  const citydata =
    city.event_data.map( detail => {
      return(

        <div key={detail.id}>
          <ul>
            <li>{detail.date}</li>
            <li>{detail.time}</li>
            <li>{detail.address}</li>
            <li>Host by : {detail.host_id}</li>
            <li>{detail.max_cap - detail.seat_taken} seats left</li>
          </ul>
        <br/>
        </div>
      )
    })

  return (
    <div>
      {citydata}
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
