import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { UserProvider } from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/hito-8-pizzeria_mammaMia">
      <CartProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
