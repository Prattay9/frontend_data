// src/components/ProjectList.js
import React, { useState, useEffect } from 'react';
import api from '../api';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await api.get('/projects');
      setProjects(res.data);
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <h2>Project List</h2>
      {projects.map((project) => (
        <div key={project._id}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <h4>Assigned Users:</h4>
          <ul>
            {project.assignedUsers.map((user) => (
              <li key={user._id}>{user.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;