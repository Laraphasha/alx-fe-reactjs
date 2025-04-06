import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css';
import App from './App.jsx'
import Search from './components/Search.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route index element={<Search />} />
    </Routes>
  </BrowserRouter>,
)
