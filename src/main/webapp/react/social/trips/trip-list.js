const {Link, useHistory} = window.ReactRouterDOM;


import TripService from "./trip-service"
const { useState, useEffect } = React;
const TripList = () => {
  const history = useHistory()
  const [trips, setTrips] = useState([])
  useEffect(() => {
    findAllTrips()
  }, [])
  const findAllTrips = () =>
      TripService.findAllTrips()
      .then(trips => setTrips(trips))

  return(
      <div>
        <h2>Trips</h2>
        <button onClick={() => history.push("/trips/new")}>
          Add Trip
        </button>
        <ul>
          {
            trips.map(trip =>
                <li className="list-group-item"
                    key={trip.id}>
                  <Link to={`/trips/${trip.id}`}>
                    {trip.name},
                    {trip.local_season},
                    {trip.started}
                  </Link>
                </li>)
          }
        </ul>

      </div>
  )
}

export default TripList;