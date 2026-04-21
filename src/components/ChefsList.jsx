import ChefCard from './ChefCard';

function ChefsList({ chefs }) {
  if (!chefs.length) {
    return <p className="empty-state">No chefs available right now.</p>;
  }

  return (
    <section className="chef-grid">
      {chefs.map((chef) => (
        <ChefCard key={chef.id} chef={chef} />
      ))}
    </section>
  );
}

export default ChefsList;
