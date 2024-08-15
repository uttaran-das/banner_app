import { useState } from 'react'
import './App.css'
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';
import { BannerState } from './types';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes';

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
      <ThemeProvider theme={theme}>
        <Button variant="contained" onClick={() => setShowDashboard(!showDashboard)}>
          {showDashboard ? 'Hide Dashboard' : 'Show Dashboard'}
        </Button>
      </ThemeProvider>
      {showDashboard && <Dashboard banner={banner} setBanner={setBanner} />}
    </div>
  );
}

export default App
