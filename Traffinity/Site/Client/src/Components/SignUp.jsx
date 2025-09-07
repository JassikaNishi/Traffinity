import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiFillBook, AiFillGoogleCircle } from 'react-icons/ai';
import { CiLogin } from 'react-icons/ci';
import '../Components/loginstyle.css';
import OAuth from './OAuth';

export default function SignUp() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const { username, email, password } = formData;

    if (!username || !email || !password) {
      return setError('Please fill out all fields.');
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        setLoading(false);
        return setError(data.message || 'Something went wrong. Please try again.');
      }

      setLoading(false);
      navigate(from, { replace: true });
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="row g-0 justify-content-center align-items-center login-container mt-3">
      <div className="col-10 row g-0 border rounded-2 bg-white mb-8">
      
        <div className="d-none d-md-block col-6">
          <img src="./login.jpg" alt="" className="img-fluid h-100" />
        </div>
        <form className="col-12 col-md-6 px-3 py-3" onSubmit={handleSignUp}>
          

          {error && <div className="alert alert-danger text-center mb-3">{error}</div>}

          <h5 className="text-center fst-italic mb-3">Sign Up</h5>

    
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control rounded"
              id="username"
              placeholder="Your name"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <label htmlFor="username">Username</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control rounded"
              id="email"
              placeholder="xyz.@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control rounded"
              id="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <label htmlFor="password">Password</label>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn login-btn py-2 px-2 rounded-3 d-flex align-items-center justify-content-center"
              disabled={loading}
            >
              {loading ? (
                <span>Loading...</span>
              ) : (
                <>
                  Sign up <CiLogin />
                </>
              )}
            </button>
          </div>

          <OAuth></OAuth>

          <div className="text-center mt-4">
            Already have an Account? <Link to="/login" className="loginLink">Log in</Link>
          </div>
          <div className="text-center mt-4">
            By continuing, I agree to the <Link className="Terms">Terms of Use</Link> & <Link className="Privacy">Privacy Policy</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
