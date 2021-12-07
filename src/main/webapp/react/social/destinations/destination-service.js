// TODO: declare URL where server listens for HTTP requests
const DESTINATIONS_URL = "http://localhost:8080/api/destinations"

// TODO: retrieve all Destinations from the server
export const findAllDestinations = () =>     fetch(DESTINATIONS_URL)
.then(response => response.json())


// TODO: retrieve a single Destination by their ID
export const findDestinationById = (id) =>
    fetch(`${DESTINATIONS_URL}/${id}`)
    .then(response => response.json())


// TODO: delete a Destination by their ID
export const deleteDestination = (id) =>
    fetch(`${DESTINATIONS_URL}/${id}`, {
      method: "DELETE"
    })


// TODO: create a new Destination
export const createDestination = (Destination) =>
    fetch(DESTINATIONS_URL, {
      method: 'POST',
      body: JSON.stringify(Destination),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())


// TODO: update a Destination by their ID
export const updateDestination = (id, Destination) =>
    fetch(`${DESTINATIONS_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(Destination),
      headers: {'content-type': 'application/json'}
    })
    .then(response => response.json())


// TODO: export all functions as the API to this service
export default {
  findAllDestinations,
  findDestinationById,
  deleteDestination,
  createDestination,
  updateDestination
}
