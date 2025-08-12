// src/components/StarshipSearch/StarshipSearch.jsx
import { useState } from 'react';

export default function StarshipSearch({
  count,
  onSearch,
  showReset,
  onReset,
}) {
  const [term, setTerm] = useState('');
  const [prevSearchTerm, setPrevSearchTerm] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const q = term.trim();
    onSearch(q);
    setPrevSearchTerm(q);
    setTerm(''); // reset input
  }

  const helperText = prevSearchTerm
    ? `Last search: “${prevSearchTerm}”`
    : 'Search for a starship by name.';

  return (
    <header style={{ marginBottom: 16 }}>
      <div className="search-meta">
        <div><strong>Results:</strong> {count}</div>
        <div>{helperText}</div>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g., Falcon"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          aria-label="Search starships by name"
        />
        <button type="submit">Search</button>

        {showReset && (
          <button type="button" onClick={onReset}>
            Show all starships
          </button>
        )}
      </form>
    </header>
  );
}
