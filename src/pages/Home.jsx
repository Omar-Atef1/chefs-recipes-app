import { useEffect, useState } from 'react';
import ChefsList from '../components/ChefsList';
import SectionHeader from '../components/SectionHeader';
import { DUMMY_CHEFS } from '../data/chefs-data';

function Home() {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setChefs(DUMMY_CHEFS);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="page-card">
      <SectionHeader
        eyebrow="Curated culinary experts"
        title="All Chefs"
        description="Discover a polished collection of chefs, cuisines, and signature dishes crafted for your React assignment."
      />
      <ChefsList chefs={chefs} />
    </div>
  );
}

export default Home;
