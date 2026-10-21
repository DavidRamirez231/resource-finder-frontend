import { useState, useEffect } from 'react';
import ResourceCard from './components/ResourceCard.jsx';

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/resources`)
      .then(response => response.json())
      .then(data => setResources(data));
  }, []);

  return (
    <div>
      <h1>Community Resource Finder</h1>
      {resources.map(resource => (
        <ResourceCard key={resource.id} {...resource} />
      ))}
    </div>
  );
}

export default App;
