import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import StartPage from './pages/StartPage';
import HomePage from './pages/HomePage';
import styled from 'styled-components'
import DiaryPage from './pages/DiaryPage';

function App() {
  return (
    <div className='app'>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/diary' element={<DiaryPage />} />
        </Routes>
    </div>
  );
}

export default App;
