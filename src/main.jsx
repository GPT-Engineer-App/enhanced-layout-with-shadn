import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import ActionDrawerPage from './pages/ActionDrawerPage.jsx';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/action-drawer" element={<ActionDrawerPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
