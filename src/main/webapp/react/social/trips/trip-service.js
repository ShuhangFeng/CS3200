

// TODO: declare URL where server listens for HTTP requests
const TRIPS_URL = "http://localhost:8080/api/trips"



// TODO: retrieve all Trips from the server
export const findAllTrips = () =>     fetch(TRIPS_URL)
.then(response => response.json())


// TODO: retrieve a single Trip by their ID
export const findTripById = (id) =>
    fetch(`${TRIPS_URL}/${id}`)
    .then(response => response.json())


// TODO: delete a Trip by their ID
export const deleteTrip = (id) =>
    fetch(`${TRIPS_URL}/${id}`, {
      method: "DELETE"
    })


// TODO: create a new Trip
export const createTrip = (Trip) =>
    fetch(TRIPS_URL, {
      method: 'POST',
      body: JSON.stringify(Trip),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())


// TODO: update a Trip by their ID
export const updateTrip = (id, Trip) =>
    fetch(`${TRIPS_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(Trip),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())

export const getDestinationRecords = (id) =>
    window.location.replace(`${TRIPS_URL}/${id}/users`)

export const getUserRecords = (id) =>
    window.location.replace(`${TRIPS_URL}/${id}/users`)

// TODO: export all functions as the API to this service
export default {
  findAllTrips,
  findTripById,
  deleteTrip,
  createTrip,
  updateTrip,
  getDestinationRecords,
  getUserRecords
}
