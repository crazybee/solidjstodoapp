import { NavLink } from "solid-app-router";
import { Component } from "solid-js";
type TabOptions = "List" | "Details" | "ArticalGroup";

function getPathForPage(page: TabOptions): string {
  switch (page) {
    case "List":
      return "/list";
    case "Details":
      return "/details";
    case "ArticalGroup":
      return "/articalgroup";
    default:
      return "/list";
  }
}
const Navigationtab: Component = () => {
  return (
    <nav class="mt-5 mb-3">
      <NavLink href="/list" class="btn btn-primary" activeClass="btn-success">
        List
      </NavLink>
      <NavLink
        href="/details"
        class="btn btn-primary"
        activeClass="btn-success"
      >
        Details
      </NavLink>
      <NavLink
        href="/articalgroup"
        class="btn btn-primary"
        activeClass="btn-success"
      >
        ArticalGroup
      </NavLink>
    </nav>
  );
};

export default Navigationtab;
