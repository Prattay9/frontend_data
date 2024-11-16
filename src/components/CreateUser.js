import React, { useState } from 'react';
import api from '../api';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/users/create', { name, email, password, role });
      alert('User created successfully');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create User</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Create User</button>
    </form>
  );
};

export default CreateUser;