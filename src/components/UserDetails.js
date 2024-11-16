// src/components/UserDetails.js
import React, { useState, useEffect } from 'react';
import api from '../api';

const UserDetails = () => {
  const [users, setUsers] = useState([]); // Ensure users is always an array
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await api.get('/users'); // Fetch all users
        setUsers(res.data || []); // Set to empty array if res.data is null
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setUsers([]); // Set to empty array in case of error
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (users.length === 0) return <p>No users found</p>;

  return (
    <div>
      <h2>All Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Role: {user.role}</p>
            <p>Password:{user.password}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDetails;