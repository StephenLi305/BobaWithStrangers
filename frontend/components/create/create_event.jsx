import React from 'react';
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom';
import { createEvent } from '../../actions/event_actions';
import { updateUser } from '../../actions/session_actions'


const mapStateToProps = state => ({
  userId: state.session.id
  })

const mapDispatchToProps = dispatch => ({
  createEvent: (event) => dispatch(createEvent(event)),
  updateUser: (user, userId) => dispatch(updateUser(user, userId))
  })




class CreateEvent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      host_id:'',
      date:'',
      time:'',
      boba_shop:"",
      address:'',
      city:'San Francisco',
      max_cap:'3',
      bio:'',
      image:'https://i.imgur.com/TsnWxhl.jpg',
      eventId: 0,
      toEventPage: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  handleSubmit(e){

    e.preventDefault()
    // const bio = this.state.bio
    // const image = this.state.image
    // const user = {bio, image}
    // const userId = this.state.host_id
    console.log("handle submit");
    // debugger
    this.props.createEvent(this.state)
    .then( this.props.updateUser(this.state, this.props.userId))
    .then( (res) => this.updateState(res))
  }

  updateState(res) {
    this.setState({eventId: res.event.id})
    this.setState({toEventPage: true})
  }

  update(field){
    return e => this.setState({
        [field]:e.target.value
    });
  }

  render(){
    const { toEventPage, eventId } = this.state;
    if (toEventPage) {
      return <Redirect to={`/boba_times/${eventId}`} />
    }
    return(
      <div className="create-event-container">
        <form onSubmit={this.handleSubmit} className="create-event-form-box" >
          <h1 className="create-event-header">Host a Boba Event</h1>
          <p className="create-event-text">Fill out this form to host your own boba event!</p>
            <div className="create-event-form">

              <label>
                <h1 className="create-event-field-text">
                Date of Boba Event!</h1>
                <input type="date"
                value={this.state.date}
                onChange={this.update('date')}
                className="create-event-field"
                required
                />
              </label><br />

              <label>
                <h1 className="create-event-field-text">
                Time of Boba Event!</h1>
                <input type="time"
                value={this.state.time}
                onChange={this.update('time')}
                className="create-event-field"
                required
                />
              </label><br />

              <label>
                <h1 className="create-event-field-text">
                Boba Shop:</h1>
                <input type="text"
                value={this.state.boba_shop}
                placeholder="Boba Shop Name"
                onChange={this.update('boba_shop')}
                className="create-event-field"
                required
                />
              </label><br/>

              <label>
                <h1 className="create-event-field-text">
                Address:</h1>
                <input type="text"
                value={this.state.address}
                placeholder="Address"
                onChange={this.update('address')}
                className="create-event-field"
                required
                />
              </label><br/>


              <h1 className="create-event-field-text">
              City:</h1>
              <select onChange={this.update('city')} className="create-city-selector">
                <option value="San Francisco" >San Francisco</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="New York">New York</option>
              </select><br/>

              <h1 className="create-event-field-text">
              Max Number of Seats:</h1>
              <select onChange={this.update('max_cap')} className="create-city-selector">
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
              </select><br/>

              <label>
              <h1 className="create-event-field-text">
              Write about YOU!</h1>
              <textarea row="5" cols="50"
              className="create-event-field-bio"
              value={this.state.bio}
              onChange={this.update('bio')}
              placeholder="Write a quick bio about yourself, how you got here, and some topics you might talk about as a host!"
              required>
              </textarea>
              </label><br/>

              <label>
              <h1 className="create-event-field-text">
              Image URL: (or use this defult image!)
              </h1>
              <input type="text"
              value={this.state.image}
              placeholder="Paste a IMAGE URL of yourself!"
              onChange={this.update('image')}
              className="create-event-field"
              // value={"https://i.imgur.com/TsnWxhl.jpg"}
              required
              />
              </label><br/>


              <input className="create-event-submit"
              type="submit"
              value="Host an Event!"/>


            </div>
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
