export const createEvent = (event) => {
  return $.ajax({
    url: "/api/events",
    method: "POST",
    data: {
      event
    }
  })
}
