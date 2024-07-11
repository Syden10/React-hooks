import { Navigate, Route, Routes } from 'react-router-dom';
import { About, Home, Login, Navbar } from './';
import { UserProvider } from './context/UserProvider';

export const MainApp = () => {
  return (
    <UserProvider>
      <h1>Main App</h1>
      <Navbar />
      <hr />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='about' element={<About />} />

        <Route path='/*' element={<Navigate to='/home' />} />
      </Routes>
    </UserProvider>
  );
};
