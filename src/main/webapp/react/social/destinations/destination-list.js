const {Link, useHistory} = window.ReactRouterDOM;


import destinationService from "./destination-service"
const { useState, useEffect } = React;
const DestinationList = () => {
  const history = useHistory()
  const [destinations, setDestinations] = useState([])
  useEffect(() => {
    findAllDestinations()
  }, [])
  const findAllDestinations = () =>
      destinationService.findAllDestinations()
      .then(destinations => setDestinations(destinations))

  return(
      <div>
        <h2>Destinations</h2>
        <button onClick={() => history.push("/destinations/new")}>
          Add Destination
        </button>
        <ul>
          {
            destinations.map(destination =>
                <li className="list-group-item"
                    key={destination.id}>
                  <Link to={`/destinations/${destination.id}`}>
                    {destination.location}
                  </Link>
                </li>)
          }
        </ul>

      </div>
  )
}

export default DestinationList;