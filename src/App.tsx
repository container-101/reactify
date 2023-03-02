import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '@/pages/HomePage';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence initial={false} mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="*">Page Not Found</Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
