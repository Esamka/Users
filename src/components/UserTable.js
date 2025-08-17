import React from "react";

function UserTable({ users, onSelectUser }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Username</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>
                <img src={user.avatar_url} alt={user.login} width="50" />
              </td>
              <td>{user.login}</td>
              <td>
                <button onClick={() => onSelectUser(user)}>View Profile</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;