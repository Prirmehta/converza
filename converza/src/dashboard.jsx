import React, { useState, useRef, useEffect } from 'react';

const navStyle = {
  width: '100vw',
  height: '50px',
  background: '#ffffff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 2.5vw',
  boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  fontWeight: 600,
  fontSize: '1.3rem',
  color: '#2c3e50',
  letterSpacing: '1px',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 10,
  borderBottom: '1px solid #e9ecef',
};

const navTitleStyle = {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontWeight: 700,
  fontSize: '1.4rem',
  color: '#2c3e50',
  letterSpacing: '0.5px',
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

const profileContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
};

const userNameStyle = {
  fontSize: '1rem',
  fontWeight: 600,
  color: '#2c3e50',
};

const dashboardBg = {
  minHeight: '100vh',
  background: '#f8f9fa',
  paddingTop: 50,
  display: 'flex',
  flexDirection: 'column',
};

const panelsRow = {
  display: 'flex',
  width: '100vw',
  height: 'calc(100vh - 50px)',
  marginTop: 0,
};

const leftPanel = {
  flex: '0 0 5%',
  background: '#ffffff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem 0',
  minWidth: 60,
  borderRight: '1px solid #e9ecef',
};

const iconContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '75px',
  width: '100%',
  marginTop: '70px',
};

const iconStyle = {
  width: '42px',
  height: '42px',
  color: '#6c757d',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  position: 'relative',
  padding: '12px',
  borderRadius: '8px',
  background: 'transparent',
};

const iconStyleHover = {
  color: '#28a745',
  background: 'rgba(40, 167, 69, 0.1)',
  boxShadow: '0 2px 8px rgba(40, 167, 69, 0.2)',
};

const tooltipStyle = {
  position: 'absolute',
  left: 'calc(50% + 20px)',
  transform: 'translateX(-50%)',
  bottom: '-35px',
  background: '#2c3e50',
  color: '#fff',
  padding: '6px 10px',
  borderRadius: '6px',
  fontSize: '0.8rem',
  whiteSpace: 'nowrap',
  opacity: 1,
  transition: 'opacity 0.2s',
  pointerEvents: 'none',
  zIndex: 1000,
  boxShadow: '0 2px 8px rgba(44, 62, 80, 0.3)',
};

const logoutIconStyle = {
  width: '42px',
  height: '42px',
  color: '#6c757d',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  position: 'relative',
  padding: '12px',
  borderRadius: '8px',
  background: 'transparent',
};

const midPanel = {
  flex: '0 0 75%',
  background: '#ffffff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  minWidth: 400,
  padding: '20px',
  position: 'relative',
};

const videoContainerStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px',
};

const topParticipantsStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  width: '100%',
  marginBottom: '15px',
  padding: '0 20px',
};

const smallVideoStyle = {
  width: '200px',
  height: '140px',
  borderRadius: '8px',
  background: '#f8f9fa',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  border: '1px solid #e9ecef',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  flex: '1',
};

const mainVideoStyle = {
  width: '80%',
  height: '60%',
  borderRadius: '12px',
  background: '#f8f9fa',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  border: '1px solid #e9ecef',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
  marginBottom: '15px',
};

const participantNameStyle = {
  position: 'absolute',
  bottom: '10px',
  left: '10px',
  background: 'rgba(44, 62, 80, 0.8)',
  color: '#fff',
  padding: '4px 8px',
  borderRadius: '4px',
  fontSize: '0.8rem',
  fontWeight: '600',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
};

const controlsStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '90%',
  padding: '15px 30px',
  background: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  border: '1px solid #e9ecef',
};

const volumeControlStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
};

const volumeBarStyle = {
  width: '100px',
  height: '6px',
  background: '#e9ecef',
  borderRadius: '3px',
  position: 'relative',
};

const volumeLevelStyle = (level) => ({
  width: `${level}%`,
  height: '100%',
  background: '#28a745',
  borderRadius: '3px',
  transition: 'width 0.3s ease',
});

const actionButtonsStyle = {
  display: 'flex',
  gap: '15px',
};

const controlButtonStyle = {
  width: '55px',
  height: '55px',
  borderRadius: '8px',
  border: 'none',
  background: '#f8f9fa',
  color: '#6c757d',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const controlButtonHoverStyle = {
  background: '#e9ecef',
  transform: 'scale(1.05)',
};

const leaveButtonStyle = {
  padding: '12px 24px',
  borderRadius: '8px',
  border: 'none',
  background: '#dc3545',
  color: '#fff',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  boxShadow: '0 2px 8px rgba(220, 53, 69, 0.3)',
};

const leaveButtonHoverStyle = {
  background: '#c82333',
  transform: 'scale(1.02)',
};

const rightPanel = {
  flex: '0 0 20%',
  background: '#ffffff',
  borderLeft: '1px solid #e9ecef',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative'
};

function Dashboard({ onBack, userName }) {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [hoveredControl, setHoveredControl] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [rightPanelView, setRightPanelView] = useState('chat'); // 'chat' or 'participants'
  const [isInCall, setIsInCall] = useState(true);
  const [meetingCode, setMeetingCode] = useState('');
  const [meetingStartTime, setMeetingStartTime] = useState(Date.now());
  const [currentTime, setCurrentTime] = useState(Date.now());
  const [volumeLevel, setVolumeLevel] = useState(50);
  const [showVolumePopup, setShowVolumePopup] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'Anna', message: 'Great presentation everyone!', time: '10:30 AM' },
    { sender: 'Mark', message: 'Thanks! Any questions?', time: '10:31 AM' },
    { sender: 'Marina', message: 'Can we discuss the timeline?', time: '10:32 AM' },
    { sender: 'Elizabeth', message: 'The timeline looks good to me.', time: '10:33 AM' },
    { sender: 'Anna', message: 'Perfect! Let\'s move to Q&A.', time: '10:34 AM' }
  ]);
  const [newChatMessage, setNewChatMessage] = useState('');
  const [agendaItems, setAgendaItems] = useState([
    { item: 'Project Overview', time: '15 min', id: 1 },
    { item: 'Q&A Session', time: '10 min', id: 2 },
    { item: 'Next Steps', time: '5 min', id: 3 }
  ]);
  const [newAgendaItem, setNewAgendaItem] = useState('');
  const profileRef = useRef(null);

  const handleIconClick = (iconName) => {
    console.log(`${iconName} clicked`);
    // Add functionality for each icon
  };

  const handleLogout = () => {
    onBack(); // Navigate back to main page
  };

  const handleControlClick = (control) => {
    if (control === 'mute') {
      setIsMuted(!isMuted);
    } else if (control === 'video') {
      setIsVideoOn(!isVideoOn);
    } else if (control === 'chat') {
      setRightPanelView('chat');
    } else if (control === 'participants') {
      setRightPanelView('participants');
    } else if (control === 'leave') {
      setIsInCall(false);
    }
  };

  const handleSendMessage = () => {
    if (newChatMessage.trim()) {
      const now = new Date();
      const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setChatMessages([...chatMessages, { 
        sender: userName, 
        message: newChatMessage.trim(), 
        time: timeString 
      }]);
      setNewChatMessage('');
    }
  };

  const handleAddAgendaItem = () => {
    if (newAgendaItem.trim()) {
      setAgendaItems([...agendaItems, { 
        item: newAgendaItem.trim(), 
        time: '5 min',
        id: Date.now() // Add unique ID for removal
      }]);
      setNewAgendaItem('');
    }
  };

  const handleRemoveAgendaItem = (id) => {
    setAgendaItems(agendaItems.filter(item => item.id !== id));
  };

  const handleVolumeBarClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = (clickX / rect.width) * 100;
    const newVolume = Math.max(0, Math.min(100, Math.round(percentage)));
    setVolumeLevel(newVolume);
    setShowVolumePopup(true);
    setTimeout(() => setShowVolumePopup(false), 2000);
  };

  const formatElapsedTime = () => {
    const elapsed = currentTime - meetingStartTime;
    const hours = Math.floor(elapsed / (1000 * 60 * 60));
    const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleJoinMeeting = () => {
    if (meetingCode.trim()) {
      setIsInCall(true);
      setMeetingStartTime(Date.now());
      setMeetingCode('');
    }
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

  // Live timer effect
  useEffect(() => {
    if (!isInCall) return;
    
    const timer = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000); // Update every second
    
    return () => clearInterval(timer);
  }, [isInCall]);

  // Volume control effect
  useEffect(() => {
    const handleVolumeChange = (e) => {
      // Listen for system volume changes
      if (e.key === 'ArrowUp' && e.ctrlKey) {
        e.preventDefault();
        // Simulate system volume increase
        const newVolume = Math.min(100, volumeLevel + 5);
        setVolumeLevel(newVolume);
        setShowVolumePopup(true);
        setTimeout(() => setShowVolumePopup(false), 2000);
      } else if (e.key === 'ArrowDown' && e.ctrlKey) {
        e.preventDefault();
        // Simulate system volume decrease
        const newVolume = Math.max(0, volumeLevel - 5);
        setVolumeLevel(newVolume);
        setShowVolumePopup(true);
        setTimeout(() => setShowVolumePopup(false), 2000);
      }
    };

    // Listen for media key events (volume up/down keys)
    const handleMediaKeys = (e) => {
      if (e.code === 'AudioVolumeUp') {
        e.preventDefault();
        const newVolume = Math.min(100, volumeLevel + 5);
        setVolumeLevel(newVolume);
        setShowVolumePopup(true);
        setTimeout(() => setShowVolumePopup(false), 2000);
      } else if (e.code === 'AudioVolumeDown') {
        e.preventDefault();
        const newVolume = Math.max(0, volumeLevel - 5);
        setVolumeLevel(newVolume);
        setShowVolumePopup(true);
        setTimeout(() => setShowVolumePopup(false), 2000);
      }
    };

    document.addEventListener('keydown', handleVolumeChange);
    document.addEventListener('keydown', handleMediaKeys);
    
    return () => {
      document.removeEventListener('keydown', handleVolumeChange);
      document.removeEventListener('keydown', handleMediaKeys);
    };
  }, [volumeLevel]);

  return (
    <div style={dashboardBg}>
      <div style={navStyle}>
        <div style={navTitleStyle}>Converza</div>
        <div ref={profileRef} style={profileContainerStyle}>
          <button
            style={profileCircleStyle}
            onClick={() => setProfileOpen((v) => !v)}
            aria-label="Profile"
          >
                      <svg height="24" width="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="4" />
            <path d="M16 20v-2a4 4 0 0 0-8 0v2" />
          </svg>
          </button>
          {profileOpen && (
            <div className="profile-dropdown-new">
              <div style={{ padding: '0.5rem 1rem', borderBottom: '1px solid #e9ecef', color: '#2c3e50', fontWeight: 600, fontSize: '0.9rem' }}>
                {userName}
              </div>
              <button className="dropdown-option" onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
      <div style={panelsRow}>
        <div style={leftPanel}>
          <div style={iconContainerStyle}>
            {/* Home Icon */}
            <div 
              style={hoveredIcon === 'home' ? { ...iconStyle, ...iconStyleHover } : iconStyle}
              onMouseEnter={() => setHoveredIcon('home')}
              onMouseLeave={() => setHoveredIcon(null)}
              onClick={() => handleIconClick('home')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9,22 9,12 15,12 15,22"/>
              </svg>
              {hoveredIcon === 'home' && <div style={tooltipStyle}>Home</div>}
            </div>

            {/* Calendar Icon */}
            <div 
              style={hoveredIcon === 'calendar' ? { ...iconStyle, ...iconStyleHover } : iconStyle}
              onMouseEnter={() => setHoveredIcon('calendar')}
              onMouseLeave={() => setHoveredIcon(null)}
              onClick={() => handleIconClick('calendar')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              {hoveredIcon === 'calendar' && <div style={tooltipStyle}>Schedule</div>}
            </div>

            {/* Video Call Icon */}
            <div 
              style={hoveredIcon === 'video' ? { ...iconStyle, ...iconStyleHover } : iconStyle}
              onMouseEnter={() => setHoveredIcon('video')}
              onMouseLeave={() => setHoveredIcon(null)}
              onClick={() => handleIconClick('video')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="23,7 16,12 23,17 23,7"/>
                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
              </svg>
              {hoveredIcon === 'video' && <div style={tooltipStyle}>Video Call</div>}
            </div>

            {/* Bell Icon */}
            <div 
              style={hoveredIcon === 'bell' ? { ...iconStyle, ...iconStyleHover } : iconStyle}
              onMouseEnter={() => setHoveredIcon('bell')}
              onMouseLeave={() => setHoveredIcon(null)}
              onClick={() => handleIconClick('bell')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
              {hoveredIcon === 'bell' && <div style={tooltipStyle}>Notifications</div>}
            </div>
          </div>

          {/* Logout Icon at Bottom */}
          <div 
            style={hoveredIcon === 'logout' ? { ...logoutIconStyle, ...iconStyleHover } : logoutIconStyle}
            onMouseEnter={() => setHoveredIcon('logout')}
            onMouseLeave={() => setHoveredIcon(null)}
            onClick={handleLogout}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16,17 21,12 16,7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            {hoveredIcon === 'logout' && <div style={tooltipStyle}>Logout</div>}
          </div>
        </div>
        <div style={isInCall ? midPanel : { ...midPanel, width: '95%', flex: '0 0 95%' }}>
          {isInCall ? (
            <div style={videoContainerStyle}>
              {/* Meeting Timer */}
                              <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  marginBottom: '3px',
                  width: 'fit-content',
                  margin: '0 auto 3px auto',
                  position: 'relative'
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#ff4444',
                    borderRadius: '50%',
                    border: '2px solid #fff',
                    boxShadow: '0 0 4px rgba(255, 68, 68, 0.5)'
                  }}></div>
                  <span style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#333',
                    fontFamily: 'monospace'
                  }}>{formatElapsedTime()}</span>
                  
                  {/* Volume Popup */}
                  {showVolumePopup && (
                    <div style={{
                      position: 'absolute',
                      top: '-60px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: '#2c3e50',
                      color: '#fff',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: '600',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                      zIndex: 1000,
                      whiteSpace: 'nowrap',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="11,5 6,9 2,9 2,15 6,15 11,19 11,5"/>
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
                      </svg>
                      Volume: {volumeLevel}%
                    </div>
                  )}
                </div>
              
              <div style={topParticipantsStyle}>
                <div style={smallVideoStyle}>
                  <div style={participantNameStyle}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                      <circle cx="12" cy="8" r="4"/>
                    </svg>
                    Mark
                  </div>
                </div>
                <div style={smallVideoStyle}>
                  <div style={participantNameStyle}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                      <circle cx="12" cy="8" r="4"/>
                    </svg>
                    Marina
                  </div>
                </div>
                <div style={smallVideoStyle}>
                  <div style={participantNameStyle}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                      <circle cx="12" cy="8" r="4"/>
                    </svg>
                    Elizabeth
                  </div>
                </div>
                <div style={smallVideoStyle}>
                  <div style={participantNameStyle}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                      <circle cx="12" cy="8" r="4"/>
                    </svg>
                    You
                  </div>
                </div>
              </div>
              
              <div style={mainVideoStyle}>
                <div style={participantNameStyle}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                    <circle cx="12" cy="8" r="4"/>
                  </svg>
                  Anna Nicholas
                </div>
              </div>
              
              <div style={controlsStyle}>
                <div style={volumeControlStyle}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="11,5 6,9 2,9 2,15 6,15 11,19 11,5"/>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
                  </svg>
                  <div style={{ ...volumeBarStyle, cursor: 'pointer' }} onClick={handleVolumeBarClick} onKeyDown={(e) => e.key === 'Enter' && handleVolumeBarClick(e)} tabIndex={0} role="slider" aria-label="Volume control" aria-valuenow={volumeLevel} aria-valuemin="0" aria-valuemax="100">
                    <div style={volumeLevelStyle(volumeLevel)}></div>
                  </div>
                </div>
                
                <div style={actionButtonsStyle}>
                  <button 
                    style={hoveredControl === 'mute' ? { ...controlButtonStyle, ...controlButtonHoverStyle } : controlButtonStyle}
                    onMouseEnter={() => setHoveredControl('mute')}
                    onMouseLeave={() => setHoveredControl(null)}
                    onClick={() => handleControlClick('mute')}
                  >
                    {isMuted ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                        <line x1="12" y1="19" x2="12" y2="23"/>
                        <line x1="8" y1="23" x2="16" y2="23"/>
                        <line x1="1" y1="1" x2="23" y2="23"/>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                        <line x1="12" y1="19" x2="12" y2="23"/>
                        <line x1="8" y1="23" x2="16" y2="23"/>
                      </svg>
                    )}
                  </button>
                  
                  <button 
                    style={hoveredControl === 'video' ? { ...controlButtonStyle, ...controlButtonHoverStyle } : controlButtonStyle}
                    onMouseEnter={() => setHoveredControl('video')}
                    onMouseLeave={() => setHoveredControl(null)}
                    onClick={() => handleControlClick('video')}
                  >
                    {isVideoOn ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 6h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"/>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 6h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"/>
                        <line x1="1" y1="1" x2="23" y2="23"/>
                      </svg>
                    )}
                  </button>
                  
                  <button 
                    style={hoveredControl === 'share' ? { ...controlButtonStyle, ...controlButtonHoverStyle } : controlButtonStyle}
                    onMouseEnter={() => setHoveredControl('share')}
                    onMouseLeave={() => setHoveredControl(null)}
                    onClick={() => handleControlClick('share')}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="18" cy="5" r="3"/>
                      <circle cx="6" cy="12" r="3"/>
                      <circle cx="18" cy="19" r="3"/>
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                    </svg>
                  </button>
                  
                  <button 
                    style={rightPanelView === 'chat' ? { ...controlButtonStyle, background: '#28a745', color: '#fff' } : hoveredControl === 'chat' ? { ...controlButtonStyle, ...controlButtonHoverStyle } : controlButtonStyle}
                    onMouseEnter={() => setHoveredControl('chat')}
                    onMouseLeave={() => setHoveredControl(null)}
                    onClick={() => handleControlClick('chat')}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                  </button>
                  
                  <button 
                    style={rightPanelView === 'participants' ? { ...controlButtonStyle, background: '#28a745', color: '#fff' } : hoveredControl === 'participants' ? { ...controlButtonStyle, ...controlButtonHoverStyle } : controlButtonStyle}
                    onMouseEnter={() => setHoveredControl('participants')}
                    onMouseLeave={() => setHoveredControl(null)}
                    onClick={() => handleControlClick('participants')}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </button>
                </div>
                
                <button 
                  style={hoveredControl === 'leave' ? { ...leaveButtonStyle, ...leaveButtonHoverStyle } : leaveButtonStyle}
                  onMouseEnter={() => setHoveredControl('leave')}
                  onMouseLeave={() => setHoveredControl(null)}
                  onClick={() => handleControlClick('leave')}
                >
                  Leave Call
                </button>
              </div>
            </div>
          ) : (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              padding: '40px',
              background: '#ffffff'
            }}>
              <div style={{
                textAlign: 'center',
                marginBottom: '40px'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: '#28a745',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                  boxShadow: '0 4px 16px rgba(40, 167, 69, 0.2)'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                    <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 6h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"/>
                  </svg>
                </div>
                <h2 style={{
                  fontSize: '32px',
                  fontWeight: '700',
                  color: '#2c3e50',
                  marginBottom: '8px',
                  textAlign: 'center'
                }}>
                  Welcome back, {userName}!
                </h2>
                <p style={{
                  fontSize: '16px',
                  color: '#6c757d',
                  margin: '0',
                  textAlign: 'center'
                }}>
                  Ready to join your next meeting?
                </p>
              </div>
              
              <div style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '40px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                width: '100%',
                maxWidth: '500px',
                border: '1px solid #e9ecef'
              }}>
                <div style={{
                  textAlign: 'center',
                  marginBottom: '30px'
                }}>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#2c3e50',
                    marginBottom: '8px'
                  }}>
                    Join a Meeting
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6c757d',
                    margin: '0'
                  }}>
                    Enter the meeting code to join
                  </p>
                </div>
                
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px'
                }}>
                  <div style={{
                    position: 'relative'
                  }}>
                    <div style={{
                      position: 'absolute',
                      left: '16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#6c757d'
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 6h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"/>
                      </svg>
                    </div>
                    <input 
                      type="text" 
                      placeholder="Enter meeting code..." 
                      value={meetingCode}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^0-9]/g, '');
                        setMeetingCode(value);
                      }}
                      onKeyPress={(e) => e.key === 'Enter' && handleJoinMeeting()}
                      maxLength="8"
                      style={{
                        width: '100%',
                        padding: '16px 16px 16px 48px',
                        border: '1px solid #ced4da',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none',
                        transition: 'all 0.2s ease',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  
                  <button 
                    onClick={handleJoinMeeting}
                    disabled={!meetingCode.trim()}
                    style={{
                      width: '100%',
                      padding: '16px 24px',
                      background: meetingCode.trim() ? '#28a745' : '#e9ecef',
                      color: meetingCode.trim() ? '#fff' : '#6c757d',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: meetingCode.trim() ? 'pointer' : 'not-allowed',
                      transition: 'all 0.2s ease',
                      boxShadow: meetingCode.trim() ? '0 2px 8px rgba(40, 167, 69, 0.3)' : 'none'
                    }}
                  >
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px'
                    }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 6h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"/>
                      </svg>
                      Join Meeting
                    </div>
                  </button>
                </div>
                
                <div style={{
                  marginTop: '12px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    fontSize: '11px',
                    color: '#6c757d'
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                    <span style={{ color: '#8fbc8f' }}>Meeting codes are 6-8 digits (numbers only)</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div style={rightPanel}>
          {isInCall ? (
            <>
              {/* Meeting Agenda Section - Always Visible */}
              <div style={{
                padding: '15px',
                borderBottom: '1px solid rgba(114, 129, 86, 0.2)'
              }}>
                                    <h4 style={{
                      margin: '0 0 10px 0',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#2c3e50'
                    }}>Meeting Agenda</h4>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  marginBottom: '10px'
                }}>
                  {agendaItems.map((item) => (
                    <div key={item.id} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '12px',
                      color: '#666',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      position: 'relative'
                    }}>
                      <div style={{
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#28a745',
                        borderRadius: '50%'
                      }}></div>
                      <span style={{ flex: 1 }}>{item.item} ({item.time})</span>
                      <svg 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="#dc3545" 
                        strokeWidth="2" 
                        style={{ 
                          opacity: 0.6, 
                          cursor: 'pointer',
                          transition: 'opacity 0.2s ease'
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.opacity = '1';
                          e.currentTarget.title = 'Click to remove this agenda item';
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.opacity = '0.6';
                          e.currentTarget.title = '';
                        }}
                        onClick={() => handleRemoveAgendaItem(item.id)}
                      >
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                      </svg>
                    </div>
                  ))}
                </div>
                
                {/* Agenda Input Bar */}
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  alignItems: 'center'
                }}>
                  <input 
                    type="text" 
                    placeholder="Add agenda item..." 
                    value={newAgendaItem}
                    onChange={(e) => setNewAgendaItem(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddAgendaItem()}
                                          style={{
                        flex: 1,
                        padding: '6px 10px',
                        border: '1px solid #ced4da',
                        borderRadius: '4px',
                        fontSize: '11px',
                        outline: 'none'
                      }}
                  />
                  <button 
                    onClick={handleAddAgendaItem}
                    style={{
                      padding: '6px 10px',
                      background: '#28a745',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '11px',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '32px',
                      height: '28px'
                    }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="5" x2="12" y2="19"/>
                      <line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Toggle Buttons */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '10px',
                padding: '15px',
                borderBottom: '1px solid #e9ecef'
              }}>
                <button 
                  style={{
                    background: rightPanelView === 'chat' ? '#28a745' : '#f8f9fa',
                    color: rightPanelView === 'chat' ? '#fff' : '#6c757d',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: '600',
                    transition: 'all 0.2s ease'
                  }}
                  onClick={() => setRightPanelView('chat')}
                >
                  Chat
                </button>
                <button 
                  style={{
                    background: rightPanelView === 'participants' ? '#28a745' : '#f8f9fa',
                    color: rightPanelView === 'participants' ? '#fff' : '#6c757d',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '8px 16px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: '600',
                    transition: 'all 0.2s ease'
                  }}
                  onClick={() => setRightPanelView('participants')}
                >
                  Participants
                </button>
              </div>
              
              {/* Content Area */}
              <div style={{
                flex: 1,
                padding: '15px',
                overflowY: 'auto'
              }}>
                {rightPanelView === 'chat' && (
                  <div>
                    <h4 style={{
                      margin: '0 0 10px 0',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#2c3e50'
                    }}>Group Chat</h4>
                    <div style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '8px',
                      padding: '10px',
                      height: '300px',
                      overflowY: 'auto',
                      marginBottom: '10px',
                      border: '1px solid #e9ecef'
                    }}>
                      {chatMessages.map((msg, index) => (
                        <div key={index} style={{
                          marginBottom: '8px',
                          fontSize: '12px'
                        }}>
                          <strong style={{color: '#2c3e50'}}>{msg.sender}:</strong> 
                          <span style={{color: '#6c757d'}}> {msg.message}</span>
                          <span style={{color: '#999', fontSize: '10px', marginLeft: '8px'}}>{msg.time}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Chat Input Bar */}
                    <div style={{
                      display: 'flex',
                      gap: '8px',
                      alignItems: 'center'
                    }}>
                      <input 
                        type="text" 
                        placeholder="Type your message..." 
                        value={newChatMessage}
                        onChange={(e) => setNewChatMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        style={{
                          flex: 1,
                          padding: '8px 12px',
                          border: '1px solid #ced4da',
                          borderRadius: '6px',
                          fontSize: '12px',
                          outline: 'none'
                        }}
                      />
                      <button 
                        onClick={handleSendMessage}
                        style={{
                          padding: '8px 12px',
                          background: '#28a745',
                          color: '#fff',
                          border: 'none',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          fontSize: '12px',
                          fontWeight: '600',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '40px',
                          height: '36px'
                        }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13"/>
                        <polygon points="22,2 15,22 11,13 2,9"/>
                      </svg>
                    </button>
                  </div>
                </div>
                )}
                
                {rightPanelView === 'participants' && (
                  <div>
                    <h4 style={{
                      margin: '0 0 10px 0',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#2c3e50'
                    }}>Participants (4)</h4>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(40, 167, 69, 0.1)'
                      }}>
                        <div style={{
                          width: '8px',
                          height: '8px',
                          backgroundColor: '#4CAF50',
                          borderRadius: '50%'
                        }}></div>
                        <span style={{fontSize: '12px', color: '#2c3e50', flex: 1}}>Anna Nicholas (Host)</span>
                        <div style={{display: 'flex', gap: '4px'}}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2">
                            <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 6h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"/>
                          </svg>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2">
                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                            <line x1="12" y1="19" x2="12" y2="23"/>
                            <line x1="8" y1="23" x2="16" y2="23"/>
                          </svg>
                        </div>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px',
                        borderRadius: '6px'
                      }}>
                        <div style={{
                          width: '8px',
                          height: '8px',
                          backgroundColor: '#4CAF50',
                          borderRadius: '50%'
                        }}></div>
                        <span style={{fontSize: '12px', color: '#2c3e50', flex: 1}}>Mark Johnson</span>
                        <div style={{display: 'flex', gap: '4px'}}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2">
                            <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 6h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"/>
                          </svg>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DC586D" strokeWidth="2">
                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                            <line x1="12" y1="19" x2="12" y2="23"/>
                            <line x1="8" y1="23" x2="16" y2="23"/>
                            <line x1="1" y1="1" x2="23" y2="23"/>
                          </svg>
                        </div>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px',
                        borderRadius: '6px'
                      }}>
                        <div style={{
                          width: '8px',
                          height: '8px',
                          backgroundColor: '#4CAF50',
                          borderRadius: '50%'
                        }}></div>
                        <span style={{fontSize: '12px', color: '#2c3e50', flex: 1}}>Marina Smith</span>
                        <div style={{display: 'flex', gap: '4px'}}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#DC586D" strokeWidth="2">
                            <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 6h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"/>
                            <line x1="1" y1="1" x2="23" y2="23"/>
                          </svg>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2">
                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                            <line x1="12" y1="19" x2="12" y2="23"/>
                            <line x1="8" y1="23" x2="16" y2="23"/>
                          </svg>
                        </div>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px',
                        borderRadius: '6px'
                      }}>
                        <div style={{
                          width: '8px',
                          height: '8px',
                          backgroundColor: '#4CAF50',
                          borderRadius: '50%'
                        }}></div>
                        <span style={{fontSize: '12px', color: '#2c3e50', flex: 1}}>Elizabeth Brown</span>
                        <div style={{display: 'flex', gap: '4px'}}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2">
                            <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 6h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"/>
                          </svg>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2">
                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                            <line x1="12" y1="19" x2="12" y2="23"/>
                            <line x1="8" y1="23" x2="16" y2="23"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Dashboard; 