import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
   const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [rating, setRating] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");
  
  
    const deleteHandler= (indexToDelete)=>{
    setRecipes((recipes) => recipes.filter((_, index) => index !== indexToDelete))
    }
    
    const createHandler = (event)=>{
      event.preventDefault();
      setRecipes([...recipes, {
    name: name,
    cuisine:cuisine,
    photo: photo,
    ingredients: ingredients,
    preparation: preparation
  }])
      setName("");
      setCuisine("");
      setPhoto("");
      setIngredients("");
      setPreparation("");
    }
    
  const nameChange = (event)=>{
    setName(event.target.value);
  }  
    const cuisineChange = (event)=>{
    setCuisine(event.target.value);
  }
    
    const photoChange = (event)=>{
    setPhoto(event.target.value);
  }
    
     const ingredientsChange = (event)=>{
    setIngredients(event.target.value);
  }
     
     const preparationChange = (event)=>{
    setPreparation(event.target.value);
  }
    
    

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1 >Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} onDelete={deleteHandler}/>
      <RecipeCreate name={name} cuisine={cuisine} photo={photo} ingredients={ingredients} preparation={preparation} createHandler={createHandler} setName={nameChange} setCuisine={cuisineChange} setPhoto={photoChange} setIngredients={ingredientsChange} setPreparation={preparationChange} />
    </div>
  );
}

export default App;
