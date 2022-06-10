import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/Portfolio/Portfolio';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Toaster } from 'react-hot-toast';
import Blog from './components/Blog/Blog';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="bg-[url('./assets/background.png')] bg-cover bg-no-repeat bg-origin-content h-screen relative">
      <div className='max-w-7xl mx-auto'>
        <Toaster></Toaster>
        <Navbar></Navbar>
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path=':about' element={<About></About>}></Route>
          <Route path='portfolio' element={<Portfolio></Portfolio>}></Route>
          <Route path='contact' element={<Contact></Contact>}></Route>
          <Route path='blog' element={<Blog></Blog>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
