
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import{ BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from "C:\\Users\\hp\\Desktop\\imdb\\imdb\\src\\components\\movieList\\movieList.js";
import Movie from './pages/movieDetail/movie';

import App from './components/footer/footer';
function App1() {
  return (
    <div className="App">
     <Router>
      <Header  />
       <Routes>
        <Route index element ={<Home />}></Route>
        <Route path ="movie/:id" element ={< Movie />}></Route>
        <Route path ="movies/:type" element ={< MovieList />}></Route>
        <Route path ="/" element ={<h1>Error</h1>}></Route>
       </Routes>
      <App />
     </Router>
    </div>
  );
}

export default App1;
