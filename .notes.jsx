Wanting to add images?


add photo to user params
add to view (json) as well


show json builder page
@post.image.attached?
  json.image_url url_for(@post.image)
end


#add scroll feature.
const seedData = [

  {city_name: "San Francisco",
  event_data:[
    { id: 1,
      date: "Oct 13",
      time: "11:00AM",
      address: "a/A office: 825 Battery Street, San Francisco",
      host_id: 4,
      max_cap: 6,
      seat_taken: 1
    },
    { id: 2,
      date: "Oct 13",
      time: "11:00AM",
      address: "a/A office: 825 Battery Street, San Francisco",
      host_id: 4,
      max_cap: 6,
      seat_taken: 1
    },
    { id: 3,
      date: "Oct 13",
      time: "11:00AM",
      address: "a/A office: 825 Battery Street, San Francisco",
      host_id: 4,
      max_cap: 6,
      seat_taken: 1
    }
  ]},
  {city_name: "Los Angeles",
  event_data:[
    { id: 1,
      date: "Oct 13",
      time: "11:00AM",
      address: "a/A office: 825 Battery Street, Los Angeles",
      host_id: 4,
      max_cap: 6,
      seat_taken: 1
    },
    { id: 2,
      date: "Oct 13",
      time: "11:00AM",
      address: "a/A office: 825 Battery Street, Los Angeles",
      host_id: 4,
      max_cap: 6,
      seat_taken: 1
    },
    { id: 3,
      date: "Oct 13",
      time: "11:00AM",
      address: "a/A office: 825 Battery Street, Los Angeles",
      host_id: 4,
      max_cap: 6,
      seat_taken: 1
    }
  ]},
  {city_name: "New York",
  event_data:[
    { id: 1,
      date: "Oct 13",
      time: "11:00AM",
      address: "a/A office: 825 Battery Street, New York",
      host_id: 4,
      max_cap: 6,
      seat_taken: 1
    },
    { id: 2,
      date: "Oct 13",
      time: "11:00AM",
      address: "a/A office: 825 Battery Street, New York",
      host_id: 4,
      max_cap: 6,
      seat_taken: 1
    },
    { id: 3,
      date: "Oct 13",
      time: "11:00AM",
      address: "a/A office: 825 Battery Street, New York",
      host_id: 4,
      max_cap: 6,
      seat_taken: 1
    }
  ]}
]

const SeedEventData =
const SEED_EVENT_DATA = [
  {
    id: 3,
    date: "Oct 13",
    time: "11:00AM",
    address: "a/A office: 825 Battery Street, San Francisco",
    host_id: 4,
    max_cap: 6,
    seat_taken: 1,
    host:{
      name: "Danny da host",
      bio: "We talking about mayo and Pokemon",
      image: "this is an image of me"
    },

    id: 4,
    date: "Oct 14",
    time: "11:00AM",
    address: "a/A office: 825 Battery Street, New York",
    host_id: 4,
    max_cap: 6,
    seat_taken: 1,
    host:{
      name: "Danny da second best host",
      bio: "We talking about mayo and Pokemon",
      image: "this is an image of me"
    }
  };

]


const SeedSessionData = { id: 7 }
