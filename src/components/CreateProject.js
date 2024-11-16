// src/components/CreateProject.js
import React, { useState } from 'react';
import api from '../api';

const CreateProject = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/projects/create', { name, description });
      alert('Project created successfully');
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Project</h2>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Project Name" required />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
      <button type="submit">Create Project</button>
    </form>
  );
};

export default CreateProject;