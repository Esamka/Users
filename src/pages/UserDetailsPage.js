import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UserDetails from "../components/UserDetails";

function UserDetailsPage({ users }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);    

  useEffect(() => {
    setLoading(true); 
    if (users.length > 0) {
      const foundUser = users.find((u) => u.id === parseInt(id));
      setUser(foundUser || null);
      setLoading(false);  
    }
  }, [id, users]);

  if (loading) {
    return <p className="status loading">Loading...</p>;   
  }

  return (
    <div className="App">
      <UserDetails user={user} goBack={() => navigate("/")} />
    </div>
  );
}

export default UserDetailsPage;
