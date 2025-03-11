
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import { ThemeProvider } from 'next-themes';
import { Toaster } from './components/ui/sonner';
import './App.css';

function App() {
  // Get the base URL from the vite config
  const baseUrl = import.meta.env.BASE_URL || '/';

  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      <Router basename={baseUrl}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Toaster position="top-right" />
    </ThemeProvider>
  );
}

export default App;
