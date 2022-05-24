import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Addbus from './component/Addbus';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './component/Search';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'exact element={<Addbus/>}/>
          <Route path='/search'exact element={<Search/>}/>

        </Routes>                                                                                   
      </BrowserRouter>
    </>
  );
}

export default App;
