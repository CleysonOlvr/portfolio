import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import GlobalStyles from './styles/globalStyles'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
      <Header />
  </React.StrictMode>,
)
