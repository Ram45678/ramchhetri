
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import { ThemeProvider } from 'next-themes';
import { Toaster } from './components/ui/sonner';
import './App.css';

function App() {
  // Get the base URL from environment, defaulting to '/'
  const baseUrl = '/';

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
      <Router basename={baseUrl}>
        <div className="responsive-container">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
      <Toaster position="top-right" />
    </ThemeProvider>
  );
}

export default App;
