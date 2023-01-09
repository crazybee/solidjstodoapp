import { Component } from 'solid-js';
import { ToDoItem } from '../apiclient/todoapiclient';
import { ToDoItemInternal} from '../models/toDoItem';
import { savedItems, setSavedItems } from '../pages/finished';

interface Props
{
    todoitem: ToDoItem
}

const finisheItem = (item: ToDoItem) => {
    setSavedItems([item, ...savedItems()]);
    localStorage.setItem('savedItems', JSON.stringify(savedItems()))
}

const unfinisheItem = (item: ToDoItem) => {
    setSavedItems(savedItems()?.filter((i)=> i.name !== item.name));
    localStorage.setItem('savedItems', JSON.stringify(savedItems()))
}

const itemIsSaved = (todoitem: ToDoItem) => {
    const savedItem = savedItems()?.filter((item) => item.name === todoitem.name);
    return savedItem?.length > 0
  }

const ItemCard: Component<Props> = ({todoitem}) => {
    return (
        <div class="card">
            <div class="card-header">name: {todoitem.name}</div>
            <div class="card-body">
            <p class="card-text">{todoitem.description}</p>
            {itemIsSaved(todoitem) ? (
                
                 <button class="btn btn-danger" onClick={() => unfinisheItem(todoitem )}>UnFinish</button>
             
             
            ):(
             
                <button class="btn btn-success" onClick={() => finisheItem(todoitem)}>Finish</button>
        
              
            )
            }
            </div>
        </div>
    )
}


export default ItemCard;