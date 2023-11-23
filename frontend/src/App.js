import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Post from './components/Post';
import Makepost from './components/Makepost';
import Allblogs from './components/Allblogs';
import Profile from './components/Profile';
import PrivateRoute from './utils/Privateroute';
import { AuthProvider } from './utils/Context';
import Searchblogs from './components/Searchblogs';
import Featureblogs from './components/Featureblogs';

function App() {
  const [searchparam, setSearchparam] = useState('');
  return (
    <div className="App">
       <BrowserRouter>
       <AuthProvider>
          <Navbar  {...{setSearchparam, searchparam}}/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/post' element={<Post/>}/>
              <Route path='/post-edit' element={<PrivateRoute><Makepost/></PrivateRoute>}/>
              <Route path='/all-blogs' element={<PrivateRoute><Allblogs/></PrivateRoute>}/>
              <Route path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>}/>
              <Route path='/search' element={<Searchblogs {...{searchparam}}/>}/>
              <Route path='/feature' element={<Featureblogs/>}/>
          </Routes>
          </AuthProvider>
        </BrowserRouter>
    </div>
  );
}

export default App;
