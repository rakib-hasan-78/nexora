import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 className='text-8xl uppercase italic font-black text-center' >hello world</h1>
  </StrictMode>
);
