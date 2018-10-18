export const createEvent = (event) => {
  return $.ajax({
    url: "/api/events",
    method: "POST",
    data: {
      event
    }
  })
}


export const fetchEvent = (id) => {
  return $.ajax({
    url: `/api/events/${id}`,
    method: "GET",
  })
}
