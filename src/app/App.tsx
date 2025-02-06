import ChatPage from '../pages/ChatPage/ChatPage.tsx';
import './styles/normalize.scss'
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/ui/LoginPage.tsx';
import PrivateChatPage from '../pages/PrivateChatPage/PrivateChatPage.tsx';
import GroupChatPage from '../pages/GroupChatPage/ui/GroupChatPage';

function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginPage/>} />
      <Route path="/chat" element={<ChatPage/>} />
      <Route path="/chat/private/:name" element={<PrivateChatPage/>} />
      <Route path="/chat/group/:group" element={<GroupChatPage/>} />
    </Routes>
  )
}

export default App
