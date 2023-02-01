import { A } from '@solidjs/router';
import type { Component } from 'solid-js';

const Navbar: Component = () => {
  return (
    <nav class='flex flex-row justify-center items-center gap-20px w-full'>
      <A href='/'>Home</A>
      <A href='/about'>About</A>
      <A href='/contact'>Contact</A>
    </nav>
  );
};

export default Navbar;
