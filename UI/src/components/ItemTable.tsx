

import { createTable } from '@tanstack/solid-table';
import { Component } from 'solid-js';
import { IRenderSettings,ISearchListItem, IColumnDefinition, IColumn, ColumnsCollection} from './listComumn'
interface Props<T> {
    value: ColumnsCollection,
    clickable: boolean,
    data: T[],
    


 }
const ItemTable: Component = () => {


    return (
        <div>
            <h2>ItemTable</h2>
        </div>
    )
}

export default ItemTable;



