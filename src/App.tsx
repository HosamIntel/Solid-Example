import type { Component } from 'solid-js';
import { lazy } from 'solid-js';
import { Routes, Route } from '@solidjs/router';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
import Navbar from './components/Navbar';

const App: Component = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path={['login', 'sign-up']} element={<h1>Hello Sign Shit</h1>} />
      </Routes>
    </>
  );
};

export default App;
