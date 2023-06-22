import {HashRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Footer from "./components/Footer";
import MyList from "./pages/MyList";
import Watch from "./pages/Watch";
import Search from "./pages/Search";
import Browse from "./pages/Browse";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/netflix" element={<Navigate to="/netflix/home"/>}/>
        <Route path="/netflix/home" element={<Browse name="Home"/>}/>
        <Route path="/netflix/tvshows" element={<Browse name="Tv"/>}/>
        <Route path="/netflix/movies" element={<Browse name="Movies"/>}/>
        <Route path="/netflix/mylist" element={<MyList/>}/>
        <Route path="/netflix/:type/:id" element={<Watch/>}/>
        <Route path="/netflix/search/:name" element={<Search/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
