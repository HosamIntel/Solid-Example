import { Component, For } from 'solid-js';
import { createStore } from 'solid-js/store';
import Store from '../store/store';

const About: Component = () => {
  const [store] = Store;
  const [data] = createStore([
    { id: 1, name: 'Hosam' },
    { id: 2, name: 'Ali' },
    { id: 3, name: 'Mark' },
  ]);
  return (
    <div>
      <h1>Hello From About Page {store.name}</h1>
      <For each={data}>
        {(item) => <p>{item.name}</p>}
      </For>
    </div>
  );
};

export default About;
