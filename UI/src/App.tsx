import { Component, createSignal, onMount } from "solid-js";
import * as api from "../src/apiclient/mockedItemApiClient";
import Navigationtab from "./components/navigationtab";
import { Route, Routes } from "solid-app-router";
import OverviewMain from "./pages/overviewMain";
import Details from "./pages/details";
import ArticalGroup from "./pages/ArticleGroup";

const mockedItemClient: api.Client = new api.Client("https://localhost:7111");
const [mockedItems, setMockedItems] = createSignal<api.MockedItem[]>([]);

onMount(async () => {
  let mockedItems: api.MockedItem[] = [];
  setTimeout(async () => {
    console.log("simulating loading time");
    mockedItems = await mockedItemClient.allItem();
    console.log(mockedItems.length);

    if (mockedItems.length) {
      setMockedItems(mockedItems);
    }
  }, 5000);
});

const App: Component = () => {
  return (
    <div class="container">
      <Navigationtab />
      <Routes>
        <Route path="/" element={<OverviewMain />} />
        <Route path="/list" element={<OverviewMain />} />
        <Route path="/details" element={<Details />}></Route>
        <Route path="/articalgroup" element={<ArticalGroup />}></Route>
      </Routes>
    </div>
  );
};

export { mockedItems, setMockedItems, mockedItemClient };
export default App;
