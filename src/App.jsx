// src/App.jsx
import { useEffect, useState } from 'react';
import { index as fetchStarships } from './services/starshipService';
import StarshipSearch from './components/StarshipSearch/StarshipSearch';
import StarshipList from './components/StarshipList/StarshipList';
import './index.css'; // optional; paste the provided CSS

export default function App() {
  const [starshipsData, setStarshipsData] = useState([]);     // all data
  const [displayedStarships, setDisplayedStarships] = useState([]); // filtered
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState('');

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await fetchStarships();
        setStarshipsData(data);
        // setDisplayedStarships(data);
      } catch (err) {
        setError(err.message || 'Failed to load data.');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  function searchStarships(term) {
    const q = term.toLowerCase();
    if (!q) {
      setDisplayedStarships([]);
      return;
    }
    const filtered = starshipsData.filter(s =>
      (s.name || '').toLowerCase().includes(q)
    );
    setDisplayedStarships(filtered);
  }

  const isFiltered =
    starshipsData.length > 0 &&
    displayedStarships.length !== starshipsData.length;

  function resetSearch() {
    setDisplayedStarships(starshipsData);
  }

  return (
    <main>
      <h1>Starships</h1>

      <StarshipSearch
        count={displayedStarships.length}
        onSearch={searchStarships}
        showReset={isFiltered}
        onReset={resetSearch}
      />

      <StarshipList
        starships={displayedStarships}
        loading={loading}
        error={error}
      />
    </main>
  );
}
