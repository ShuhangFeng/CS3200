const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const InlineDestinationEditor = ({destination, deletedestination, updatedestination}) => {
  const [destinationCopy, setdestinationCopy] = useState(destination)
  const [editing, setEditing] = useState(false)
  return(
      <div>
        {
          editing &&
          <div className="row">
            <div className="col">
              <input
                  className="form-control"
                  value={destinationCopy.location}
                  onChange={(e)=>setdestinationCopy(destinationCopy => ({...destinationCopy, location: e.target.value}))}/>
            </div>


            <div className="col-2">
              <i className="fas fa-2x fa-check float-right margin-left-10px"
                 onClick={() => {
                   setEditing(false)
                   updatedestination(destinationCopy.id, destinationCopy)
                 }}></i>
              <i className="fas fa-2x fa-undo float-right margin-left-10px"
                 onClick={() => setEditing(false)}></i>
              <i className="fas fa-2x fa-trash float-right margin-left-10px"
                 onClick={() => deleteDestination(destination.id)}></i>
            </div>
          </div>
        }
        {
          !editing &&
          <div className="row">
            <div className="col">
              <Link to={`/destinations/${destinationCopy.id}`}>
                {destinationCopy.location}
              </Link>
            </div>
            {/*<div className="col-1">*/}
            {/*  <Link to={`/destinations/${destinationCopy.id}/blogs`}>*/}
            {/*    Blogs*/}
            {/*  </Link>*/}
            {/*</div>*/}
            <div className="col-2">
              <i className="fas fa-cog fa-2x float-right"
                 onClick={() => setEditing(true)}></i>
            </div>
          </div>
        }
      </div>
  )
}

export default InlineDestinationEditor;