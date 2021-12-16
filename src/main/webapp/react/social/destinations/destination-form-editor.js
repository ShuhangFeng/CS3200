import destinationService from "./destination-service"
const {useParams, useHistory} = window.ReactRouterDOM;
const {useState, useEffect} = React;
const DestinationFormEditor = () => {
  const uHistory = useHistory()
  const {id} = useParams()
  const [destination, setDestination] = useState({})
  const tripId = destination["tripId"]
  useEffect(() => {
    if(id !== "new") {
      findDestinationById(id)
    }
  }, []);
  const createDestination = (destination) =>
      destinationService.createDestination(destination)
      .then(() => history.back())
  const findDestinationById = (id) =>
      destinationService.findDestinationById(id)
      .then(destination => setDestination(destination))
  const deleteDestination = (id) =>
      destinationService.deleteDestination(id)
      .then(() => history.back())
  const updateDestination = (id, newDestination) =>
      destinationService.updateDestination(id, newDestination)
      .then(() => history.back())


  return (
      <div>
        <h2>Destination Editor</h2>
        <label>Id</label>
        <input value={destination.id}/><br/>
        <label>Location</label>
        <input
            onChange={(e) =>
                setDestination(destination =>
                    ({...destination, location: e.target.value}))}
            value={destination.location}/>
        <label>Activity</label>
        <input
            onChange={(e) =>
                setDestination(destination =>
                    ({...destination, activity: e.target.value}))}
            value={destination.activity}/>

        <br/>
        <button
            onClick={() => {
              history.back()}}>
          Cancel
        </button>
        <button
            onClick={() => deleteDestination(destination.id)}>
          Delete
        </button>
        <button
            onClick={() => createDestination(destination)}>
          Create
        </button>
        <button
            onClick={() => updateDestination(destination.id, destination)}>
          Save
        </button>

        <button
            onClick={() => uHistory.push(`/trips/${tripId}`)}>
          editTheTrip
        </button>

      </div>
  )
}

export default DestinationFormEditor