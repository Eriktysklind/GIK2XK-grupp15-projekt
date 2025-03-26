import { useEffect, useState } from 'react';
import UserItemSmall from './UserItemSmall';
import { getAll } from '../services/userService';
function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAll().then((users) => setUsers(users));
  }, []);

  return (
    <ul>
      {users?.length > 0 ? (
        users.map((user) => (
            <h3>{user.firstName}</h3>
        ))
      ) : (
        <h3>Kunde inte hämta användare</h3>
      )}
    </ul>
  );
}

export default UserList;