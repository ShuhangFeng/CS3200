import tripService from "./trip-service"
const {useParams, useHistory} = window.ReactRouterDOM;
const {useState, useEffect} = React;
const TripFormEditor = () => {
  const {id} = useParams()
  const [trip, setTrip] = useState({})
  useEffect(() => {
    if(id !== "new") {
      findTripById(id)
    }
  }, []);
  const createTrip = (trip) =>
      tripService.createTrip(trip)
      .then(() => history.Back())
  const findTripById = (id) =>
      tripService.findTripById(id)
      .then(trip => setTrip(trip))
  const deleteTrip = (id) =>
      tripService.deleteTrip(id)
      .then(() => history.Back())
  const updateTrip = (id, newTrip) =>
      tripService.updateTrip(id, newTrip)
      .then(() => history.Back())


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

      </div>
  )
}

export default TripFormEditor