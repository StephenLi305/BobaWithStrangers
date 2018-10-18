import * as APIUtil from '../util/event_api_util';

export const RECEIVE_EVENT = "RECEIVE_EVENT"


export const receiveEvent = event => ({
  type: RECEIVE_EVENT,
  event
})


export const createEvent = formEvent => dispatch => (
  APIUtil.createEvent(formEvent).then(
    event => (
    dispatch(receiveEvent(event))
    )
  )
)

export const requestEvent = id => dispatch => (
  APIUtil.fetchEvent(id).then(
    event => (
    dispatch(receiveEvent(event))
    )
  )
)

// err => (
//   dispatch(receiveErrors(err.responseJSON)))
