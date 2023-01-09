import { Component, For } from 'solid-js';
import { ToDoItem } from '../apiclient/todoapiclient';
import { todoitems } from '../App';
import ItemCard from '../components/ItemCard';
import { ToDoItemInternal} from '../models/toDoItem';

const home: Component = () => {
    return (
        <div>
             <For each={todoitems()} fallback={<p>Loading...</p>}>{(item: ToDoItem) => <ItemCard todoitem ={item} />}</For>
        </div>
    )
}

export default home;    