import UserList from "./users/user-list";
import TripList from "./trips/trip-list";
import DestinationList from "./destinations/destination-list";
import UserFormEditor from "./users/user-form-editor";
import TripFormEditor from "./trips/trip-form-editor";
import DestinationFormEditor from "./destinations/destination-form-editor";
const {HashRouter, Route} = window.ReactRouterDOM; 
const App = () => {
    return (
        <div>
        <div className="container-fluid">
            <HashRouter>

                <Route path={["/users", "/"]} exact={true}>
                    <UserList/>
                </Route>
                <Route path="/users/:id" exact={true}>
                    <UserFormEditor/>
                </Route>
            </HashRouter>
          </div>


              <div className="container-fluid">
                <HashRouter>
                <Route path={["/trips", "/"]} exact={true}>
                    <TripList/>
                </Route>
                <Route path="/trips/:id" exact={true}>
                    <TripFormEditor/>
                </Route>
                    </HashRouter>
              </div>

          <div className="container-fluid">
                <HashRouter>
                <Route path={["/destinations", "/"]} exact={true}>
                    <DestinationList/>
                </Route>
                <Route path="/destinations/:id" exact={true}>
                    <DestinationFormEditor/>
                </Route>

            </HashRouter>
        </div>


        </div>


    );
}

export default App;
