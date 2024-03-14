import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import PostContextProvider from './utils/postContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PostContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  </PostContextProvider>
)
