import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Store } from './pages/Store';

function App() {
  return (
    <Container className='mb-4'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Container>
  );
}

export default App;
