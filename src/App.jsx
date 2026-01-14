import Profile from './pages/Profile';
import Home from './pages/Home';
import './App.css'
import { ThemeProvider } from './context/ThemeContext';
import ProtectedRoute from './routes/ProtectedRoute';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          {/* Public Route */}
          <Route path='/' element={<Home />} />

          {/* Protected Route */}
          <Route element={<ProtectedRoute />}>
            <Route path='/profile' element={ <Profile /> } />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
