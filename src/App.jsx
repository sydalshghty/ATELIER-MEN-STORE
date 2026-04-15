import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home-Page';
import LoginPage from './pages/Login-Page';
import RegisterPage from './pages/Register-Page';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage/>}/>
      </Routes>
    </>
  );
}

export default App;
