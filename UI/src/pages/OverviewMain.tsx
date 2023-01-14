import { Component, For, Show, createEffect } from "solid-js";
import { ColumnName } from "../model/tableDefs";
import { mockedItems } from "../App";
import ItemTable from "../components/ItemTable";

let OverviewColumns: ColumnName[] = [
  "code",
  "description",
  "businessLine",
  "itemType",
  "solution",
  "product",
  "cisco",
];

const OverviewMain: Component = () => {
  return (
    <>
      <Show when={mockedItems().length} fallback={<p>loading...</p>}>
        {
          <ItemTable
            currentTab="OverviewMain"
            columns={OverviewColumns}
            data={mockedItems()}
          />
        }
      </Show>
    </>
  );
};

export default OverviewMain;
