export type FilterType = 'searchString'|'options'|'numeric-between'|'date-between'|'none';
export type SortType = "none" | "asc" | "desc";
export interface ISearchListItem {
    key: string;
    label: string;
}


export interface IRenderSettings<T1> {
    render: (t: T1) => ISearchListItem
}

export interface ICellComponent{
    /** Component class */
    component: any,
    /** Object with props */
    props:any
}

export interface IFilterModel{
    active: boolean,
    inverted?: boolean
}

export interface IColumnDefinition{
    label:string,
    accessor:string,
    sortAccessor?: string,
    sortable:boolean,
    sortMethod?:"string"|"number",
    filter: FilterType,
    filterOptions?:string[],
    hoveringtipsAccessor?:string,
    informationHide?:boolean,
    columnHide?: boolean,
    allowCellClick?:boolean
    cellComponent?: ICellComponent,
    class?:string,
    readComponent?:string
}

export interface ColumnsCollection{
    sortKey:string;
    sortType:SortType;
    columns:IColumn[];
}

export type FilterModel = ISearchStringFilterModel | IOptionsFilterModel | IDateBetweenFilterModel | INumericBetweenFilterModel;
export interface IColumn{
    definition:IColumnDefinition,
    filter?:FilterModel
}

export interface IFilterModel{
    active: boolean,
    inverted?: boolean
}
 
export interface ISearchStringFilterModel extends IFilterModel {
    searchString:string
}

export interface IOptionsFilterModel extends IFilterModel {
    selectedOptions:string[]
}

export interface IDateBetweenFilterModel extends IFilterModel {
    dateLower:Date;
    dateUpper:Date;
}

export interface INumericBetweenFilterModel extends IFilterModel {
    numberLower?:number|null,
    numberUpper?:number|null
}