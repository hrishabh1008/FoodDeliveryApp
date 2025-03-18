import useFetch from "../../utils/useFetch";
import Cards from "./Cards";
import { useEffect, useState } from "react";

export default function Cusines() {
  const [dishes, setDishes] = useState([]); // Stores full list
  const [filteredDishes, setFilteredDishes] = useState([]); // Stores filtered list
  const [searchQuery, setSearchQuery] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        setDishes(data.recipes);
        setFilteredDishes(data.recipes); // Initially show all dishes
      });
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = dishes.filter((dish) =>
      dish.name.toLowerCase().includes(query)
    );

    setFilteredDishes(filtered);
  };

  return (
    <>
      <input
        className="border p-2 m-2"
        type="text"
        placeholder="Search for a recipe..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <p>This is the cuisines section in the main body</p>

      <div className="flex flex-wrap">
        {filteredDishes.length > 0 ? (
          filteredDishes.map((dish) => (
            <Cards
              key={dish.id}
              imgURL={dish.image}
              name={dish.name}
              rating={dish.rating}
              deliveryTime={dish.cuisine}
              description={dish.ingredients}
            />
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </>
  );
}
