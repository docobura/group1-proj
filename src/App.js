import React, { useState, useEffect } from 'react';
import CardDetail from '../src/components/CardDetail'; // Assuming you have a CardDetail component
import SearchBar from './components/SearchBar'; // Import the SearchBar component
import "./App.css"
import FoodDetail from './components/FoodDetail';

const App = () => {
  const [foodMenu, setFoodMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);

  useEffect(() => {
    fetch ('http://localhost:3000/menu') // Adjust the path as per your project structure
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setFoodMenu(data);
        setFilteredMenu(data); // Set filtered menu initially to the entire food menu
      })
      .catch(error => {
        console.error('Error fetching food menu:', error);
      });
  }, []);

  const handleSearch = (searchTerm) => {
    // Filter the food menu based on the search term
    const filtered = foodMenu.filter(foodItem =>
      foodItem.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMenu(filtered);
  };

  return (
    <div>
      <h1>Food Menu</h1>
      {/* Place the SearchBar component here */}
      <SearchBar onSearch={handleSearch} />
      <div className="menu">
        {filteredMenu.map((foodItem) => (
          <div key={foodItem.id}>
            <CardDetail foodItem={foodItem} />
            <FoodDetail description={foodItem.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
