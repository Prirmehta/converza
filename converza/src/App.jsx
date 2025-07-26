import { useState } from 'react';
import MainPage from './mainpage.jsx';
import ExploreNow from './explorenow.jsx';
import Login from './login.jsx';
import Signup from './signup.jsx';
import Dashboard from './dashboard.jsx';

function App() {
  const [page, setPage] = useState('main');
  const [userName, setUserName] = useState('User');

  if (page === 'main') {
    return <MainPage onExplore={() => setPage('explore')} onLogin={() => setPage('login')} onSignup={() => setPage('signup')} />;
  }
  if (page === 'explore') {
    return <ExploreNow onBackToMain={() => setPage('main')} onLogin={() => setPage('login')} onSignup={() => setPage('signup')} />;
  }
  if (page === 'login') {
    return <Login onBack={() => setPage('main')} onSignup={() => setPage('signup')} onDashboard={(name) => { setUserName(name); setPage('dashboard'); }} />;
  }
  if (page === 'signup') {
    return <Signup onBack={() => setPage('main')} onLogin={() => setPage('login')} onDashboard={(name) => { setUserName(name); setPage('dashboard'); }} />;
  }
  if (page === 'dashboard') {
    return <Dashboard onBack={() => setPage('main')} userName={userName} />;
  }
  return null; // Fallback return
}

export default App;
