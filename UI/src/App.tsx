import { Component, createEffect, createSignal } from 'solid-js';
import * as api from '../src/apiclient/todoapiclient';
import { ToDoItemInternal } from './models/toDoItem';
import logo from './logo.svg';
import styles from './App.module.css';
import Home from './pages/home';
import Nav from './components/nav';
import { Route, Routes } from 'solid-app-router';
import Finished from './pages/finished';

let [todoitems, setToDoItems] = createSignal<api.ToDoItem[]>([]);

const todoApiClient: api.Client = new api.Client("https://localhost:7111");
createEffect(async ()=>
{
  let allToDo: api.ToDoItem[] = await todoApiClient.getToDo();
  if(allToDo.length)
  {
     setToDoItems(allToDo);
  }

})
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

export { todoitems }
export default App;
