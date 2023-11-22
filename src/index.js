import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.css';
import './styles/style.css';
import Header from './component/header/Header';
import Section from './component/section/Section';
import Project from './component/project/Project';
import StatisticBar from './component/statisticBar/StatisticBar';
import GridView from './component/gridView/GridView';
import Grid from './component/grid/Grid';
import Main from './component/main/Main';
import ProjectPage from './pages/ProjectPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectStories from './pages/ProjectStories';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Router>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/project' element={<ProjectStories />} />
        </Routes>
      </Router>
    </BrowserRouter>
  </React.StrictMode>
);
