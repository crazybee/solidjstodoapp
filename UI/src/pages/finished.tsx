import { Component, createSignal, For } from 'solid-js';
import { ToDoItem } from '../apiclient/todoapiclient';
import ItemCard from '../components/ItemCard';

const itemsFromLocalStorage = JSON.parse(localStorage.getItem('savedItems') || '[]');
const [savedItems, setSavedItems] = createSignal(itemsFromLocalStorage as ToDoItem[])
const finished: Component = () => {
    return (
        <div>
            <h2>Your finished items</h2>
            <For each={savedItems()}>{(item: ToDoItem) => <ItemCard todoitem={item} />}</For>
        </div>
    )
}

export {savedItems, setSavedItems};
export default finished;    