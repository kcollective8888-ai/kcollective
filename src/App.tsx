import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Home from './pages/Home';
import AppDashboard from './pages/AppDashboard';

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<AppDashboard />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;
