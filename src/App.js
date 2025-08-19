import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fakeUsers } from "./data"; 
import SearchBar from "./components/SearchBar";
import UserTable from "./components/UserTable";
import UserDetailsPage from "./pages/UserDetailsPage";   
import "./index.css";


function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    setTimeout(() => {
      try {
        setUsers(fakeUsers);
        setLoading(false);
      } catch (err) {
        setError("Failed to load users");
        setLoading(false);
      }
    }, 1000);
  }, []);

  const filteredUsers = users.filter((user) =>
    user.login.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <h1>GitHub Users</h1>
              <SearchBar search={search} setSearch={setSearch} />

              {loading && <p className="status loading">Loading...</p>}
              {error && <p className="status error">{error}</p>}
              {!loading && !error && filteredUsers.length === 0 && (
                <p className="status empty">No Results Found</p>
              )}

              {!loading && !error && filteredUsers.length > 0 && (
                <UserTable users={filteredUsers} />
              )}
            </div>
          }
        />
        <Route path="/user/:id" element={<UserDetailsPage users={users} />} />
      </Routes>
    </Router>
  );
}

export default App;
