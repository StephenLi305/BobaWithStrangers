import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Redirect } from 'react-router-dom'



class BobaTimes extends React.Component{

constructor(props){
  super(props);

}


componentDidMount(){
  window.location.hash = window.decodeURIComponent(window.location.hash);
  const scrollToAnchor = () => {
    const hashParts = window.location.hash.split('#');
    if (hashParts.length > 2) {
      const hash = hashParts.slice(-1)[0];
      document.querySelector(`#${hash}`).scrollIntoView();
    }
  };
  scrollToAnchor();
  window.onhashchange = scrollToAnchor;
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
    <div className="boba-times-body-container">
      <div className="boba-times-body">
        <h4>Boba With Strangers is boba, with strangers.</h4>

        <p>For two hours, five-ish strangers sit at a boba shop
        (or some other public place) with a host to talk. Not about
         anything in particular. The circumstances are unusual, but
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
          <li>
          <Link to="/boba_times/#san_francisco">SF/BAY AREA</Link>
          </li>
          <li>
          <Link to="/boba_times/#los_angeles">LOS ANGELES</Link>
          </li>
          <li>
          <Link to="/boba_times/#new_york">NEW YORK</Link>
          </li>

        </ul>
      </div>
    </div>
  )
}
// SF/BAY AREA

citiesList(){
  const seedData = [

    {city_name: "San Francisco",
    event_data:[
      { id: 134,
        date: "12/1/2018",
        time: "16:00",
        address: "DWebbz's Shop @ 123 BlueBird Street",
        host_image: "https://i.imgur.com/nYxqinx.jpg",
        max_cap: 4,
        seat_taken: 1
      },
      { id: 135,
        date: "12/25/2018",
        time: "15:00",
        address: "Ronil's House of Boba @ 823 Battery Street",
        host_image: "https://i.imgur.com/SXA3Ihy.jpg",
        max_cap: 6,
        seat_taken: 1
      },
      { id: 136,
        date: "12/28/2018",
        time: "16:00",
        address: "Starbucks @ 71 Battery Street",
        host_image: "https://i.imgur.com/7xEGbPX.jpg",
        max_cap: 5,
        seat_taken: 1
      },

    ]},
    {city_name: "Los Angeles",
    event_data:[
      { id: 137,
        date: "12/4/2018",
        time: "11:00",
        address: "Elliot's shop @ 435 Fun street",
        host_image: "https://i.imgur.com/sbRXPj8.jpg",
        max_cap: 5,
        seat_taken: 1
      },

      { id: 139,
        date: "11/30/2018",
        time: "14:00",
        address: "Lizzle @ 196 Franchise Street",
        host_image: "https://i.imgur.com/y5jTA0P.jpg",
        max_cap: 6,
        seat_taken: 1
      },
      { id: 140,
        date: "12/31/2018",
        time: "20:00",
        address: "TPUMPS @ 572 Irving Street",
        host_image: "https://i.imgur.com/ywAiTk1.jpg",
        max_cap: 6,
        seat_taken: 1
      }
    ]},
    {city_name: "New York",
    event_data:[
      { id: 141,
        date: "12/14/2018",
        time: "15:00",
        address: "JKen's House of Boba @ 762 Geary Street",
        host_image: "https://i.imgur.com/CWbTORL.jpg",
        max_cap: 4,
        seat_taken: 1
      }
    ]}

  ]


   const mapCities =
    seedData.map( city => {

      const city_tag = city.city_name.toLowerCase().replace(' ', '_')
      return(
        <ul className="citys-event-card-container" key={city.city_name.length} id={city_tag}>
          <li className="city-event-card">{city.city_name}
          <br/>
          <span role="img" aria-label="pointer">👉🏽</span> </li>
          <li>{this.events(city)}</li>
        </ul>
      )
    })

  return (
    <div className="widget-container">
      {mapCities}
    </div>
  )
 }


events(city){

 const citydata =
    city.event_data.map( detail => {
      return(
        <ul key={detail.id}>
          <div className="card-info-box">
            <div className="card-date-time">
              <li>{detail.date}</li>
              <li>{detail.time}</li>
            </div>
            <li className="card-host-image"><img src={detail.host_image} /></li>
          </div>
          <li className="card-address">{detail.address}</li>
          <li className="card-seats">{detail.max_cap - detail.seat_taken} seats left!</li>
          <Link to={`/boba_times/${detail.id}`}>
            <li className="card-button">check it out</li>
          </Link>
          <br/>
        </ul>
      )
    })

  return (
    <div className="event-card-container">
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
