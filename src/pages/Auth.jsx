import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { AuthContext } from '../context/auth-context';

function Auth() {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [formError, setFormError] = useState('');

  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const switchModeHandler = () => {
    setIsLoginMode((prevState) => !prevState);
    setFormError('');
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!enteredEmail.includes('@')) {
      setFormError('Please enter a valid email address.');
      return;
    }

    if (enteredPassword.trim().length < 6) {
      setFormError('Password must be at least 6 characters.');
      return;
    }

    authCtx.login(enteredEmail);
    navigate('/', { replace: true });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <SectionHeader
          eyebrow="Welcome back"
          title={isLoginMode ? 'Login' : 'Sign Up'}
          description="Join our editorial-style culinary space and manage your recipes in a clean modern interface."
        />

        <form onSubmit={submitHandler} className="auth-form">
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
              placeholder="name@example.com"
            />
          </div>

          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={enteredPassword}
              onChange={(event) => setEnteredPassword(event.target.value)}
              placeholder="Minimum 6 characters"
            />
          </div>

          {formError && <p className="form-error">{formError}</p>}

          <button className="primary-btn auth-submit" type="submit">
            {isLoginMode ? 'Login' : 'Create Account'}
          </button>
        </form>

        <button className="switch-mode-btn" onClick={switchModeHandler}>
          {isLoginMode ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  );
}

export default Auth;
