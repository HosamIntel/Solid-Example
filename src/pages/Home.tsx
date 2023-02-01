import type { Component } from 'solid-js';
import { createSignal, onMount } from 'solid-js';
import Store from '../store/store';

const Home: Component = () => {
  const [pageName, setPageName] = createSignal('Shit');
  const [store, setStore] = Store;

  onMount(() => setPageName('Home'));
  onMount(() => {
    if (store.name !== 'Hosam') {
      setStore('name', 'Hosam');
    }
  });

  return <h1>{pageName()}</h1>;
};

export default Home;
