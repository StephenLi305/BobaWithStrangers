# BobaWithStrangers
___

[Live Demo](https://boba-with-strangers.herokuapp.com/)

BobaWithStrangers is a meetup platform for the conversation you never have in your daily life...with strangers and boba!

It makes use of Rails and PostgreSQL on the backend and React.js/Redux on the frontend. This project was build in less than 10 days and I plan to continue to add more features over time.

# Features
___
* User Authorization from frontend to backend with BCrypt password hashing

* Featured index page with a list of cities and what events there are to attend

* User can host an event by creating and detiling date, time, location, and go over topics they will love to talk about

* Hosting Users can feature images

* User can view/join events and read on a host's bio and image

* User has dashboard that list all events attending
___

## Organization and mapping

Creating the index page to render all current events had an interesting twist which included having to create two maps, one going vertically for the cities and one going horizontally, for each event. On top of that, I had to come up with a was to keep the card with just the city name separate from the rest of the events.

### BobaTimes Index Page with Jumping Anchor

![](https://i.imgur.com/cs6S85E.png)
```js
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
      </div>
    )
  }
}
```
The code to focus on is the citiesList where it gets broken down multiple times.
Below is the code to map over each City:


```js
citiesList(){
  const mapCities =
   data.map( city => {

    const city_tag = city.city_name.toLowerCase().replace(' ', '_')
        // take the city name and strip it to lower case and replace space with underscores
        //add id to city to allow us to jump to it with our index
    return(
       <ul className="citys-event-card-container" key={city.city_name.length} id={city_tag}>
         <li className="city-event-card">{city.city_name}
         <br/>
         <span role="img" aria-label="pointer">👉🏽</span> </li>
         <li>{this.events(city)}</li>
         // another function to map over EACH event in EACH city
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
      // mapping over EACH event in EACH city
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
```

One of the sweet features on this page is jumping from the top of the page to a specific city with a simple click. Here is the code and I can go over what's happening.

```js

  window.location.hash = window.decodeURIComponent(window.location.hash);
    //window.location.has presents us the URL on the browser
  const scrollToAnchor = () => {
    const hashParts = window.location.hash.split('#');
      // we take the URL with the "#" symbol and slice it to take the last slice(the city when we click the city from the city list creates it)
    if (hashParts.length > 2) {
      const hash = hashParts.slice(-1)[0];
      document.querySelector(`#${hash}`).scrollIntoView();
      //takes to to the specific part of the page that matches the given "#"(ex. https://boba-with-strangers.herokuapp.com/#/boba_times/#new_york)
    }
  };
  scrollToAnchor();
  window.onhashchange = scrollToAnchor;
```
___

### BobaTimes Create Event Form and Direct to Event Page

One of the sweet features I had to figure out with some help was how to create an event, and then send my user to that page. Redirects didn't quite work. It took a lot more logic than I thought where you can see here:

```js
constructor(props){
  super(props);
  this.state = {
    ...
    eventId: 0,
    toEventPage: false
  };
// I needed to add some logic to include the eventId AND a Boolean that will check if this event exists.

updateState(res) {
  ...
  this.setState({eventId: res.event.id})
  this.setState({toEventPage: true})
}
//Once I create the event, I will update my state to change my boolen to true and store the eventId

render(){
  const { toEventPage, eventId } = this.state;
  if (toEventPage) {
    return <Redirect to={`/boba_times/${eventId}`} />
  }
  ...
}
// In the render, I will have a new trigger with my if statement since my boolean is now true, and will redirect to my event page with the eventId
```

It will go from this host an event page:

![](https://i.imgur.com/FJpbBB4.png)

Straight to the event page!

![](https://i.imgur.com/WTeY5Ln.png)

___


# Product Design

The goal was to make this website simple and elegant and given the timeframe. I wanted to have a mix of good functionality as well as pleasant User Interface.

The thought process in building it was from the front back. Right after building the user authorization, I went with building the frontend and designing everything with seed data to give myself a visual of how everything will look. This also allowed me to see exactly what data I needed in the frontend. When I knew what data I needed, it helped with building my tables in the back end. The goal will be to eventually connect all my backend data to my frontend and remove my seed data.

The last design feature I made was with the images and how I decided not to store them on my backend. Instead, I wanted to keep it simple as majority of people will already have social media and images uploaded to the internet. This simple design would just ask the user to copy the image address and paste it into the image slot of the create form.

# Additional Resources
___
[Database Schema](https://github.com/StephenLi305/BobaWithStrangers/wiki/Schema)

[API Endpoints](https://github.com/StephenLi305/BobaWithStrangers/wiki/Backend-Routes)

___

# Future Functionality

* Google Maps API
* Joining Event
* Am I A Robot Sign Up
