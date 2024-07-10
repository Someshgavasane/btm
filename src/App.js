import logo from './logo.svg';
import './App.css';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
   <div style={{background: "#e8f9ff",height: "100vh"}}>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Navigate to={'/login'}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </HashRouter>
   </div>
  );
}

export default App;
