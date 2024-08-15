import { useState } from 'react'
import './App.css'
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';
import { BannerState } from './types';

function App() {
  const [banner, setBanner] = useState<BannerState>({
    description: '',
    timer: 0,
    link: ''
  });
  const [showDashboard, setShowDashboard] = useState(false);
  return (
    <div>
      <Banner banner={banner} setBanner={setBanner} />
      <button onClick={() => setShowDashboard(!showDashboard)}>
        {showDashboard ? 'Hide Dashboard' : 'Show Dashboard'}
      </button>
      {showDashboard && <Dashboard banner={banner} setBanner={setBanner}/>}
    </div>
  );
}

export default App
