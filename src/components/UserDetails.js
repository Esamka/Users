import React from "react";

function UserDetails({ user, goBack }) {
  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <div className="user-details">
      <img src={user.avatar_url} alt={user.login} className="avatar-large" />
      <h2>{user.login}</h2>
      <h3>{user.name || "No real name"}</h3>
      <p>{user.bio || "No bio available"}</p>
      <p><strong>Location:</strong> {user.location || "Unknown"}</p>
      <p><strong>Public Repos:</strong> {user.public_repos}</p>
      <p>
        <strong>Followers:</strong> {user.followers} |{" "}
        <strong>Following:</strong> {user.following}
      </p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        Visit GitHub Profile
      </a>
      <br />
      <button onClick={goBack} style={{marginTop: '15px'}}>⬅ Back to Users</button>
    </div>
  );
}

export default UserDetails;