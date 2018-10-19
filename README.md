# BobaWithStrangers
___

[Live Demo](https://boba-with-strangers.herokuapp.com/)

BobaWithStrangers is a meetup platform for the conversation you never have in your daily life...with strangers.

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
The code to focus on is the citiesList where it gets broken down to



<!--
Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ... -->
