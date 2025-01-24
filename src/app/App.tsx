import ChatPage from '../pages/ChatPage/ChatPage.tsx';
import './styles/normalize.scss'
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/ui/LoginPage.tsx';

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/chat" element={<ChatPage/>} />
    </Routes>
  )
}

export default App
