import { Link } from 'react-router-dom';

function ChefCard({ chef }) {
  return (
    <article className="chef-card">
      <span className="chef-card__label">{chef.cuisine}</span>
      <h3>{chef.name}</h3>
      <p>{chef.recipes.length} recipes available</p>
      <Link to={`/chefs/${chef.id}/recipes`} className="primary-btn">
        View Recipes
      </Link>
    </article>
  );
}

export default ChefCard;
