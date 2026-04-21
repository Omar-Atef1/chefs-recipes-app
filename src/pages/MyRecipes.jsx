import { useState } from 'react';
import RecipeItem from '../components/RecipeItem';
import SectionHeader from '../components/SectionHeader';

function MyRecipes() {
  const [recipeTitle, setRecipeTitle] = useState('');
  const [myRecipes, setMyRecipes] = useState([
    { id: 'm1', title: 'Honey Glazed Chicken' },
    { id: 'm2', title: 'Roasted Garlic Potatoes' },
  ]);

  const submitHandler = (event) => {
    event.preventDefault();

    if (recipeTitle.trim().length < 3) {
      return;
    }

    const newRecipe = {
      id: new Date().toISOString(),
      title: recipeTitle,
    };

    setMyRecipes((prevRecipes) => [newRecipe, ...prevRecipes]);
    setRecipeTitle('');
  };

  const deleteRecipeHandler = (recipeId) => {
    setMyRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== recipeId));
  };

  return (
    <div className="page-card">
      <SectionHeader
        eyebrow="Personal recipe collection"
        title="My Recipes"
        description="Add your own recipe titles and remove them instantly using local state only."
      />

      <form className="recipe-form" onSubmit={submitHandler}>
        <div className="form-control form-control--full">
          <label htmlFor="recipeTitle">Recipe Title</label>
          <input
            id="recipeTitle"
            type="text"
            placeholder="e.g. Creamy Mushroom Soup"
            value={recipeTitle}
            onChange={(event) => setRecipeTitle(event.target.value)}
          />
        </div>
        <button className="primary-btn" type="submit">
          Add Recipe
        </button>
      </form>

      {!myRecipes.length && (
        <p className="empty-state">You haven't added any recipes yet.</p>
      )}

      {!!myRecipes.length && (
        <ul className="recipes-list">
          {myRecipes.map((recipe, index) => (
            <RecipeItem
              key={recipe.id}
              recipe={recipe}
              index={index}
              onDelete={deleteRecipeHandler}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyRecipes;
