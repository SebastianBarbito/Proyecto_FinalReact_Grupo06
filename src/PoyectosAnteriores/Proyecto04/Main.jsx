import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import AppEstrella from './AppEstrella';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppEstrella />
  </StrictMode>,
);
