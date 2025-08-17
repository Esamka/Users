import React, { useState, useEffect } from "react";
import { fakeUsers } from "./data"; 
import SearchBar from "./components/SearchBar";
import UserTable from "./components/UserTable";
import UserDetails from "./components/UserDetails";
import "./index.css";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedUser, setSelectedUser] = useState(null); // جديد: لتحديد المستخدم المعروض

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

  // لو تم اختيار مستخدم، نعرض تفاصيله
  if (selectedUser) {
    return (
      <div className="App">
        <UserDetails user={selectedUser} goBack={() => setSelectedUser(null)} />
      </div>
    );
  }

  // الصفحة الرئيسية
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
