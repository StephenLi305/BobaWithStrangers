export const fetchSignUp = (user) => {
  return $.ajax({
    url: "/api/users",
    method: "POST",
    data: {
      user
    }
  })
}
export const fetchSignIn = (user) => {
  return $.ajax({
    url: "/api/session",
    method: "POST",
    data: {
      user
    }
  })
}
export const fetchLogOut = () => {
  return $.ajax({
    url: "/api/session",
    method: "DELETE"
  })
}
