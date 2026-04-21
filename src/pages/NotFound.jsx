import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="page-card not-found">
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="primary-btn inline-btn">
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
