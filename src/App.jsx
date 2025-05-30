import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Posts from './pages/Posts';
import Page404 from './pages/404';
import Footer from './components/Footer';

function App() {
  return (
    <MantineProvider defaultColorScheme='dark'>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<Page404/>} />
          <Route path="/404" element={<Page404/>} />
          <Route path="/posts" element={<Posts/>} />
          <Route path="/posts/:id" element={<Posts/>} />
        </Routes>
      </main>
      <Footer />
    </MantineProvider>
  );
}

export default App
