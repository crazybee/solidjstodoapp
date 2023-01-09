import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Home from './pages/home';
import Nav from './components/nav';
import { Route, Routes } from 'solid-app-router';
import Finished from './pages/finished';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Nav/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/finished" element={<Finished />} />
      </Routes>
      
    </div>
  );
};

export default App;
