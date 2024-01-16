import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'


const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {

  const [characters, setCharacters] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [planetsResponse, peopleResponse] = await Promise.all([
          axios.get(urlPlanets),
          axios.get(urlPeople)
        ]);

        const planets = planetsResponse.data;
        const people = peopleResponse.data;

        const updatedPeople = people.map(person => {
          const matchingPlanet = planets.find(planet => planet.id === person.homeworld);
          return {
            ...person,
            planet: matchingPlanet
          };
        });
        
        setCharacters(updatedPeople);
      } catch (error) {
        console.error('Error fetching data:', error);

      }
    };

    fetchData();
  }, []);


  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {characters.map(character => (
          <Character data={character} />
      ))}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
