import './App.css';
import { Route, Routes } from 'react-router-dom';
import StartPage from './pages/StartPage';
import HomePage from './pages/HomePage';
import DiaryPage from './pages/DiaryPage';
import NewDiaryPage from './pages/DiaryPage/NewDiaryPage';
import DiaryDetailPage from './pages/DiaryPage/DiaryDetailPage';
import CalendarPage from './pages/CalendarPage';
import ChatPage from './pages/ChatPage';
import LoginPage from './pages/StartPage/LoginPage';
import SettingPage from './pages/SettingPage';

function App() {
  return (
    <div className='app'>
        <Routes>
          <Route path='/' element={<StartPage />} />
          <Route path='/login' element={<LoginPage />} />

          <Route path='/home' element={<HomePage />} />
          <Route path='/setting' element={<SettingPage />} />

          <Route path='/diary' element={<DiaryPage />} />
          <Route path='/diary/new' element={<NewDiaryPage/>} />
          <Route path='/diary/detail' element={<DiaryDetailPage/>} />
          <Route path='/calendar' element={<CalendarPage/>} />
          <Route path='/chat' element={<ChatPage/>} />
          

        </Routes>
    </div>
  );
}

export default App;
