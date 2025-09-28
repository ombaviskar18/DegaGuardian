import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { ThemeProvider } from './context/ThemeProvider';
import { HomePage } from './pages/HomePage';
import { SendMessagePage } from './pages/SendMessagePage';
import { ContractAnalysisPage } from './pages/ContractAnalysisPage';
import { TokenomicsPage } from './pages/TokenomicsPage';
import { SocialAnalysisPage } from './pages/SocialAnalysisPage';
import { MonitoringPage } from './pages/MonitoringPage';
import { PricingPage } from './pages/PricingPage';
import { TestPage } from './pages/TestPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/send-message" element={<SendMessagePage />} />
          <Route path="/contract-analysis" element={<ContractAnalysisPage />} />
          <Route path="/tokenomics" element={<TokenomicsPage />} />
          <Route path="/social-analysis" element={<SocialAnalysisPage />} />
          <Route path="/monitoring" element={<MonitoringPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
