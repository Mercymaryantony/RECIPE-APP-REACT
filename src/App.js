import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Add from './components/Add';
import Delete from './components/Delete';
import Search from './components/Search';
import View from './components/View';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Add/>}/>
      <Route path='/s'element={<Search/>}/>
      <Route path='/d'element={<Delete/>}/>
      <Route path='/v'element={<View/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
