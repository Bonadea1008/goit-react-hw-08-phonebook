import { Routes, Route, Link } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div> Home</div>} />
      <Link path="/registration" />
      <Link path="/login" />
      <Link path="/contacts" />
    </Routes>
  );
};
