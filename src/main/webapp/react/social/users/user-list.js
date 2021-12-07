const {Link, useHistory} = window.ReactRouterDOM;


import userService from "./user-service"
const { useState, useEffect } = React;
const UserList = () => {
  const history = useHistory()
  const [users, setUsers] = useState([])
  useEffect(() => {
    findAllUsers()
  }, [])
  const findAllUsers = () =>
      userService.findAllUsers()
      .then(users => setUsers(users))

  return(
        <div>
          <h2>Users</h2>
          <button onClick={() => history.push("/users/new")}>
            Add User
          </button>
          <ul>
            {
              users.map(user =>
                  <li className="list-group-item"
                      key={user.id}>
                    <Link to={`/users/${user.id}`}>
                      {user.firstName},
                      {user.lastName},
                      {user.username}
                    </Link>
                  </li>)
            }
          </ul>

        </div>
    )
}

export default UserList;