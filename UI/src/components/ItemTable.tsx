import { Component, For, Show, createEffect, createSignal } from "solid-js";
import { TabType, TableRow } from "../model/tableDefs";
import * as apiclient from "../apiclient/mockedItemApiClient";
import {
  CellContext,
  ColumnDef,
  ColumnOrderState,
  VisibilityState,
  createSolidTable,
  flexRender,
  getCoreRowModel,
} from "@tanstack/solid-table";

interface Props {
  currentTab: TabType;
  columns: string[];
  data: apiclient.MockedItem[];
}

function convertToInternalRows(data: apiclient.MockedItem[]): TableRow[] {
  let rowItems: TableRow[] = [];
  if (data.length) {
    data.forEach((item) => {
      rowItems.push({
        code: item.code || "",
        description: item.description || "",
        cisco: item.cisco || "",
        businessLine: item.businessLine || "",
        solution: item.solution || "",
        itemType: item.itemType || "",
        product: item.product || "",
        saleArticleGroup: item.saleArticalGroup || "",
        stockBtwCode: item.stockBtwCode || "",
      });
    });
  }
  return rowItems;
}

const ItemTable: Component<Props> = ({ currentTab, columns, data }) => {
  console.log("got data" + data.length);
  const [columnOrder, setColumnOrder] = createSignal<ColumnOrderState>([]);
  const [columnVisibility, setColumnVisibility] = createSignal<VisibilityState>(
    {}
  );

  let internalData: TableRow[] = convertToInternalRows(data);
  let internalColumns: ColumnDef<TableRow>[] = [];
  const alertMsg = (info: CellContext<TableRow, any>) => {
    window.alert("Take some action or redirect for cell:" + info.getValue());
  };
  columns.forEach((columnitem) => {
    internalColumns.push({
      accessorKey: columnitem,
      header: () => (
        <span>{columnitem.charAt(0).toUpperCase() + columnitem.slice(1)}</span>
      ),
      cell: (info) => (
        <div onClick={() => alertMsg(info)} style="cursor: pointer;">
          <i>{info.getValue<string>()}</i>
        </div>
      ),
    });
  });

  const table = createSolidTable({
    get data() {
      return internalData;
    },
    columns: internalColumns,
    state: {
      get columnOrder() {
        return columnOrder();
      },
      get columnVisibility() {
        return columnVisibility();
      },
    },
    onColumnOrderChange: setColumnOrder,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <h2>{currentTab}</h2>
      <div class="p-2">
        <div class="inline-block border border-black shadow rounded">
          <div class="px-1 border-b border-black">
            <label>
              <input
                checked={table.getIsAllColumnsVisible()}
                onChange={table.getToggleAllColumnsVisibilityHandler()}
                type="checkbox"
              />{" "}
              Toggle All
            </label>
          </div>
          <For each={table.getAllLeafColumns()}>
            {(column) => (
              <div class="px-1">
                <label>
                  <input
                    checked={column.getIsVisible()}
                    onChange={column.getToggleVisibilityHandler()}
                    type="checkbox"
                  />{" "}
                  {column.id}
                </label>
              </div>
            )}
          </For>
        </div>
        <table>
          <thead>
            <For each={table.getHeaderGroups()}>
              {(headerGroup) => (
                <tr>
                  <For each={headerGroup.headers}>
                    {(header) => (
                      <th colSpan={header.colSpan}>
                        <Show when={!header.isPlaceholder}>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </Show>
                      </th>
                    )}
                  </For>
                </tr>
              )}
            </For>
          </thead>
          <tbody>
            <For each={table.getRowModel().rows}>
              {(row) => (
                <tr>
                  <For each={row.getVisibleCells()}>
                    {(cell) => (
                      <td>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    )}
                  </For>
                </tr>
              )}
            </For>
          </tbody>
          <tfoot>
            <For each={table.getFooterGroups()}>
              {(footerGroup) => (
                <tr>
                  <For each={footerGroup.headers}>
                    {(header) => (
                      <th colSpan={header.colSpan}>
                        <Show when={!header.isPlaceholder}>
                          {flexRender(
                            header.column.columnDef.footer,
                            header.getContext()
                          )}
                        </Show>
                      </th>
                    )}
                  </For>
                </tr>
              )}
            </For>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default ItemTable;
