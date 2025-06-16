import './styles/normalize.scss';
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';
import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Home />
        <About />
        <Favorite />
      </Container>
    </>
  );
}
export default App;
