import type { Component } from 'solid-js';
import Store from '../store/store';

const Contact: Component = () => {
  const [store] = Store;
  return <h1>Hello From Contact Page {store.name}</h1>;
};

export default Contact;
