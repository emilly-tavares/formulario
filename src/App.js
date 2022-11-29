import React from 'react';
import './App.css';
import Form from './Form';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ConfirmacaoDados from './ConfirmacaoDados';


function App() {
  return(
    
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Form/>} />
            <Route path='/confirmacao' element={<ConfirmacaoDados/>} />
            

        </Routes>
      </BrowserRouter>
    </div>

    
  );
  
}
export default App;
