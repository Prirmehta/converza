import React, { useState } from 'react';

const containerStyle = {
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #E7F5DC 0%, #CFE1B9 40%, #B6C998 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',
  fontFamily: 'Inter, Segoe UI, Arial, sans-serif',
};

const cardStyle = {
  background: '#FFFFFF',
  borderRadius: '16px',
  padding: '3rem',
  boxShadow: '0 8px 32px #72815622',
  width: '100%',
  maxWidth: '420px',
  border: '1px solid #CFE1B9',
};

const headingStyle = {
  fontSize: '2.2rem',
  fontWeight: 700,
  color: '#728156',
  marginBottom: '0.5rem',
  textAlign: 'center',
};

const subheadingStyle = {
  fontSize: '1.1rem',
  color: '#88976C',
  marginBottom: '2.5rem',
  textAlign: 'center',
  fontWeight: 500,
};

const inputStyle = {
  width: '100%',
  padding: '1rem 1.2rem',
  marginBottom: '1.5rem',
  border: '2px solid #CFE1B9',
  borderRadius: '12px',
  fontSize: '1rem',
  background: '#E7F5DC',
  color: '#728156',
  transition: 'all 0.3s ease',
  boxSizing: 'border-box',
};

const rowStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '2rem',
  fontSize: '0.95rem',
};

const linkStyle = {
  color: '#88976C',
  textDecoration: 'none',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'color 0.3s ease',
};

const buttonStyle = {
  width: '100%',
  padding: '1rem',
  background: 'linear-gradient(90deg, #88976C 60%, #728156 100%)',
  color: '#FFFFFF',
  border: 'none',
  borderRadius: '12px',
  fontSize: '1.1rem',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 16px #72815633',
};

const checkboxStyle = {
  marginRight: '0.5rem',
  accentColor: '#88976C',
};

function Login({ onBack, onSignup, onDashboard }) {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    if (!fullName.trim() || !password.trim()) {
      window.alert('Please fill in all fields');
      return;
    }
    onDashboard(fullName.trim());
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={headingStyle}>Welcome Back</div>
        <div style={subheadingStyle}>Login to your account</div>
        
        <input
          style={inputStyle}
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={e => setFullName(e.target.value)}
        />
        
        <input
          style={inputStyle}
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        
        <div style={rowStyle}>
          <label style={{ fontSize: '0.98em', color: '#728156', fontWeight: 500 }}>
            <input
              type="checkbox"
              checked={remember}
              onChange={e => setRemember(e.target.checked)}
              style={checkboxStyle}
            />
            Remember Me
          </label>
          <span style={linkStyle}>Forgot Password?</span>
        </div>
        
        <button style={buttonStyle} onClick={handleLogin}>Login</button>
        
        <div style={{ fontSize: '1em', color: '#728156', marginTop: '0.7em', textAlign: 'center' }}>
          Don't have an account?{' '}
          <span style={linkStyle} onClick={onSignup}>Sign up</span>
        </div>
        
        <div style={{ marginTop: '1.5em', fontSize: '0.95em', color: '#88976C', textAlign: 'center' }}>
          <span style={linkStyle} onClick={onBack}>Back to Home</span>
        </div>
      </div>
    </div>
  );
}

export default Login; 