import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import UserTable from "./components/UserTable";
import UserDetails from "./components/UserDetails";
import "./index.css";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError("");

    axios.get("https://api.github.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load users");
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    user.login.toLowerCase().includes(search.toLowerCase())
  );

  if (selectedUser) {
    return (
      <div className="App">
        <UserDetails user={selectedUser} goBack={() => setSelectedUser(null)} />
      </div>
    );
  }

  return (
    <div className="App">
      <h1>GitHub Users</h1>
      <SearchBar search={search} setSearch={setSearch} />

      {loading && <p className="status loading">Loading...</p>}
      {error && <p className="status error">{error}</p>}
      {!loading && !error && filteredUsers.length === 0 && (
        <p className="status empty">No Results Found</p>
      )}

      {!loading && !error && filteredUsers.length > 0 && (
        <UserTable users={filteredUsers} onSelectUser={setSelectedUser} />
      )}
    </div>
  );
}

export default App;
