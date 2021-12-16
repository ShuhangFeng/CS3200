import tripService from "./trip-service"
const {useParams, useHistory} = window.ReactRouterDOM;
const {useState, useEffect} = React;
const TripFormEditor = () => {
  const history = useHistory()
  const {id} = useParams()
  const [trip, setTrip] = useState({})
  useEffect(() => {
    if(id !== "new") {
      findTripById(id)
    }
  }, []);
  const createTrip = (trip) =>
      tripService.createTrip(trip)
      .then(() => history.back())
  const findTripById = (id) =>
      tripService.findTripById(id)
      .then(trip => setTrip(trip))
  const deleteTrip = (id) =>
      tripService.deleteTrip(id)
      .then(() => history.back())
  const updateTrip = (id, newTrip) =>
      tripService.updateTrip(id, newTrip)
      .then(() => history.back())

  const getDestinationRecords =  (id) =>
      tripService.getDestinationRecords(id)

  const getUserRecords = (id) =>
      tripService.getUserRecords(id)


  return (
      <div>
        <h2>Trip Editor</h2>
        <label>Id</label>
        <input value={trip.id}/><br/>
        <label>Name</label>
        <input
            onChange={(e) =>
                setTrip(trip =>
                    ({...trip, name: e.target.value}))}
            value={trip.name}/>
        <label>Local_season</label>
        <input
            onChange={(e) =>
                setTrip(trip =>
                    ({...trip, local_season: e.target.value}))}
            value={trip.local_season}/>

        <label>Started</label>
        <input
            onChange={(e) =>
                setTrip(trip =>
                    ({...trip, started: e.target.value}))}
            value={trip.started}/>
        <label>Ended</label>
        <input
            onChange={(e) =>
                setTrip(trip =>
                    ({...trip, ended: e.target.value}))}
            value={trip.ended}/>
        <br/>
        <button
            onClick={() => {
              history.back()}}>
          Cancel
        </button>
        <button
            onClick={() => deleteTrip(trip.id)}>
          Delete
        </button>
        <button
            onClick={() => createTrip(trip)}>
          Create
        </button>
        <button
            onClick={() => updateTrip(trip.id, trip)}>
          Save
        </button>

        <button
            onClick={() => getDestinationRecords(trip.id)}>
          DestinationsRecords
        </button>

        <button
            onClick={() => getUserRecords(trip.id)}>
          UsersRecords
        </button>

      </div>
  )
}

export default TripFormEditor