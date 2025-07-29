import React, { useState, useRef, useEffect } from 'react';

const navStyle = {
  width: '100vw',
  height: '50px',
  background: 'linear-gradient(90deg, #FFF 0%, #E7F5DC 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 2.5vw',
  boxShadow: '0 2px 12px #72815611',
  fontWeight: 800,
  fontSize: '1.3rem',
  color: '#728156',
  letterSpacing: '1.5px',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 10,
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
  clipPath: 'polygon(60% 0%, 100% 20%, 90% 70%, 70% 100%, 30% 100%, 0% 70%, 10% 20%, 40% 0%)',
  border: 'none',
  background: 'linear-gradient(135deg, #E7F5DC 0%, #CFE1B9 30%, #B6C998 60%, #88976C 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 8px #72815622',
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
  color: '#728156',
};

const dashboardBg = {
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #E7F5DC 0%, #CFE1B9 40%, #B6C998 100%)',
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
  background: 'rgba(114, 129, 86, 0.08)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '2rem 0',
  minWidth: 60,
  boxShadow: '4px 0 12px rgba(114, 129, 86, 0.3), 2px 0 6px rgba(114, 129, 86, 0.15), 1px 0 3px rgba(114, 129, 86, 0.08)',
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
  color: '#728156',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  position: 'relative',
  padding: '12px',
  borderRadius: '8px',
  background: 'transparent',
};

const iconStyleHover = {
  color: '#88976C',
  background: 'rgba(231, 245, 220, 0.6)',
  boxShadow: '0 2px 8px rgba(114, 129, 86, 0.2)',
};

const tooltipStyle = {
  position: 'absolute',
  left: 'calc(50% + 20px)',
  transform: 'translateX(-50%)',
  bottom: '-35px',
  background: '#728156',
  color: '#fff',
  padding: '6px 10px',
  borderRadius: '6px',
  fontSize: '0.8rem',
  whiteSpace: 'nowrap',
  opacity: 1,
  transition: 'opacity 0.2s',
  pointerEvents: 'none',
  zIndex: 1000,
  boxShadow: '0 2px 8px rgba(114, 129, 86, 0.3)',
};

const logoutIconStyle = {
  width: '42px',
  height: '42px',
  color: '#728156',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  position: 'relative',
  padding: '12px',
  borderRadius: '8px',
  background: 'transparent',
};

const midPanel = {
  flex: '0 0 75%',
  background: 'rgba(255,255,255,0.95)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  minWidth: 400,
  boxShadow: '0 2px 24px #72815611',
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
  borderRadius: '12px',
  background: 'linear-gradient(135deg, #E7F5DC 0%, #CFE1B9 100%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  border: '2px solid #CFE1B9',
  boxShadow: '0 4px 12px rgba(114, 129, 86, 0.2)',
  flex: '1',
};

const mainVideoStyle = {
  width: '80%',
  height: '60%',
  borderRadius: '16px',
  background: 'linear-gradient(135deg, #E7F5DC 0%, #CFE1B9 100%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  border: '3px solid #CFE1B9',
  boxShadow: '0 8px 24px rgba(114, 129, 86, 0.3)',
  marginBottom: '15px',
};

const participantNameStyle = {
  position: 'absolute',
  bottom: '10px',
  left: '10px',
  background: 'rgba(114, 129, 86, 0.8)',
  color: '#fff',
  padding: '4px 8px',
  borderRadius: '6px',
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
  background: 'rgba(255, 255, 255, 0.9)',
  borderRadius: '12px',
  boxShadow: '0 2px 12px rgba(114, 129, 86, 0.1)',
};

const volumeControlStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
};

const volumeBarStyle = {
  width: '100px',
  height: '6px',
  background: '#CFE1B9',
  borderRadius: '3px',
  position: 'relative',
};

const volumeLevelStyle = {
  width: '50%',
  height: '100%',
  background: '#728156',
  borderRadius: '3px',
};

const actionButtonsStyle = {
  display: 'flex',
  gap: '15px',
};

const controlButtonStyle = {
  width: '55px',
  height: '55px',
  borderRadius: '8px',
  border: 'none',
  background: '#E7F5DC',
  color: '#728156',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease',
  boxShadow: '0 2px 8px rgba(114, 129, 86, 0.2)',
};

const controlButtonHoverStyle = {
  background: '#CFE1B9',
  transform: 'scale(1.05)',
};

const leaveButtonStyle = {
  padding: '12px 24px',
  borderRadius: '8px',
  border: 'none',
  background: '#DC586D',
  color: '#fff',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  boxShadow: '0 2px 8px rgba(220, 88, 109, 0.3)',
};

const leaveButtonHoverStyle = {
  background: '#C4455A',
  transform: 'scale(1.02)',
};

const rightPanel = {
  flex: '0 0 20%',
  background: '#fff',
  border: '3px solid #CFE1B9',
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
  const [chatMessages, setChatMessages] = useState([
    { sender: 'Anna', message: 'Great presentation everyone!', time: '10:30 AM' },
    { sender: 'Mark', message: 'Thanks! Any questions?', time: '10:31 AM' },
    { sender: 'Marina', message: 'Can we discuss the timeline?', time: '10:32 AM' },
    { sender: 'Elizabeth', message: 'The timeline looks good to me.', time: '10:33 AM' },
    { sender: 'Anna', message: 'Perfect! Let\'s move to Q&A.', time: '10:34 AM' }
  ]);
  const [newChatMessage, setNewChatMessage] = useState('');
  const [agendaItems, setAgendaItems] = useState([
    { item: 'Project Overview', time: '15 min' },
    { item: 'Q&A Session', time: '10 min' },
    { item: 'Next Steps', time: '5 min' }
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
        time: '5 min' 
      }]);
      setNewAgendaItem('');
    }
  };

  const handleJoinMeeting = () => {
    if (meetingCode.trim()) {
      setIsInCall(true);
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
            <svg height="24" width="24" viewBox="0 0 24 24" fill="none" stroke="#728156" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="4" />
              <path d="M16 20v-2a4 4 0 0 0-8 0v2" />
            </svg>
          </button>
          {profileOpen && (
            <div className="profile-dropdown-new">
              <div style={{ padding: '0.5rem 1rem', borderBottom: '1px solid #CFE1B9', color: '#728156', fontWeight: 600, fontSize: '0.9rem' }}>
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
        <div style={midPanel}>
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
                margin: '0 auto 3px auto'
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
                }}>01:28:24</span>
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
                  <div style={volumeBarStyle}>
                    <div style={volumeLevelStyle}></div>
                  </div>
                </div>
                
                <div style={actionButtonsStyle}>
                  <button 
                    style={hoveredControl === 'mute' ? { ...controlButtonStyle, ...controlButtonHoverStyle } : controlButtonStyle}
                    onMouseEnter={() => setHoveredControl('mute')}
                    onMouseLeave={() => setHoveredControl(null)}
                    onClick={() => handleControlClick('mute')}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                      <line x1="12" y1="19" x2="12" y2="23"/>
                      <line x1="8" y1="23" x2="16" y2="23"/>
                    </svg>
                  </button>
                  
                  <button 
                    style={hoveredControl === 'video' ? { ...controlButtonStyle, ...controlButtonHoverStyle } : controlButtonStyle}
                    onMouseEnter={() => setHoveredControl('video')}
                    onMouseLeave={() => setHoveredControl(null)}
                    onClick={() => handleControlClick('video')}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M23 7a16 16 0 0 1-6.26 12.69"/>
                      <path d="M20.84 4.61a19.5 19.5 0 0 1-8.13 8.13"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
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
                    style={hoveredControl === 'chat' ? { ...controlButtonStyle, ...controlButtonHoverStyle } : controlButtonStyle}
                    onMouseEnter={() => setHoveredControl('chat')}
                    onMouseLeave={() => setHoveredControl(null)}
                    onClick={() => handleControlClick('chat')}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                  </button>
                  
                  <button 
                    style={hoveredControl === 'participants' ? { ...controlButtonStyle, ...controlButtonHoverStyle } : controlButtonStyle}
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
              background: 'linear-gradient(135deg, #E7F5DC 0%, #CFE1B9 100%)'
            }}>
              <div style={{
                textAlign: 'center',
                marginBottom: '40px'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #728156 0%, #CFE1B9 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px auto',
                  boxShadow: '0 8px 32px rgba(114, 129, 86, 0.2)'
                }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                    <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 6h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"/>
                  </svg>
                </div>
                <h2 style={{
                  fontSize: '32px',
                  fontWeight: '700',
                  color: '#728156',
                  marginBottom: '8px',
                  textAlign: 'center'
                }}>
                  Welcome back, {userName}!
                </h2>
                <p style={{
                  fontSize: '16px',
                  color: '#728156',
                  margin: '0',
                  textAlign: 'center'
                }}>
                  Ready to join your next meeting?
                </p>
              </div>
              
              <div style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                padding: '40px',
                boxShadow: '0 10px 40px rgba(114, 129, 86, 0.15)',
                width: '100%',
                maxWidth: '450px',
                border: '1px solid rgba(114, 129, 86, 0.1)'
              }}>
                <div style={{
                  textAlign: 'center',
                  marginBottom: '30px'
                }}>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#728156',
                    marginBottom: '8px'
                  }}>
                    Join a Meeting
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#728156',
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
                      color: '#728156'
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
                        border: '2px solid #CFE1B9',
                        borderRadius: '12px',
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
                      background: meetingCode.trim() ? 'linear-gradient(135deg, #728156 0%, #5a6b47 100%)' : '#CFE1B9',
                      color: meetingCode.trim() ? '#fff' : '#728156',
                      border: 'none',
                      borderRadius: '12px',
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: meetingCode.trim() ? 'pointer' : 'not-allowed',
                      transition: 'all 0.2s ease',
                      boxShadow: meetingCode.trim() ? '0 4px 12px rgba(114, 129, 86, 0.3)' : 'none'
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
                  marginTop: '20px',
                  padding: '16px',
                  backgroundColor: '#E7F5DC',
                  borderRadius: '8px',
                  border: '1px solid #CFE1B9'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '12px',
                    color: '#728156'
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                    <span>Meeting codes are 6-8 digits (numbers only)</span>
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
                  color: '#728156'
                }}>Meeting Agenda</h4>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  marginBottom: '10px'
                }}>
                  {agendaItems.map((item, index) => (
                    <div key={index} style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '12px',
                      color: '#666'
                    }}>
                      <div style={{
                        width: '6px',
                        height: '6px',
                        backgroundColor: '#728156',
                        borderRadius: '50%'
                      }}></div>
                      <span>{item.item} ({item.time})</span>
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
                      border: '1px solid #CFE1B9',
                      borderRadius: '4px',
                      fontSize: '11px',
                      outline: 'none'
                    }}
                  />
                  <button 
                    onClick={handleAddAgendaItem}
                    style={{
                      padding: '6px 10px',
                      background: '#728156',
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
                borderBottom: '1px solid rgba(114, 129, 86, 0.2)'
              }}>
                <button 
                  style={{
                    background: rightPanelView === 'chat' ? '#728156' : '#E7F5DC',
                    color: rightPanelView === 'chat' ? '#fff' : '#728156',
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
                    background: rightPanelView === 'participants' ? '#728156' : '#E7F5DC',
                    color: rightPanelView === 'participants' ? '#fff' : '#728156',
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
                      color: '#728156'
                    }}>Group Chat</h4>
                    <div style={{
                      backgroundColor: '#f8f9fa',
                      borderRadius: '8px',
                      padding: '10px',
                      maxHeight: '250px',
                      overflowY: 'auto',
                      marginBottom: '10px'
                    }}>
                      {chatMessages.map((msg, index) => (
                        <div key={index} style={{
                          marginBottom: '8px',
                          fontSize: '12px'
                        }}>
                          <strong style={{color: '#728156'}}>{msg.sender}:</strong> 
                          <span style={{color: '#666'}}> {msg.message}</span>
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
                          border: '1px solid #CFE1B9',
                          borderRadius: '6px',
                          fontSize: '12px',
                          outline: 'none'
                        }}
                      />
                      <button 
                        onClick={handleSendMessage}
                        style={{
                          padding: '8px 12px',
                          background: '#728156',
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
                      color: '#728156'
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
                        backgroundColor: 'rgba(114, 129, 86, 0.1)'
                      }}>
                        <div style={{
                          width: '8px',
                          height: '8px',
                          backgroundColor: '#4CAF50',
                          borderRadius: '50%'
                        }}></div>
                        <span style={{fontSize: '12px', color: '#728156', flex: 1}}>Anna Nicholas (Host)</span>
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
                        <span style={{fontSize: '12px', color: '#728156', flex: 1}}>Mark Johnson</span>
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
                        <span style={{fontSize: '12px', color: '#728156', flex: 1}}>Marina Smith</span>
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
                        <span style={{fontSize: '12px', color: '#728156', flex: 1}}>Elizabeth Brown</span>
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