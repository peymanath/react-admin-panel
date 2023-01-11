import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import App from './App';
import Peyman from './Components/peyman';

const root = ReactDOM.createRoot(document.getElementById('application'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/peyman' element={<Peyman />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
