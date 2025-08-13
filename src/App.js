import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import UserTable from "./UserTable";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => { 
    setLoading(true);
    setError("");
    
    axios.get("https://api.github.com/users")
    .then(response => {
      setUsers(response.data);
      setLoading(false);
    })
    .catch(() => {
      setError("Failed to load data");
      setLoading(false);
    })
  }, []);

  const filteredUsers = users.filter(user =>
    user.login.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>GitHub Users</h1>

      <SearchBar value={search} onChange={setSearch} />

      {loading && <p className="status">⏳ Loading...</p>}

      {error && (
        <div className="status error">
          {error} <br />
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      )}

      {!loading && !error && (
        filteredUsers.length > 0 ? (
          <div className="table-wrapper">
            <UserTable users={filteredUsers} />
          </div>
        ) : (
          <p className="status">No results found</p>
        )
      )}
    </div>
  );
}

export default App;
