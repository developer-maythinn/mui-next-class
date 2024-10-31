import logo from './logo.svg';
import './App.css';
import Places from './components/Places';
import { Route, Routes } from 'react-router-dom';
import PlaceDetail from './pages/PlaceDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Places />}></Route>
        <Route path="/places/:id" element={<PlaceDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
