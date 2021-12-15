// import React, { useEffect } from "react";



// TODO: declare URL where server listens for HTTP requests
const TRIPS_URL = "http://localhost:8080/api/trips"


// export function getDestinationRecords(id) {
//
//   useEffect(() => {
//     window.location.href = `${TRIPS_URL}/${id}/destinations`;
//   }, []);
//
//   return (
//       <div>
//         <h2>destinations</h2>
//       </div>
//   );
// }
//
// export function getUserRecords(id) {
//
//   useEffect(() => {
//     window.location.href = `${TRIPS_URL}/${id}/users`;
//   }, []);
//
//   return (
//       <div>
//         <h2>users</h2>
//       </div>
//   );
// }

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

// export const getDestinationRecords = (id) =>
//     fetch(`${TRIPS_URL}/${id}/destinations`)
//     .then(response => response.json())
//
// export const getUsersRecords = (id) =>
//     fetch(`${TRIPS_URL}/${id}/users`)
//     .then(response => response.json())

// TODO: export all functions as the API to this service
export default {
  findAllTrips,
  findTripById,
  deleteTrip,
  createTrip,
  updateTrip,
  // getDestinationRecords,
  // getUserRecords
}
