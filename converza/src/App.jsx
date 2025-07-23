import { useState } from 'react';
import MainPage from './mainpage.jsx';
import ExploreNow from './explorenow.jsx';

function App() {
  const [page, setPage] = useState('main');

  if (page === 'main') {
    return <MainPage onExplore={() => setPage('explore')} />;
  }
  return <ExploreNow />;
}

export default App;
