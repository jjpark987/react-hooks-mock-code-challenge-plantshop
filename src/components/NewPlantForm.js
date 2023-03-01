import React, { useState } from "react";

function NewPlantForm({ onSubmitPlant }) {
  const [plantForm, setPlantForm] = useState({
    name: "",
    imageUrl: "",
    price: 0,
  });

  function handleSubmit(e) {
    e.preventDefault();
    onSubmitPlant(plantForm)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={plantForm.name} onChange={e => setPlantForm({
          ...plantForm, name: e.target.value
        })} />
        <input type="text" name="image" placeholder="Image URL" value={plantForm.imageUrl} onChange={e => setPlantForm({
          ...plantForm, imageUrl: e.target.value
        })} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={plantForm.price} onChange={e => setPlantForm({
          ...plantForm, price: e.target.value
        })} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
