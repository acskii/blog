import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Posts from './pages/Posts';
import ErrorPage from './pages/Error';
import Footer from './components/Footer';
import About from './pages/About';

function App() {
  return (
    <MantineProvider defaultColorScheme='light'>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/error" element={<ErrorPage/>} />
          <Route path="/posts" element={<Posts/>} />
          <Route path="/posts/:id" element={<Posts/>} />
        </Routes>
      </main>
      <Footer />
    </MantineProvider>
  );
}

export default App
