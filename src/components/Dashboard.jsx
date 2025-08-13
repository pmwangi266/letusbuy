import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './dashboard.css';


const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token');
      
      if (!token) {
        navigate('/dashboard');
        return;
      }

      try {
        // Verify token with backend
        await axios.get(
          'http://Peter10.pythonanywhere.com/api/verify',
          {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          }
        );

        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Authentication error:', error);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/dashboard');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/dashboard');
    window.location.reload();
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  // ...existing code...
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to Your Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </header>

      {/* User data display */}
      {user && (
        <div className="user-info">
          <h2>User Information</h2>
          <p><strong>Name:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          {user.phone && <p><strong>Phone:</strong> {user.phone}</p>}
        </div>
      )}

      <div className="dashboard-content">
        <h2>Your Content</h2>
        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h3>Recent Activity</h3>
            <p>Check your latest actions</p>
          </div>
          <div className="dashboard-card">
            <h3>Statistics</h3>
            <p>View your performance metrics</p>
          </div>
          <div className="dashboard-card">
            <h3>Settings</h3>
            <p>Configure your preferences</p>
          </div>
        </div>
      </div>
    </div>
  );
}; 
// ...existing code...

export default Dashboard;