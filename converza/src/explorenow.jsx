import { useState } from 'react';
import './App.css';

function Spiral() {
  return (
    <svg className="spiral-svg" width="24" height="100%" viewBox="0 0 24 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '24px', height: '100%', display: 'block' }}>
      {[...Array(16)].map((_, i) => (
        <rect key={i} x="8" y={20 + i * 22} width="8" height="16" rx="4" fill="#bbb" />
      ))}
    </svg>
  );
}

const TOTAL_PAGES = 5;

const notebookBgStyle = {
  width: '100vw',
  height: '100vh',
  background: '#ede9fe',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
};
const notebookContainerStyle = {
  width: '700px',
  height: '420px',
  minWidth: '320px',
  minHeight: '220px',
  background: 'none',
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'center',
  position: 'relative',
  boxShadow: '0 4px 32px #a78bfa22, 0 1.5px 0 #a78bfa11',
  borderRadius: '1.5em',
};
const notebookPageStyle = {
  width: '48%',
  height: '100%',
  background: '#fff',
  boxShadow: '0 2px 12px #a78bfa11',
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
const flapTextStyle = {
  fontSize: '1.2rem',
  color: '#a78bfa',
  textAlign: 'center',
  fontWeight: 500,
  pointerEvents: 'none',
};
const pageIndicatorStyle = {
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: '4vh',
  width: '100vw',
  margin: '0 auto',
  fontSize: '1.2rem',
  color: '#7c3aed',
  fontWeight: 600,
  textAlign: 'center',
  letterSpacing: '1px',
  zIndex: 20,
};

function ExploreNow() {
  const [page, setPage] = useState(1);
  const [flipping, setFlipping] = useState(null); // 'left' or 'right' or null

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

  return (
    <div className="notebook-bg" style={notebookBgStyle}>
      <div className="notebook-container" style={notebookContainerStyle}>
        {/* Left Page (flip back) */}
        <div
          className={`notebook-page left-page${canFlipBack ? ' clickable' : ''}${flipping === 'left' ? ' flipping' : ''}`}
          style={notebookPageStyle}
          onClick={handleFlipBack}
        >
          {canFlipBack && <div className="flap-text" style={flapTextStyle}>Click to go back</div>}
        </div>
        {/* Spiral Binding */}
        <div className="notebook-spiral" style={notebookSpiralStyle}>
          <Spiral />
        </div>
        {/* Right Page (flip forward) */}
        <div
          className={`notebook-page right-page${canFlipForward ? '' : ' disabled'}${flipping === 'right' ? ' flipping' : ''}`}
          style={notebookPageStyle}
          onClick={handleFlipForward}
        >
          {canFlipForward
            ? <div className="flap-text" style={flapTextStyle}>Click to turn page</div>
            : <div className="flap-text" style={flapTextStyle}>End of notebook</div>}
        </div>
      </div>
      <div className="notebook-page-indicator" style={pageIndicatorStyle}>{page} / {TOTAL_PAGES}</div>
    </div>
  );
}

export default ExploreNow;
