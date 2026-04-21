import { Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ChefRecipes from './pages/ChefRecipes';
import MyRecipes from './pages/MyRecipes';
import Auth from './pages/Auth';
import NotFound from './pages/NotFound';
import { AuthContext } from './context/auth-context';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="app-shell">
      <Navbar />
      <main className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chefs/:chefId/recipes" element={<ChefRecipes />} />
          <Route
            path="/my-recipes"
            element={authCtx.isLoggedIn ? <MyRecipes /> : <Navigate to="/auth" replace />}
          />
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
