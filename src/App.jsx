import { useState, useEffect } from 'react';
import ResourceCard from './components/ResourceCard';

const API_URL = import.meta.env.VITE_API_URL;

function App() {
  const [resources, setResources] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    fetch(`${API_URL}/resources?category=${category}`)
      .then(res => res.json())
      .then(data => setResources(data));
  }, [category]);

  return (
    <div>
      <h1>Community Resource Finder</h1>

      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value="">All</option>
        <option value="food">Food</option>
        <option value="housing">Housing</option>
        <option value="health">Health</option>
      </select>

      {resources.length === 0 && <p>No resources found in this category.</p>}
      {resources.map(resource => <ResourceCard key={resource.id} {...resource} />)}
    </div>
  );
}

export default App;
