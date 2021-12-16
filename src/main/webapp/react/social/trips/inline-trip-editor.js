const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineTripEditor = ({trip, deletetrip, updatetrip}) => {
  const [tripCopy, settripCopy] = useState(trip)
  const [editing, setEditing] = useState(false)
  return(
      <div>
        {
          editing &&
          <div className="row">
            <div className="col">
              <input
                  className="form-control"
                  value={tripCopy.name}
                  onChange={(e)=>settripCopy(tripCopy => ({...tripCopy, name: e.target.value}))}/>
            </div>


            <div className="col-2">
              <i className="fas fa-2x fa-check float-right margin-left-10px"
                 onClick={() => {
                   setEditing(false)
                   updatetrip(tripCopy.id, tripCopy)
                 }}></i>
              <i className="fas fa-2x fa-undo float-right margin-left-10px"
                 onClick={() => setEditing(false)}></i>
              <i className="fas fa-2x fa-trash float-right margin-left-10px"
                 onClick={() => deletetrip(trip.id)}></i>
            </div>
          </div>
        }
        {
          !editing &&
          <div className="row">
            <div className="col">
              <Link to={`/trips/${tripCopy.id}`}>
                {tripCopy.name}
              </Link>
            </div>


            <div className="col-2">
              <i className="fas fa-cog fa-2x float-right"
                 onClick={() => setEditing(true)}></i>
            </div>
          </div>
        }
      </div>
  )
}

export default InlineTripEditor;