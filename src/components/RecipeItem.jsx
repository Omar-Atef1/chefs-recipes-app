function RecipeItem({ recipe, index, onDelete }) {
  return (
    <li className="recipe-item">
      <div>
        <span className="recipe-item__index">{String(index + 1).padStart(2, '0')}</span>
        <h4>{recipe.title}</h4>
      </div>

      {onDelete && (
        <button className="delete-btn" onClick={() => onDelete(recipe.id)}>
          Delete
        </button>
      )}
    </li>
  );
}

export default RecipeItem;
