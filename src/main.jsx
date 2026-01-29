import { createRoot } from  'react-dom/client';
import { StrictMode } from 'react';
import UsersApp from './UsersApp.jsx';
import './style.css'

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <UsersApp />
  </StrictMode>
);
