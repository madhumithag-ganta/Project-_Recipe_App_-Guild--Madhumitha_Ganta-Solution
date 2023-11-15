import React, { useState } from "react";

function RecipeCreate({name, cuisine, photo, ingredients, preparation, createHandler, setName, setCuisine, setPhoto, setIngredients, setPreparation}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
 
  
  return (
    <form name="create" onSubmit={createHandler}>
      <table>
        <tbody>
          <tr>
            <td className="short-width" ><input type="text" name="name" placeholder="Name" value={name} onChange={setName}></input></td>
            <td className="short-width"><input name="cuisine" type="text" placeholder="Cuisine" value={cuisine} onChange={setCuisine}></input></td>
            <td className="short-width"><input name="photo" type="url" placeholder="Url" value={photo} onChange={setPhoto}></input></td>
            <td className="long-width"><textarea name="ingredients"  placeholder="Ingredients" value={ingredients} onChange={setIngredients}></textarea></td>
             <td className="long-width"><textarea name="preparation" placeholder="Preparation" value={preparation} onChange={setPreparation}></textarea></td> 
            <td className="short-width">
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
