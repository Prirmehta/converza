import { useState, useRef, useEffect } from 'react';
import './App.css';

function Spiral() {
  // Enhanced metallic spiral: more loops, gradient, subtle shadow
  return (
    <svg className="spiral-svg" width="32" height="100%" viewBox="0 0 32 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '32px', height: '100%', display: 'block' }}>
      <defs>
        <linearGradient id="spiralMetal" x1="0" y1="0" x2="32" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E7F5DC" />
          <stop offset="0.5" stopColor="#B6C998" />
          <stop offset="1" stopColor="#88976C" />
        </linearGradient>
        <filter id="spiralShadow" x="-4" y="-4" width="40" height="408" filterUnits="userSpaceOnUse">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#72815655" />
        </filter>
      </defs>
      <rect x="14" y="0" width="4" height="400" rx="2" fill="url(#spiralMetal)" filter="url(#spiralShadow)" />
      {[...Array(18)].map((_, i) => (
        <ellipse key={i} cx="16" cy={18 + i * 21} rx="8" ry="7" fill="#fff" stroke="url(#spiralMetal)" strokeWidth="2.5" filter="url(#spiralShadow)" />
      ))}
      {[...Array(18)].map((_, i) => (
        <ellipse key={i+100} cx="16" cy={18 + i * 21} rx="4" ry="3.5" fill="#B6C998" filter="url(#spiralShadow)" />
      ))}
    </svg>
  );
}

const TOTAL_PAGES = 3;

const notebookBgStyle = {
  width: '100vw',
  height: '100vh',
  background: 'linear-gradient(135deg, #E7F5DC 0%, #CFE1B9 40%, #B6C998 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
};
const notebookContainerStyle = {
  width: '1047px',
  height: '601px',
  minWidth: '478px',
  minHeight: '315px',
  background: 'none',
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'center',
  position: 'relative',
  boxShadow: '0 8px 32px #72815622, 0 2px 0 #72815611',
  borderRadius: '1.5em',
  marginTop: '45px',
};
const notebookPageStyle = {
  width: '48%',
  height: '100%',
  background: '#FFF',
  boxShadow: '0 4px 16px #72815611',
  borderRadius: '1.2em',
  margin: '0 0.5%',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'box-shadow 0.2s, transform 0.7s cubic-bezier(.68,-0.55,.27,1.55)',
  cursor: 'pointer',
  overflow: 'hidden',
};
const notebookSpiralStyle = {
  width: '24px',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 3,
  position: 'relative',
};
const pageIndicatorStyle = {
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: '0.5vh',
  width: '100vw',
  margin: '0 auto',
  fontSize: '1.2rem',
  color: '#728156',
  fontWeight: 600,
  textAlign: 'center',
  letterSpacing: '1px',
  zIndex: 20,
};
const navbarStyle = {
  width: 'calc(100vw + 10px)',
  height: '50px',
  background: 'linear-gradient(90deg, #FFF 0%, #E7F5DC 100%)',
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 30,
  boxShadow: '0 2px 12px #72815611',
  padding: '0 2.5vw',
};
const navTitleStyle = {
  fontFamily: 'Impact, Charcoal, Arial Black, sans-serif',
  fontWeight: 900,
  fontSize: '1.6rem',
  color: '#728156',
  letterSpacing: '2px',
  textShadow: '0 2px 12px #72815633',
  userSelect: 'none',
  lineHeight: 1,
  cursor: 'pointer',
  transition: 'color 0.18s',
};
const profileCircleStyle = {
  width: '38px',
  height: '38px',
  borderRadius: '50%',
  border: 'none',
  background: '#28a745',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 4px rgba(40,167,69,0.2)',
  cursor: 'pointer',
  transition: 'transform 0.18s, box-shadow 0.18s',
  outline: 'none',
  padding: 0,
};

const whyPoints = [
  {
    title: 'Built for Authentic Communication',
    desc: 'Converza goes beyond basic messaging—it\'s designed to make conversations more meaningful, structured, and impactful, whether for teams, communities, or individuals.'
  },
  {
    title: 'Smart, Scalable, Secure',
    desc: 'With a focus on reliability and privacy, Converza adapts to your needs. From 1-on-1 talks to large discussions, it scales effortlessly—without compromising security.'
  },
  {
    title: 'Seamless Experience Across Time Zones',
    desc: 'Whether you\'re chatting late at night or across continents, Converza\'s 24/7 design ensures your voice is heard—anytime, anywhere.'
  },
  {
    title: 'Minimal Design, Maximum Focus',
    desc: 'No clutter. Just clean, intuitive UI that keeps you focused on what matters—conversation.'
  },
  {
    title: 'Designed for Everyone',
    desc: 'From students and creators to teams and global communities—Converza is flexible for any use case.'
  },
];

const howToUseSteps = [
  {
    title: 'Step 1: Create Your Space',
    desc: 'Sign up and start a conversation room—personal or public.'
  },
  {
    title: 'Step 2: Invite & Connect',
    desc: 'Add friends, colleagues, or participants via link or email.'
  },
  {
    title: 'Step 3: Start Talking',
    desc: 'Use voice, video, or chat. You can share files, set topics, or moderate discussions.'
  },
  {
    title: 'Step 4: Stay Organized',
    desc: 'Pin messages, set time zones, or tag key points in the discussion for future reference.'
  },
  {
    title: 'Step 5: Come Back Anytime',
    desc: 'Converza keeps your space alive—jump back into the conversation whenever you\'re ready.'
  },
];

function AnimatedList({ items, show, resetKey }) {
  const [visible, setVisible] = useState(0);
  useEffect(() => {
    if (!show) return;
    setVisible(0);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setVisible(i);
      if (i >= items.length) clearInterval(interval);
    }, 400);
    return () => clearInterval(interval);
  }, [show, items.length, resetKey]);
  return (
    <ul style={{ width: '90%', maxWidth: 420, margin: '0 auto', padding: 0, listStyle: 'none', textAlign: 'center' }}>
      {items.map((pt, i) => (
        <li key={pt.title} style={{
          opacity: show && i < visible ? 1 : 0,
          transform: show && i < visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.4s, transform 0.4s',
          background: '#E7F5DC',
          borderRadius: '1em',
          margin: '1.2em 0',
          padding: '1.1em 1.2em 1em 1.2em',
          fontSize: '1.1rem',
          color: '#728156',
          fontWeight: 600,
          boxShadow: '0 2px 12px #72815611',
          borderLeft: '5px solid #88976C',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <div style={{ fontWeight: 800, fontSize: '1.15em', marginBottom: '0.3em', color: '#728156' }}>{pt.title}</div>
          <div style={{ fontWeight: 500, color: '#88976C', fontSize: '1em', maxWidth: 420 }}>{pt.desc}</div>
        </li>
      ))}
    </ul>
  );
}

function ExploreNow({ onBackToMain, onLogin, onSignup }) {
  const [page, setPage] = useState(1);
  const [flipping, setFlipping] = useState(null); // 'left' or 'right' or null
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  const canFlipBack = page > 1 && !flipping;
  const canFlipForward = page < TOTAL_PAGES && !flipping;

  const handleFlipForward = () => {
    if (!canFlipForward) return;
    setFlipping('right');
    setTimeout(() => {
      setPage(p => p + 1);
      setFlipping(null);
    }, 900);
  };
  const handleFlipBack = () => {
    if (!canFlipBack) return;
    setFlipping('left');
    setTimeout(() => {
      setPage(p => p - 1);
      setFlipping(null);
    }, 900);
  };

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

  // Book page content logic
  let leftContent = null;
  let rightContent = null;
  if (page === 1) {
    leftContent = (
      <div style={{ width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <div style={{ fontSize: '3.2rem', fontWeight: 900, color: '#728156', letterSpacing: '2px', marginBottom: '0.5em', fontFamily: 'Impact, Charcoal, Arial Black, sans-serif' }}>Converza</div>
        <div style={{ fontSize: '1.5rem', color: '#88976C', fontWeight: 600 }}>Connect. Speak. Grow.</div>
      </div>
    );
    rightContent = null;
  } else if (page === 2) {
    leftContent = (
      <div style={{ width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <div style={{ fontSize: '2rem', fontWeight: 800, color: '#728156', marginBottom: '1em', fontFamily: 'Impact, Charcoal, Arial Black, sans-serif' }}>Why Converza?</div>
        <AnimatedList items={whyPoints.slice(0, 2)} show={true} resetKey={page} />
      </div>
    );
    rightContent = (
      <div style={{ width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <AnimatedList items={whyPoints.slice(2)} show={true} resetKey={page} />
      </div>
    );
  } else if (page === 3) {
    leftContent = (
      <div style={{ width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <div style={{ fontSize: '2rem', fontWeight: 800, color: '#728156', marginBottom: '1em', fontFamily: 'Impact, Charcoal, Arial Black, sans-serif' }}>How to Use Converza?</div>
        <AnimatedList items={howToUseSteps.slice(0, 3)} show={true} resetKey={page} />
      </div>
    );
    rightContent = (
      <div style={{ width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <AnimatedList items={howToUseSteps.slice(3)} show={true} resetKey={page} />
      </div>
    );
  } else if (page === 4) {
    leftContent = null;
    rightContent = null;
  }

  return (
    <div className="notebook-bg" style={notebookBgStyle}>
      <div style={navbarStyle}>
        <div
          style={navTitleStyle}
          onClick={onBackToMain}
          onMouseOver={e => e.currentTarget.style.color = '#88976C'}
          onMouseOut={e => e.currentTarget.style.color = '#728156'}
        >
          Converza
        </div>
        <div ref={profileRef}>
          <button
            className="profile-circle"
            style={profileCircleStyle}
            onClick={() => setProfileOpen((v) => !v)}
            aria-label="Profile"
          >
            <svg height="24" width="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      </div>
      <div className="notebook-container" style={notebookContainerStyle}>
        {/* Left Page (flip back) */}
        <div
          className={`notebook-page left-page${canFlipBack ? ' clickable' : ''}${flipping === 'left' ? ' flipping' : ''}`}
          style={notebookPageStyle}
          onClick={canFlipBack ? handleFlipBack : undefined}
        >
          {leftContent}
        </div>
        {/* Spiral Binding */}
        <div className="notebook-spiral" style={notebookSpiralStyle}>
          <Spiral />
        </div>
        {/* Right Page (flip forward) */}
        <div
          className={`notebook-page right-page${canFlipForward ? '' : ' disabled'}${flipping === 'right' ? ' flipping' : ''}`}
          style={page === TOTAL_PAGES ? { ...notebookPageStyle, background: '#fff', backgroundImage: undefined, backdropFilter: undefined, WebkitBackdropFilter: undefined } : notebookPageStyle}
          onClick={canFlipForward ? handleFlipForward : undefined}
        >
          {rightContent}
          {canFlipForward && (
            <div
              style={{
                position: 'absolute',
                right: 10.5,
                bottom: 18,
                cursor: 'pointer',
                zIndex: 10,
                width: 28,
                height: 28,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onClick={e => { e.stopPropagation(); handleFlipForward(); }}
              onMouseEnter={e => e.currentTarget.querySelector('.tooltip').style.opacity = 1}
              onMouseLeave={e => e.currentTarget.querySelector('.tooltip').style.opacity = 0}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="11" fill="#E7F5DC" />
                <path d="M9 7l5 5-5 5" stroke="#728156" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="tooltip" style={{ opacity: 0, transition: 'opacity 0.2s', position: 'absolute', bottom: 32, right: 0, left: 'auto', background: '#728156', color: '#fff', padding: '6px 14px', borderRadius: '8px', fontSize: '0.95rem', whiteSpace: 'nowrap', boxShadow: '0 2px 8px #72815633', zIndex: 20, pointerEvents: 'none' }}>
                Click here to flip
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="notebook-page-indicator" style={pageIndicatorStyle}>{page} / {TOTAL_PAGES}</div>
    </div>
  );
}

export default ExploreNow;
