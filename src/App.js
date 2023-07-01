import {HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Footer from './components/Footer';
import MyList from './pages/MyList';
import Watch from './pages/Watch';
import Search from './pages/Search';
import Browse from './pages/Browse';
import Navbar from './components/Navbar';
import MobileNavbar from './components/MobileNavbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Navigate to='/home'/>}/>
        <Route path='/home' element={<Browse name='Home'/>}/>
        <Route path='/tvshows' element={<Browse name='Tv'/>}/>
        <Route path='/movies' element={<Browse name='Movies'/>}/>
        <Route path='/mylist' element={<MyList/>}/>
        <Route path='/:type/:id' element={<Watch/>}/>
        <Route path='/search/:name' element={<Search/>}/>
      </Routes>
      <Footer/>
      <MobileNavbar/>
    </Router>
  );
}

export default App;
