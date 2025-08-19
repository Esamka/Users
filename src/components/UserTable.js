import React from "react";
import { useNavigate } from "react-router-dom";

function UserTable({ users }) {
  const navigate = useNavigate();

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
                <button onClick={() => navigate(`/user/${user.id}`)}>
                  View Profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
