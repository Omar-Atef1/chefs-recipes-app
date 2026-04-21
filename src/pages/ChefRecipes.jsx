import { useParams, Link } from 'react-router-dom';
import RecipeItem from '../components/RecipeItem';
import SectionHeader from '../components/SectionHeader';
import { DUMMY_CHEFS } from '../data/chefs-data';

function ChefRecipes() {
  const params = useParams();
  const selectedChef = DUMMY_CHEFS.find((chef) => chef.id === params.chefId);

  if (!selectedChef) {
    return (
      <div className="page-card">
        <SectionHeader
          eyebrow="Chef archive"
          title="Chef not found"
          description="The selected chef does not exist in the current dummy data."
        />
        <Link to="/" className="primary-btn inline-btn">
          Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="page-card">
      <SectionHeader
        eyebrow={selectedChef.cuisine}
        title={`${selectedChef.name}'s Recipes`}
        description="Browse the recipe titles assigned to this chef using route parameters and filtered dummy data."
      />

      {!selectedChef.recipes.length && (
        <p className="empty-state">This chef does not have any recipes yet.</p>
      )}

      {!!selectedChef.recipes.length && (
        <ul className="recipes-list">
          {selectedChef.recipes.map((recipe, index) => (
            <RecipeItem key={recipe.id} recipe={recipe} index={index} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ChefRecipes;
