import React, { useState, useEffect } from 'react';

function App() {
  const [tech, setTech] = useState(['ReactJS', 'React Native']);

  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('');
  }

  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));

    return () => {
      // willmount
    };
  }, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li>{t}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newTech}
        onChange={e => setNewTech(e.target.value)}
      />
      <button onClick={handleAdd}>Adicionar</button>
    </>
  );
}

export default App;
