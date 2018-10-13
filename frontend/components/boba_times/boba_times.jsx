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




  render() {
    return(

      <div className="boba-times">
        {this.title()}

        <div>
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
}


export default BobaTimes;
