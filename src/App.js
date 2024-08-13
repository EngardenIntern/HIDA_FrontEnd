import './App.css';
import { Route, Routes } from 'react-router-dom';
import StartPage from './pages/StartPage';
import HomePage from './pages/HomePage';
import DiaryPage from './pages/DiaryPage';
import NewDiaryPage from './pages/DiaryPage/NewDiaryPage';
import DiaryDetailPage from './pages/DiaryPage/DiaryDetailPage';

function App() {
  return (
    <div className='app'>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/diary' element={<DiaryPage />} />
          <Route path='/diary/new' element={<NewDiaryPage/>} />
          <Route path='/diary/detail' element={<DiaryDetailPage/>} />
        </Routes>
    </div>
  );
}

export default App;
