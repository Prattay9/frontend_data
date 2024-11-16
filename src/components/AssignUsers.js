// src/components/AssignUsers.js
import React, { useState, useEffect } from 'react';
import api from '../api';

const AssignUsers = () => {
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedProject, setSelectedProject] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const projectsRes = await api.get('/projects');
      const usersRes = await api.get('/users');
      setProjects(projectsRes.data);
      setUsers(usersRes.data);
    };
    fetchData();
  }, []);

  const handleAssign = async () => {
    try {
      await api.post(`/projects/${selectedProject}/assign-users`, { userIds: selectedUsers });
      alert('Users assigned successfully');
    } catch (error) {
      console.error('Error assigning users:', error);
    }
  };

  return (
    <div>
      <h2>Assign Users to Project</h2>
      <select onChange={(e) => setSelectedProject(e.target.value)} value={selectedProject}>
        <option value="">Select Project</option>
        {projects.map((project) => (
          <option key={project._id} value={project._id}>{project.name}</option>
        ))}
      </select>
      <h3>Select Users</h3>
      {users.map((user) => (
        <label key={user._id}>
          <input type="checkbox" value={user._id} onChange={(e) => {
            if (e.target.checked) {
              setSelectedUsers([...selectedUsers, user._id]);
            } else {
              setSelectedUsers(selectedUsers.filter((id) => id !== user._id));
            }
          }} />
          {user.name}
        </label>
      ))}
      <button onClick={handleAssign}>Assign Users</button>
    </div>
  );
};

export default AssignUsers;