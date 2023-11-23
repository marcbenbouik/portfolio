import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.css';
import './styles/style.css';
import Main from './component/main/Main';
import { HashRouter as Router, Route, Routes, HashRouter } from 'react-router-dom';
import ProjectStories from './pages/stories/ProjectStories';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter />
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/project' element={<ProjectStories />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
