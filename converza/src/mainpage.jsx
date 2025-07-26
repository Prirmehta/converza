import { useState, useRef, useEffect } from 'react';
import './App.css';

const VIDEO_CALL_GIF =
  'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2liM29kNDhqNXF6bjdhaWwyY25oazc2eWFsMnJuamNyYzU5eDFqMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/emBGe6F73aPZvBIELK/giphy.gif';

const mainBgStyle = {
  position: 'relative',
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  background: 'none', // Ensure no background color
};
const bgGifStyle = {
  position: 'fixed',
  top: 0, left: 0, right: 0, bottom: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  filter: 'blur(8px) brightness(0.7)',
  pointerEvents: 'none',
};
const contentStyle = {
  position: 'relative',
  zIndex: 2,
  margin: 0,
  padding: 0,
  textAlign: 'center',
  color: '#728156',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  background: 'none', // Ensure no background color
};
const mainHeadingStyle = {
  fontSize: '4rem',
  fontWeight: 800,
  letterSpacing: '2px',
  color: '#FFFFFF',
  textShadow: '0 4px 32px #72815655, 0 1px 0 #728156',
  marginBottom: '0.2em',
};
const subHeadingStyle = {
  fontSize: '2rem',
  fontWeight: 400,
  color: '#E7F5DC',
  marginBottom: '2.5em',
};
const exploreBtnStyle = {
  fontSize: '1.05rem',
  padding: '0.5em 1.5em',
  borderRadius: '2em',
  background: 'linear-gradient(90deg, #88976C 60%, #728156 100%)',
  color: '#fff',
  border: 'none',
  fontWeight: 700,
  boxShadow: '0 2px 16px #72815633',
  cursor: 'pointer',
  transition: 'background 0.2s, transform 0.1s',
  marginTop: '1.5em',
};
const profileContainerStyle = {
  position: 'fixed',
  top: '2rem',
  right: '2rem',
  zIndex: 10,
};
const profileCircleStyle = {
  width: '38px',
  height: '38px',
  clipPath: 'polygon(60% 0%, 100% 20%, 90% 70%, 70% 100%, 30% 100%, 0% 70%, 10% 20%, 40% 0%)',
  border: 'none',
  background: 'linear-gradient(135deg, #E7F5DC 0%, #CFE1B9 30%, #B6C998 60%, #88976C 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 16px #72815633',
  cursor: 'pointer',
  transition: 'transform 0.18s, box-shadow 0.18s',
  outline: 'none',
  padding: 0,
};

function MainPage({ onExplore, onLogin, onSignup }) {
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    if (!profileOpen) return;
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [profileOpen]);

  return (
    <div className="main-bg" style={mainBgStyle}>
      {/* Profile Icon at Top Right */}
      <div className="profile-container" ref={profileRef} style={profileContainerStyle}>
        <button
          className="profile-circle"
          style={profileCircleStyle}
          onClick={() => setProfileOpen((v) => !v)}
          aria-label="Profile"
        >
          <svg height="24" width="24" viewBox="0 0 24 24" fill="none" stroke="#728156" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="4" />
            <path d="M16 20v-2a4 4 0 0 0-8 0v2" />
          </svg>
        </button>
        {profileOpen && (
          <div className="profile-dropdown-new">
            <button className="dropdown-option" onClick={onSignup}>Sign Up</button>
            <button className="dropdown-option" onClick={onLogin}>Login</button>
          </div>
        )}
      </div>
      {/* Main Content */}
      <div className="content" style={contentStyle}>
        <h1 className="main-heading" style={mainHeadingStyle}>Converza</h1>
        <h2 className="sub-heading" style={subHeadingStyle}>Connect. Speak. Grow.</h2>
        <button className="explore-btn-small purple" style={exploreBtnStyle} onClick={onExplore}>Explore Now</button>
      </div>
      {/* Blurred GIF background */}
      <div className="bg-gif" style={{ ...bgGifStyle, backgroundImage: `url(${VIDEO_CALL_GIF})` }} />
    </div>
  );
}

export default MainPage;
