import React from "react";

function UserTable({ users }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Username</th>
          <th>Profile</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>
              <img
                src={user.avatar_url}
                alt={`${user.login}'s avatar`}
                width="50"
                height="50"
              />
            </td>
            <td>{user.login}</td>
            <td>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
