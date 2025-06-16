import './styles/normalize.scss';
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';
import { Routes, Route } from 'react-router-dom';
import NoPage from './components/NoPage/NoPage';

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/favorite' element={<Favorite />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </Container>
    </>
  );
}
export default App;
