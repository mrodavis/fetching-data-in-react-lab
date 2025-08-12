// src/services/starshipService.js
const BASE_URL = 'https://swapi.info/api/starships';

export async function index() {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) {
      throw new Error('Failed to fetch starships.');
    }

    const data = await res.json();

    // Ensure it’s an array; fall back to empty if something changes
    if (!Array.isArray(data)) {
      throw new Error('Unexpected API response format.');
    }

    return data;
  } catch (err) {
    console.error('Starship fetch failed:', err);
    throw err;
  }
}
