import { Component, Show } from "solid-js";
import { ColumnName } from "../model/tableDefs";
import ItemTable from "../components/ItemTable";
import { mockedItems } from "../App";

let DetailColumns: ColumnName[] = [
  "code",
  "description",
  "saleArticleGroup",
  "stockBtwCode",
  "businessLine",
  "itemType",
  "solution",
  "product",
  "cisco",
];

const Details: Component = () => {
  return (
    <>
      <Show when={mockedItems().length} fallback={<p>loading...</p>}>
        {
          <ItemTable
            currentTab="Details"
            columns={DetailColumns}
            data={mockedItems()}
          />
        }
      </Show>
    </>
  );
};

export default Details;
