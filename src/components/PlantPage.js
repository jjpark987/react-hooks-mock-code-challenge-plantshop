import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [allPlants, setAllPlants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(data => setAllPlants(data))
  }, []);

  function submitPlant(newPlant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "name": newPlant.name,
        "image": newPlant.imageUrl,
        "price": newPlant.price
      })
    })
    .then(r => r.json())
    .then(() => setAllPlants([...allPlants, newPlant]));
  }

  let filteredPlants = allPlants.filter(plant => plant.name.toLowerCase().includes(searchInput.toLowerCase()));

  return (
    <main>
      <NewPlantForm onSubmitPlant={submitPlant} />
      <Search searchInput={searchInput} onSetSearchInput={searchValue => setSearchInput(searchValue)} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
