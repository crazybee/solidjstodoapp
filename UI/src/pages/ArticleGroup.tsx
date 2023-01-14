import { Component, Show } from "solid-js";
import { ColumnName } from "../model/tableDefs";
import ItemTable from "../components/ItemTable";
import { mockedItems } from "../App";

let ArticleGroupColumns: ColumnName[] = [
  "code",
  "description",
  "businessLine",
  "itemType",
  "solution",
  "product",
  "cisco",
];
const ArticalGroup: Component = () => {
  return (
    <>
      <Show when={mockedItems().length} fallback={<p>loading...</p>}>
        {
          <ItemTable
            currentTab="ArticleGroup"
            columns={ArticleGroupColumns}
            data={mockedItems()}
          />
        }
      </Show>
    </>
  );
};

export default ArticalGroup;
