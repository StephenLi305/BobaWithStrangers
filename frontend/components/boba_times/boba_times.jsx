import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Redirect } from 'react-router-dom'



class BobaTimes extends React.Component{







  render() {
    return(
      <wrapper>
        <title>
          <h1>Good Conversations</h1>
          <h3>They're hard to find.</h3>
        </title>

        <bio>
          <h2>Boba With Strangers is boba, with strangers.</h2>
          <h4>For two hours, five-ish strangers sit at a boba shop
          </h4>
        </bio>


      </wrapper>
    )
  }
}


export default BobaTimes;
